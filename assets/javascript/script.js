// Variable Declarations
var black;
var blue;
var red;
var orange;
var score = 0;
var random;

// When START button is clicked, pick random number and put it inside variable
// Log randomly picked number to Console.
$(document).ready(function() {
// When start button is clicked, generate random number to add to
$(".startBtn").on("click", function() {
	$('#ranNumber').text(Math.floor(Math.random() * 500) + 0);
	random = document.getElementById('ranNumber').innerText;
	console.log("The random number is: " + random);
	$('.startBtn').remove();
});

$(".crystals").on("click", ".not-showing", function() {
	$(this).text(Math.floor(Math.random() * 50) + 1);
	$(this).addClass('showing');
	$(this).removeClass('not-showing');
});
	// On click, console.logs all color values and displays color value
$(".crystals").on("click", "#blueCrysA", function() {
	blue = $('#blueCrysA').text();
	console.log("The value of blue is: " + blue);
});

$(".crystals").on("click", "#redCrysA", function() {
	red = $('#redCrysA').text();
	console.log("The value of red is: " + red);
});
	
$(".crystals").on("click", "#orangeCrysA", function() {
	orange = $('#orangeCrysA').text();
	console.log("The value of orange is: " + orange);
});
	
$(".crystals").on("click", "#blackCrysA", function() {
	black = $('#blackCrysA').text();
	console.log("The value of black is: " + black);
});
	// On click, take number from color and add towards score
$(".crystals").on("click", ".showing", function(){
	var currentNumber = parseInt($(this).text());
	console.log("Current number" + typeof(currentNumber));
	score += currentNumber;
	console.log(score);
	$('#score').text(score);
	
	if (random == score) {
		alert("YOU WON!!!");
	}
	else if (score > random) {
		alert("GAME OVER");
		alert("TRY AGAIN");
	}
});
});