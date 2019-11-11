const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");
const app = express();

// Setup Logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Add body-parser
app.use(express.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/api/words/:levelId", async (req, res) => {
  try {
    const { levelId } = req.params();
    const wordsByLevel = await db("words")
      .select()
      .where("level_id", levelId);

    res.json(wordsByLevel);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.post("/api/reviews", async (req, res) => {
  try {
    const { sentences } = req.body;
    // const getNumber = await db("")

    // TODO: Reviewsの番号を返す
    res.status(200).json("Number");
  } catch (err) {
    console.error("Error posting your sentences!", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
