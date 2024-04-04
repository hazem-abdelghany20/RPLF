import express from "express";
import path from 'path';
import payload from "payload";
import fuzzy from "fuzzy";
import levenshtein  from "fast-levenshtein";
import corsOptions from "./corsOptions";

import sendEmail from "./utils/mail";

const cors = require("cors");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/assets', express.static(path.resolve(__dirname, './assets')));

app.get('/', (_, res) => {
  res.redirect('/dashboard');
});


// app.get('/api/search', async (req, res) => { 
//   const entry = req.body.entry.toLowerCase(); // Convert entry to lowercase for case-insensitive search
//   const navBarURL = `http://localhost:${port}/api/globals/nav-bar?locale=undefined&draft=false&depth=1`;
//   const pagesURL = `http://localhost:${port}/api/pages`;
  
//   try {
//     // Fetch data from the API URLs
//     const [navBarResponse, pagesResponse] = await Promise.all([
//       fetch(navBarURL),
//       fetch(pagesURL)
//     ]);

//     if (!navBarResponse.ok || !pagesResponse.ok) {
//       //throw new Error('Failed to fetch data from API');
//       return res.status(500).send({message:"Failed to fetch data from API"});
//     }

//     const navBarData = await navBarResponse.json();
//     const pagesData = await pagesResponse.json();

//     const mainLinks = navBarData["main-links"].map(item => item.link.toLowerCase());

//     const pageNames = pagesData.docs.map(page => page.title.toLowerCase());

//     let filteredMainLinks = mainLinks.filter(link => link.includes(entry));
//     let filteredPageNames = pageNames.filter(name => name.includes(entry));

//     if (filteredMainLinks.length === 0 || filteredPageNames.length === 0) {
//       const options = { extract: el => el };
//       const mainLinksResults = fuzzy.filter(entry, mainLinks, options).map(el => el.original);
//       const pageNamesResults = fuzzy.filter(entry, pageNames, options).map(el => el.original);
//       return res.status(200).json({ mainLinks: mainLinksResults, pageNames: pageNamesResults });
//     } 
//     if (filteredMainLinks.length === 0 || filteredPageNames.length === 0) {
//       const levenshteinThreshold = 3; // Adjust the threshold as needed
//       filteredMainLinks = mainLinks.filter(link => levenshtein.get(entry, link) <= levenshteinThreshold);
//       filteredPageNames = pageNames.filter(name => levenshtein.get(entry, name) <= levenshteinThreshold);
//       return res.status(200).json({ mainLinks: filteredMainLinks, pageNames: filteredPageNames });
//     }
    
    
    
//     return res.status(200).json({ mainLinks: filteredMainLinks, pageNames: filteredPageNames });

    
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Failed to fetch data from API' });
//   }
// });
interface MainLinkData {
    slug: string;
    pages: string[];
}

let filteredMainLinks: { [key: string]: MainLinkData } = {};

app.get('/api/search', async (req, res) => { 
  const entry = req.body.entry.toLowerCase().replace(/&/g, 'and'); // Convert entry to lowercase for case-insensitive search and replace "&" with "and"
  const navBarURL = `http://localhost:${port}/api/globals/nav-bar?locale=undefined&draft=false&depth=1`;
  const pagesURL = `http://localhost:${port}/api/pages`;
  
  try {
    // Fetch data from the API URLs
    const [navBarResponse, pagesResponse] = await Promise.all([
      fetch(navBarURL),
      fetch(pagesURL)
    ]);

    if (!navBarResponse.ok || !pagesResponse.ok) {
      //throw new Error('Failed to fetch data from API');
      return res.status(500).send({message:"Failed to fetch data from API"});
    }

    const navBarData = await navBarResponse.json();
    const pagesData = await pagesResponse.json();
    
    const mainLinks: { [key: string]: MainLinkData } = {};
    navBarData["main-links"].forEach(item => {
      const linkSlug = item.link.toLowerCase().replace(/\s+/g, '_').replace(/&/g, 'and');
      mainLinks[linkSlug] = { slug: linkSlug, pages: [] };
    });

    const pageNames = pagesData.docs.map(page => [page.title.toLowerCase(), page.slug, page.linked_to]);

    pageNames.forEach(page => {
      const [name, slug, linkedTo] = page;
      const mainLinkSlug = linkedTo ? linkedTo.split('/').pop().replace(/&/g, 'and') : null; // Replace "&" with "and" in main link slug
      const mainLink = mainLinkSlug ? mainLinks[mainLinkSlug] : null;
      
      if (mainLink) {
        mainLink.pages.push(slug);
      }
    });

    let filteredMainLinks: { [key: string]: MainLinkData } = {};
    Object.entries(mainLinks).forEach(([mainLinkName, data]) => {
      if (mainLinkName.includes(entry)) {
        filteredMainLinks[mainLinkName] = data;
      }
    });

    let filteredPageNames = pageNames.filter(([name, slug, linkedTo]) => {
      const mainLinkSlug = linkedTo ? linkedTo.split('/').pop().replace(/&/g, 'and') : null;
      return mainLinkSlug && (mainLinks[mainLinkSlug]?.slug.includes(entry) || name.includes(entry));
    });

    if (Object.keys(filteredMainLinks).length === 0 || filteredPageNames.length === 0) {
      const options = { extract: el => el };
      const mainLinksResults = fuzzy.filter(entry, Object.keys(mainLinks), options).map(el => el.original);
      const pageNamesResults = fuzzy.filter(entry, pageNames.map(([name, _]) => name), options).map(el => el.original);
      return res.status(200).json({ mainLinks: mainLinksResults, pageNames: pageNamesResults });
    } 


    filteredPageNames = filteredPageNames.filter(([name, slug]) => name.includes(entry));
    filteredPageNames = filteredPageNames.map(([name, slug]) => [name, slug]);

    return res.status(200).json({ mainLinks: filteredMainLinks, pageNames: filteredPageNames });

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
});





app.post('/api/send-email', async (req, res) => {
  const { emails, texts } = req.body;

  if (!emails || emails.length === 0 || !texts || texts.length === 0 || emails.length !== texts.length) {
    return res.status(400).send({ message: "Emails and texts are required, and they must have the same length." });
  }

  const subject = "Receipt for payment";

  const emailContents = emails.map((email, index) => ({
    to: email,
    subject: subject,
    text: texts[index],
  }));

  const results = await sendEmail(emailContents);

  const allSuccess = results.every(result => result === true);

  if (allSuccess) {
    res.send({ message: "All emails sent successfully!" });
  } else {
    res.status(207).send({
      message: "Some emails may not have been sent successfully.",
      results: results.map((success, index) => ({
        email: emails[index],
        success: success,
      })),
    });
  }
});



const start = async() => {
    await payload.init({
        secret: process.env.PAYLOAD_SECRET_KEY,
        express: app,
  });

  app.listen(port, async () => {
    console.log(
      `Server is up on port ${port}.`
    );
  });
};


start();
app.use(cors(corsOptions))