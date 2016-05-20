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
	hp: 100,
	attack: 20, 
	counterAttack: 10,
	images: "assets/images/steven.png"
	}, 

	{
	name: "pearl",
	hp: 100,
	attack: 30,
	counterAttack: 15,
	images: "assets/images/steven.png"

	}, 

	{
	name: "garnet", 
	hp: 100,
	attack: 40, 
	counterAttack: 20,
	images: "assets/images/steven.png",
	}
];

var heroSelected = false; 
var enemySelected = false;

//CLICK FUNCTIONS
//==================================================================

for (var i = 0; i < charactersObj.length; i++) {    
    var b = $('<button>');
    // are these really doing anything? GO BACK AND CHECK 
    b.addClass('letter-button letter letter-button-color');
    console.log(b);
    // SAME HERE what's the advantage of this? 
    b.attr('data-char', charactersObj[i].name);
    b.text(charactersObj[i].name);
    
    $("#heroSelect").append(b); 
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



