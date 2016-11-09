let express = require('express');
let app = express();
let jokes = require('./jokes.json').jokes;

app.get('/jokes/random', (req, res) => {
  res.json(getRandomJoke());
});

app.listen(2000, () => {
  console.log('App listening on port 2000!');
});

function getRandomJoke() {
  return jokes[getRandomNumber(0, jokes.length - 1)];
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}