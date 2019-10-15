//Create and reset variables for wins, losses and score.
var wins = 0;
var losses = 0;
var score = 0;

//Generates random target between 19 and 120
var target = Math.floor(Math.random() * 101) + 19;
$("#target").html(target);

//Target wins, losses and score in the html
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$("#score").html(score);


//Assign on.Click to images
$(".images").on("click", function () {
    alert("You clicked me!!");
});