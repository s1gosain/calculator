const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/calculator', (req, res) => {
       if (!req.body.initial || !req.body.markup) return res.status(500).send('error');
    else {
    let initial = req.body.initial;
    let markup = req.body.markup;
    let newPrice = initial + (markup/100) * initial;
    let responseData = {
      price: newPrice,
      higher: newPrice > initial
    };
    res.json(responseData)
})



app.listen(3000, () => console.log('listening on 3000'));
