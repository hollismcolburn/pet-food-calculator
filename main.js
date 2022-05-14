document.getElementById('petInfoSubmit').addEventListener('click', function(e) {
    let petName = document.getElementById('petNameInput');
    let petSpecies = document.getElementById('petSpeciesSelect');
    let calorieGoal = document.getElementById('calorieGoalInput');
    let mealsPerDay = document.getElementById('mealsPerDayInput');
});

document.getElementById('dryFoodSubmit').addEventListener('click', function(e) {
    let dryFoodName = document.getElementById('dryFoodNameInput');
    let caloriesPerCup = document.getElementById('caloriesPerCupInput');
});

document.getElementById('wetFoodSubmit').addEventListener('click', function(e) {
    let wetFoodName = document.getElementById('wetFoodNameInput');
    let caloriesPerCan = document.getElementById('caloriesPerCanInput');
    let cansPerDay = document.getElementById('cansPerDayInput');
});

function caloriesPerMeal(calorieGoal, mealsPerDay) {
    let caloriesPerMeal = calorieGoal / mealsPerDay;
    console.log(caloriesPerMeal);
}

function calcWetFood(cansPerDay, mealsPerDay, caloriesPerCan) {
    let cansPerMeal = cansPerDay / mealsPerDay;
    console.log(cansPerMeal);

    let wetCalPerMeal = cansPerMeal * caloriesPerCan;
    console.log(wetCalPerMeal);
}

function calcDryFood(caloriesPerMeal, caloriesPerCup) {
    let dryCalPerMeal = caloriesPerMeal - wetCalPerMeal;
    console.log(dryCalPerMeal);

    let dryAmtPerMeal = dryCalPerMeal / caloriesPerCup;
    console.log(dryAmtPerMeal);
}

document.getElementById("feedingPlanTitle").innerHTML = petName + "'s Feeding Plan";
document.getElementById("dryFoodPlan").innerHTML = dryAmtPerMeal + " cup(s) of " + dryFoodName + " per meal";
document.getElementById("wetFoodPlan").innerHTML = cansPerMeal + " can(s) of " + wetFoodName + " per meal";