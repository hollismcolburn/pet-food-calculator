const express = require('express');
const mongoose = require('mongoose');
const Pet = require('./models/pet');

// express app
const app = express();



// connect to mongodb
const dbURI = 'mongodb+srv://' + user + ':' + password + '@pet-food-calculator.qwhze.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/petinfo', (req, res) => {
    res.render('petinfo');
});

// app.post('/petinfo', (req, res) => {
//     const pet = new Pet(req.body);

//     pet.save()
//         .then((result) => {
//             res.redirect('/dryfood')
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// })

app.get('/feedingplan', (req, res) => {
    res.render('feedingplan');
});

// app.get('/feedingplan', function(req, res) { 
//     var exampleInfo = {
//         petName: 'Hoagie',
//         petSpecies: 'Cat',
//         calorieGoal: 225,
//         mealsPerDay: 2,
//         dryFoodName: "Hill's Perfect Weight",
//         caloriesPerCup: 300,
//         wetFoodName: "Hill's Perfect Weight",
//         caloriesPerCan: 64,
//         cansPerDay: 1
//     }

// res.render('feedingplan', { exampleInfo });
// });

// 404 page
app.use((req, res) => {
    res.status(404).render('404');;
});