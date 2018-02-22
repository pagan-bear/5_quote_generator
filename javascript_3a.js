/* javascript_3a.js */

// Initalise program repeat variable
// Create control condition to repeat until user wants to quit
let repeat = true;
do {

	// Introduction
	console.log("Greetings!");
	console.log("I am an auto Haiku generator. I have two source files you can choose from:");
	console.log("1. Children's Haiku, or, 2. Adults' Haiku");
	
	// Initialise choice variables.
	let haikuChoice = 0;
	let numQuotes = 0;

	// Initialise haikuChoice. Ask for user's choice until valid.
	while ( haikuChoice < 1 || haikuChoice > 2 || isNaN(haikuChoice) ) {
		haikuChoice = prompt("Enter source: (1) children's haikus or (2) - adult's haikus: ");
	}
	// ***Debug - console.log("You selected choice: " + haikuChoice);
	(haikuChoice == 1) ? haikuSource = 'quote_source.json' : haikuSource = 'quote_source2.json';
	// ***Debug - console.log("haikuSource: " + haikuSource);

	// Store URL of JSON to retrieve
	var requestURL = 'http://localhost:5000/' + haikuSource;
	// ***Debug - console.log('haikuSource: ' + requestURL);
	// Create XHR
	var request = new XMLHttpRequest();
	// Open XHR request with GET and URL of JSON file
	request.open = ('GET', requestURL);
	// Set responseType to JSON to create JS object and send the request
	request.responseType = 'json';
	request.send();
	
	// Wait for the response, then process it
	request.onload = function () {
		var quotes = request.response;
			generateQuotes(quotes);
		}
	
	generateQuotes(quotes) {
		let quote = "";
		for (let i = 1; i <= numQuotes; i++) {
			let quote = i + '. ' + haikuArray[Math.floor(Math.random() * 10)].c1 + ', ' + 
				 haikuArray[Math.floor(Math.random() * 10)].c2 + ', ' + 
				 haikuArray[Math.floor(Math.random() * 10)].c3 + '.';

			console.log(quote);
		}
	}
	
	// Initialise numQuotes variable. Ask for user's choice until valid.
	while (numQuotes < 1 || numQuotes > 5 || isNaN(numQuotes) ) {
		numQuotes = prompt("Enter number of quotes to generate (1..5): ");
		// ***Debug - console.log(numQuotes);
	}

	// Run program again? (1 or 2)
	// Initialise again variable. Ask for user's choice until valid.
	let again = '';
	while ( again < 1 || again > 2 || isNaN(again) ) {
		again = prompt("Would you like me to generate some more Haiku? (1) yes or (2) no: ")
	}
	// ***Debug - console.log("You selected again: " + again);	
	// Does the user want to generate more Haiku?
	(again == 1) ? repeat = true : repeat = false;
	// ***Debug - console.log("Repeat value is:" + repeat);
} while (repeat)

