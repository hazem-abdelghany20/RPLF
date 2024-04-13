import express from "express";
import path from 'path';
import payload from "payload";
import fuzzy from "fuzzy";
import levenshtein  from "fast-levenshtein";
import corsOptions from "./corsOptions";
<<<<<<< HEAD

import cors from "cors";
=======
>>>>>>> 52f179e33520e57b70a401fe341f459e14857d70
import sendEmail from "./utils/mail";


require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173' 
}));

app.use(express.json());
app.use(cors(corsOptions))

app.use('/assets', express.static(path.resolve(__dirname, './assets')));
app.use('/block-media', express.static(path.resolve(__dirname, './block-media')));

app.get('/', (_, res) => {
  res.redirect('/dashboard');
});


<<<<<<< HEAD

=======
>>>>>>> 52f179e33520e57b70a401fe341f459e14857d70
interface MainLinkData {
    slug: string;
    pages: string[];
}

let filteredMainLinks: { [key: string]: MainLinkData } = {};

app.post('/api/search', async (req, res) => { 
  let entry = req.body.entry; // Convert entry to lowercase for case-insensitive search and replace "&" with "and"
  console.log(entry)
  if(entry || entry !==""){
    entry = entry.toLowerCase().replace(/&/g, 'and');
  }
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

    if (Object.keys(filteredMainLinks).length === 0 && filteredPageNames.length === 0) {
      const mainLinksResults = fuzzy.filter(entry, Object.keys(mainLinks), { extract: el => el }).map(el => el.original);
      const pageNamesResults = fuzzy.filter(entry, pageNames.map(([name]) => name), { extract: el => el as string }).map(el => el.original as string);

      // Structure the results back into the expected formats
      mainLinksResults.forEach(link => {
          if (mainLinks[link]) {
              filteredMainLinks[link] = mainLinks[link];
          }
      });

      let structuredPageNamesResults = pageNames.filter(([name]) => pageNamesResults.includes(name));

      return res.status(200).json({ mainLinks: filteredMainLinks, pageNames: structuredPageNamesResults });
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
