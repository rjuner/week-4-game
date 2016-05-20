$( document ).ready(function() {

//Establishing variables: 

var charactersObj = [
	{
	id: "one",
	name:"steven", 
	hp: 100,
	attack: 10,
	counterAttack: 5,
	images: "assets/images/steven.png"
	},

	{
	id: "two",
	name: "amethyst", 
	hp: 100,
	attack: 20, 
	counterAttack: 10,
	images: "assets/images/amethyst.png"
	}, 

	{
	id: "three",
	name: "pearl",
	hp: 100,
	attack: 30,
	counterAttack: 15,
	images: "assets/images/pearl.png"

	}, 

	{
	id: "four",
	name: "garnet", 
	hp: 100,
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
	var img = $('<img>')
		.addClass('letter-button')
		.attr({id: charactersObj[i].name, src: charactersObj[i].images});

	$("#heroSelect").append(img); 


/*  
    var b = $('<button>');
    //adds class to buttons that you created so that you can target later
    b.addClass('letter-button letter letter-button-color');
    console.log(b);
    // SAME HERE what's the advantage of this? 
    b.attr('data-char', charactersObj[i].name);
    b.text(charactersObj[i].name);
    
  
*/

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



