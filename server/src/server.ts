import express from "express";
import payload from "payload";
import fuzzy from "fuzzy";
import levenshtein  from "fast-levenshtein";
import corsOptions from "./corsOptions";
const cors = require("cors");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (_, res) => {
  res.redirect('/dashboard');
});



app.get('/api/search', async (req, res) => { 
  const entry = req.body.entry.toLowerCase(); // Convert entry to lowercase for case-insensitive search
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

    const mainLinks = navBarData["main-links"].map(item => item.link.toLowerCase());

    const pageNames = pagesData.docs.map(page => page.title.toLowerCase());

    let filteredMainLinks = mainLinks.filter(link => link.includes(entry));
    let filteredPageNames = pageNames.filter(name => name.includes(entry));

    if (filteredMainLinks.length === 0 || filteredPageNames.length === 0) {
      const options = { extract: el => el };
      const mainLinksResults = fuzzy.filter(entry, mainLinks, options).map(el => el.original);
      const pageNamesResults = fuzzy.filter(entry, pageNames, options).map(el => el.original);
      return res.status(200).json({ mainLinks: mainLinksResults, pageNames: pageNamesResults });
    } 
    if (filteredMainLinks.length === 0 || filteredPageNames.length === 0) {
      const levenshteinThreshold = 3; // Adjust the threshold as needed
      filteredMainLinks = mainLinks.filter(link => levenshtein.get(entry, link) <= levenshteinThreshold);
      filteredPageNames = pageNames.filter(name => levenshtein.get(entry, name) <= levenshteinThreshold);
      return res.status(200).json({ mainLinks: filteredMainLinks, pageNames: filteredPageNames });
    }
    
    
    
    return res.status(200).json({ mainLinks: filteredMainLinks, pageNames: filteredPageNames });

    
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data from API' });
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