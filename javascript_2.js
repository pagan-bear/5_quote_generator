/* javascript_2.js */

// https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript

// Define AJAX read function
function readFile(file, callback) {
	let input = new XMLHttpRequest();
	input.overrideMimeType('application/json');
	input.open('GET', 'quote_source.json', true);
	input.onreadystatechange = function() {
		if (input.readyState == 4 && input.status == "200") {
			callback(input.responseText);
		}
	}
	input.send(null);
}

// Load file
readFile('quote_source.json', function(text){
	let quotes = JSON.parse(text);
	let numQuotes = 0;
	
	while ( numQuotes < 1 || numQuotes > 5 ) {
		numQuotes = prompt("Enter number of quotes to generate (1..5): ");
	}
	
	console.clear();
	
	for (let i = 1; i <= numQuotes; i++) {
		let quote = i + '. ' + quotes[Math.floor(Math.random() * 10)].c1 + ', ' + quotes[Math.floor(Math.random() * 10)].c2 + ', ' + quotes[Math.floor(Math.random() * 10)].c3 + '.';
	
		console.log(quote);
	}
});