const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');

app.use(bodyParser.json());

app.get('/', (req, res) => {
      res.send('hi this works');
})
app.post('/calculator', (req, res) => {
    let rateCard = req.body.rateCard;
    let remnantCard = req.body.remnantCard;
    let production = req.body.production;
    let install =  req.body.install;
    let markup = req.body.markup;

    // if (req.body)
}, (err, results) => {
  if (err) return res.status(500).send('error');
  return res.status(200).json(results);
})



app.listen(3000, () => console.log('listening on 3000'));