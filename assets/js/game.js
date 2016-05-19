$( document ).ready(function() {

//Establishing Characters: 

var charactersObj = [
	{
	name:"steven", 
	attack: 10
	},

	{
	name: "amethyst", 
	attack: 20
	}, 

	{
	name: "pearl",
	attack: 30, 
	}, 

	{
	name: "garnet", 
	attack: 40, 
	}
]


//CLICK FUNCTIONS
//==================================================================


for (var i = 0; i < charactersObj.length; i++) {    
		    var b = $('<button>');
		    b.addClass('letter-button letter letter-button-color');
		    console.log(b);
		    b.attr('data-let', letters[i]);
		    b.text(letters[i])

		    //alternatively you could do it in one line but it'll be harder to read
		    //var b = $('<button class="letter-button letter letter-button-color" data-let="'+ letters[i] +'">').text(letters[i]);   
		    
		    $("#buttons").append(b); 
		    //alert('watch this');
		};