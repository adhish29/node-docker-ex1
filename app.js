const express = require("express");
const { connectToDB } = require("./dbConnection");
const { Message } = require("./msgSchema");

const app = express();

const PORT = process.env.PORT || 3000;

connectToDB();

app.get("/ping", (_, res) => {
  res.send("PONG!!!");
});

app.post("/", async (_, res) => {
  try {
    const messageObj = new Message({ msg: "this is a message by Adhish" });
    await messageObj.save();
    res.send("Entry Saved!!!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred");
  }
});

app.listen(PORT, () => console.log("Listening to http://localhost:3000"));
