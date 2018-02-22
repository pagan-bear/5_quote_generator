/* javascript_3.js */

// Ask user to select source file 1 or 2
let haikuSource = prompt("Would you like quotes from Haiku 1 (Children's) or Haiku 2 (Adults)? ");

// Use switch statement to determine the source file to load
switch (haikuSource) {
	case '1':
		console.log("You have chosen the children's haiku file");
		haikuSource = 'quote_source.json';
		break;
	case '2':
		console.log("You have chosen the adult´s haiku file");
		haikuSource = 'quote_source2.json';
		break;
	default:
		console.log("Can't decide between 1 and 2?  Let me do it for you...");
		// Generate a 0 or a 1
		let randomSpin = (Math.floor(Math.random()) * 2);
		console.log(randomSpin);
		
		if (!randomSpin) {
			haikuSource = 'quote_source.json';
		} else {
			haikuSource = 'quote_source2.json';
		}
		console.log(haikuSource);
}

// Find out how man quotes the user would like printed
let numQuotes = 0;

// Keep prompting unitl user enters valid number of quotes
while (numQuotes < 1 || numQuotes > 5) {
	numQuotes = prompt("Enter number of quotes to generate (1..5, 99 to exit): ");
	console.log(numQuotes);
}

console.log( (numQuotes < 1) );
console.log( (numQuotes > 5) );
console.log ( (numQuotes<1 || numQuotes>5) );


// Define AJAX function
// https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
/* function readFile(file, callback) {
	let input = new XMLHttpRequest();
	input.overrideMimeType('application/json');
	input.open('GET', haikuSource, true);
	input.onreadystatechange = function() {
		if (input.readyState == 4 && input.status == "200") {
			callback(input.responseText);
		}
	}
	input.send(null);
}

// Call AJAX function with user selected source file
readFile(haikuSource, function(text) {
	let haikuArray = JSON.parse(text);

	for (let i = 1; i <= numQuotes; i++) {
		let quote = i + '. ' + haikuArray[Math.floor(Math.random() * 10)].c1 + ', ' + haikuArray[Math.floor(Math.random() * 10)].c2 + ', ' + haikuArray[Math.floor(Math.random() * 10)].c3 + '.';
	
		console.log(quote);
	}
});
}
*/