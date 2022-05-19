const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    petName: {
        type: String,
        required: true
    },
    petSpecies: {
        type: String,
        required: true
    },
    calorieGoal: {
        type: Number,
        required: true
    },
    mealsPerDay: {
        type: Number,
        required: true
    },
    dryFoodName: {
        type: String,
        required: true
    },
    caloriesPerCup: {
        type: Number,
        required: true
    },
    wetFoodName: {
        type: String,
        required: true
    },
    caloriesPerCan: {
        type: Number,
        required: true
    },
    cansPerDay: {
        type: Number,
        required: true
    }
});

const Pet = mongoose.model('pet', petSchema);
module.exports = Pet;