//Crystal Variables created in an object to facilitate value assignment
var crystal = {
    red:
    {
        name:  "red",
        value: 0,
    },
    blue:
    {
        name:  "blue",
        value: 0,
    },
    gold:
    {
        name:  "gold",
        value: 0,
    },
    green:
    {
        name:  "green",
        value: 0,
    },
};

//Scores to track
var score   = 0;
var target  = 0;

//Create and reset variables for wins and losses.
var wins    = 0;
var losses  = 0;

//Functions

//Reset the current score
score = 0;

//General random number generator with two limits
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {
//Set a new target score (between 19 and 120)
var target = getRandom (19, 120);

//Set different values for each of the crystals (between 1 and 12)
crystal.red.value   = getRandom (1, 12);
crystal.blue.value  = getRandom (1, 12);
crystal.gold.value  = getRandom (1, 12);
crystal.green.value = getRandom (1, 12);

//Change the html to refelect the changes
$("#target").html(target);

//test
console.log("-------------------------------------");
console.log("target score " + target);
console.log("red: " + crystal.red.value + " | blue : " + crystal.blue.value + " | gold: " + crystal.gold.value + " | green: " + crystal.green.value);
console.log ("-------------------------------------")
};
//Starts the game
startGame ();

//Function to add crystal values
var addValue = function(crystal){
    score = score + crystal.value;

    //Update the score
    $("#score").html("Score: " + score);

    //Call checkWin
    checkWin();
    //test
    console.log("Your score " + score);
}

//Function to check Wins
var checkWin = function() {
    if(score > target){
        alert("Sorry.  You lost!");
        //Update losses
        losses ++;
        //Update html
        $("#losses").html("Losses: " + losses);
        //Restart game
        startGame();
    } else if(score == target) {
        alert("Congratulations!!!  You Won");
        //Update wins
        wins ++;
        //Update html
        $("#wins").html("Wins: " + wins);
        //Restart game
        startGame();
    };
}
//Assign on.Click and value to images
$("#red-crystal").on("click", function () {
    addValue(crystal.red);
});
$("#blue-crystal").on("click", function () {
    addValue(crystal.blue);
});
$("#gold-crystal").on("click", function () {
    addValue(crystal.gold);
});
$("#green-crystal").on("click", function () {
    addValue(crystal.green);
});
