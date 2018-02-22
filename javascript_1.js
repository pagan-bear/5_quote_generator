/* javascript_1.js */

// https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript

// Define AJAX read function
function readFile(file, callback) {
	let input = new XMLHttpRequest();
	input.overrideMimeType('application/json');
	input.open('GET', 'http://localhost:5000/quote_source.json', true);
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
	
	let quote = quotes[Math.floor(Math.random()*10)].c1 + ', ' + quotes[Math.floor(Math.random()*10)].c2 + ', ' + quotes[Math.floor(Math.random()*10)].c3 + '.';
	
	console.log(quote);
});