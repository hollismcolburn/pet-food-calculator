const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// Function to serve all static files
// inside public directory.
app.use(express.static('public'));
app.use('/images', express.static('images'));

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/petinfo', (req, res) => {
    res.render('index');
});

app.get('/dryfood', (req, res) => {
    res.render('dryfood');
});

app.get('/wetfood', (req, res) => {
    res.render('wetfood');
});

app.get('/feedingplan', (req, res) => {
    res.render('feedingplan');
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404');;
});