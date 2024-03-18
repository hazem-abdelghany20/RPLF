import express from "express";
import payload from "payload";

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.redirect('/dashboard');
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