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
    const { levelId } = req.params;
    const wordsByLevel = await db("words")
      .select()
      .where("level_id", Number(levelId));

    res.json(wordsByLevel);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.get("/api/reviews/all", async (req, res) => {
  try {
    // Get all reviews
    let data = await db("reviews")
      .join("sentences", "reviews.id", "=", "sentences.review_id")
      .select({
        id: "sentences.id",
        order: "sentences.order",
        word: "sentences.word",
        sentence: "sentences.sentence",
        at_datetime: "reviews.at_datetime",
      })
      .orderBy("sentences.order")
      .orderBy("reviews.id");

    res.json(data);
  } catch (err) {
    console.error("Error posting your game!", err);
    res.sendStatus(500);
  }
});

app.post("/api/reviews", async (req, res) => {
  try {
    const { gameLevel } = req.body;

    // Get gameNumber
    let count = await db("reviews").count("id");
    count = Number(count[0].count) + 1;

    // Insert Current Game
    await db("reviews").insert({
      id: count,
      level_id: gameLevel,
    });

    res.status(200).json({
      gameNo: count,
    });
  } catch (err) {
    console.error("Error posting your game!", err);
    res.sendStatus(500);
  }
});

app.post("/api/sentences", async (req, res) => {
  try {
    const { gameNo, word, sentences } = req.body;
    await db("sentences").insert({
      review_id: gameNo,
      order: 1,
      word,
      sentence: sentences,
    });

    res.sendStatus(200);
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
