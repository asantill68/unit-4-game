//Create and reset variables for wins, losses and score.
var wins = 0;
var losses = 0;
var score = 0;

//Generates random target between 19 and 120
var target = Math.floor(Math.random() * 101) + 19;
$("#target").html(target);

//Create an array and use a for-loop to randomely assign values between 1 and 19 to each spot on array
var crystalVal = [1, 3, 10, 15];

//Target wins, losses and score in the html
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$("#score").html(score);


//Assign on.Click to images
$("#red-crystal").on("click", function () {
    var redVal = crystalVal[0];
    alert("Your current score is = " + redVal);
});
$("#blue-crystal").on("click", function () {
    var blueVal = crystalVal[1];
    alert("Your current score is = " + blueVal);    
});
$("#gold-crystal").on("click", function () {
    var goldVal = crystalVal[2];
    alert("Your current score is = " + goldVal); ;
});
$("#green-crystal").on("click", function () {
    var greenVal = crystalVal[3];
    alert("Your current score is = " + greenVal); 
});

