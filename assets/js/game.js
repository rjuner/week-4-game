$( document ).ready(function() {

//Establishing variables: 

var charactersObj = [
	{
	name:"steven", 
	hp: 100,
	attack: 10,
	counterAttack: 5,
	images: "assets/images/steven.png"
	},

	{
	name: "amethyst", 
	hp: 150,
	attack: 20, 
	counterAttack: 10,
	images: "assets/images/amethyst.png"
	}, 

	{
	name: "pearl",
	hp: 100,
	attack: 30,
	counterAttack: 15,
	images: "assets/images/pearl.png"

	}, 

	{
	name: "garnet", 
	hp: 200,
	attack: 40, 
	counterAttack: 20,
	images: "assets/images/garnet.png",
	}
];

var heroSelected = false; 
var enemySelected = false;

//CLICK FUNCTIONS
//==================================================================

for (var i = 0; i < charactersObj.length; i++) {

	// var char = charactersObj[i].name + charactersObj[i].hp + charactersObj[i].images

	var charDiv = $('<div>')
		.addClass('div');

	var hp = charactersObj[i].hp;

	var img = $('<img>')
		.addClass('letter-button')
		.attr({id: charactersObj[i].name, src: charactersObj[i].images});

	

	$("#heroSelect").append(img).append(hp);

	};


$('.letter-button').on('click', function(){
	var clone = $(this).clone();
	console.log(this.toString());
	
	// should we move to hero?
	if (heroSelected === false) {
		$("#hero").append(this);	
		heroSelected = true;
	} else {
		$("#enemy").append(this);
		enemySelected = true;

	}
});

//if there are characters in the fighter areas, attack button should work now
$('#attack').on('click', function() {
	if(heroSelected == true && enemySelected == true){
		alert("button now works!");
	}
});


});



