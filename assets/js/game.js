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
		    b.addClass('letter-button letter letter-button-color');
		    console.log(b);
		    b.attr('data-char', charactersObj[i].name);
		    b.text(charactersObj[i].name);
		    //alternatively you could do it in one line but it'll be harder to read
		    //var b = $('<button class="letter-button letter letter-button-color" data-let="'+ letters[i] +'">').text(letters[i]);   
		    
		    $("#heroSelect").append(b); 
		    //alert('watch this');
		};

	$('.letter-button').on('click', function() {
	    	var clone = $(this).clone();
	    	console.log(this.toString());

			$("#hero").append(this);
			//alert('watch this')
	});


	$('.letter-button').on('click', function() {
		    	var clone = $(this).clone();
		    	console.log(this.toString());

				$("#enemy").append(this);
				//alert('watch this')
	});

});



