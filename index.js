'use strict';

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get('/basketball', (req, res) => {
  res.send('I enjoy basketball because of the fast-paced and dynamic nature of the game, which keeps me engaged and excited throughout each match.');
});

app.listen(PORT, () => {
  console.log('Cloud server is running!');
});
