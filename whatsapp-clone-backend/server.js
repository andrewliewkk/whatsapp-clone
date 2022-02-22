import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

// DB CONFIG
const db_url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.xviw5.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(db_url);

app.get("/", (req, res) => res.status(200).send("hello world"));

app.listen(port, () => console.log(`Listening on localhost:${port}`));
