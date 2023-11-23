// to import modules here go to package.json "typ"e:"module" there
import express from "express";
// if you don't want to type this in package json then use this syntax to import
// const express = require('express') // but we have used import here
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a Stack OverFlow clone Api");
});
const PORT = process.env.PORT || 5000;
// we are going to use mongo db atlas - atlas is set up now we need to configure here
const CONNECTION_URL =
  "mongodb+srv://faisal:faisal@stack-overflow-clone.8tphoua.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUinfiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .then((err) => console.log(err.message));
