const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const budget = require('./budgetData');

app.use(cors());

//Deleted in video
//app.use('/', express.static('public'));

/*const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 30
        },
        {
            title: 'Rent',
            budget: 350
        },
        {
            title: 'Groceries',
            budget: 90
        },
    ]
};*/

/*Deleted in video

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});*/

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


/*app.get('/budget', (req, res) => {
    res.json(budget);
});*/
