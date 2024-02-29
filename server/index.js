// to import modules here go to package.json "typ"e:"module" there
import express from "express";
// if you don't want to type this in package json then use this syntax to import
// const express = require('express') // but we have used import here
import mongoose from "mongoose";
import cors from "cors";
import answerRoutes from './routes/Answers.js'
import userRoutes from "./routes/users.js"; // use .js here
import questionRoutes from './routes/Questions.js'
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); // two server sending request to each other, or communicating with each other, will throw an error, cors will be used as middleware

app.get("/", (req, res) => {
  // root url
  res.send("This is a Stack OverFlow clone Api");
});
app.use("/user", userRoutes); //if url is /user then userRoutes will be used as middleware
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)
// app.post("auth/signup", () => {
//   // function to do signup
//   // but we don't do like this
// instead we will use like this
// });

const PORT = process.env.PORT || 5000;
// we are going to use mongo db atlas - atlas is set up now we need to configure here
const CONNECTION_URL =
  "mongodb+srv://faisal:faisal@stack-overflow-clone.8tphoua.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
