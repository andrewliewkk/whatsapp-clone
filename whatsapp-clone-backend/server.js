import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Messages from './dbMessages.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

// DB CONFIG
const dbUrl = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.xviw5.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(dbUrl).catch((err)=>{
  console.log("Unable to connect to mongoDB")
});

app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/api/v1/messages/new', (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));
