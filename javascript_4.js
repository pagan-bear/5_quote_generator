/* javascript_4.js */

// Sources for randomised quotes
const haiku1 = [
	{ "c1": "Green and speckled legs", "c2": "hop on logs and lily pads", "c3": "splash in cool water" },
	{ "c1": "In a pouch I grow", "c2": "on a southern continent", "c3": "to many I'm strange" },
	{ "c1": "Sand scatters the beach", "c2": "waves crash on the sandy shore", "c3": "blue waters shimmer" },
	{ "c1": "Snowflakes are our friends", "c2": "they descend when winter comes", "c3": "making white blankets" },
	{ "c1": "Spring is in the air", "c2": "flowers are blooming sky high", "c3": "children are laughing" },
	{ "c1": "Easter bunny hides", "c2": "Easter eggs are out of sight", "c3": "kids look everywhere" },
	{ "c1": "Hearts represent love", "c2": "love is a beautiful thing","c3": "St Jordi Day love" },
	{ "c1": "Autumn moonlit night", "c2": "a worm digs silently", "c3": "into an old oak" },
	{ "c1": "In the twilight rain", "c2": "this brilliant-hued hibiscus", "c3": "a beautiful thought" },
	{ "c1": "Light of the blue moon", "c2": "the colour and scent of blood", "c3": "seems so far away" }
]
const haiku2 = [
	{ "c1": "Book plunder to him",  "c2": "he approved and pondered more", "c3": "I want more furniture" },
	{ "c1": "Playing your totem",  "c2": "I considered your fingers", "c3": "before your luggage" },
	{ "c1": "Elbows rubbed red-raw",  "c2": "working too long in the sun", "c3": "it's a hard day's work" },
	{ "c1": "Peppercorns don't move", "c2": "until they drown in their sauce", "c3": "a sad way to die" },
	{ "c1": "Magnets are two-faced",  "c2": "no choice for honey or mead", "c3": "drown in milk coffee" },
	{ "c1": "Davey Jone's locker",  "c2": "buried in the deep blue sea", "c3": "no eyes can see where" },
	{ "c1": "The camel's tail fed",  "c2": "through the eye of a needle", "c3": "not achievable" },
	{ "c1": "1000 angles",  "c2": "stand on the head of a pin", "c3": "biblical mythos" },
	{ "c1": "Panic flits swiftly",  "c2": "as the cat's stealthy claw strikes", "c3": "a sparrow lies dead" },
	{ "c1": "Clouds full of grey ice",  "c2": "ready to burst, inundate", "c3": "the world drown in flood" },
	{ "c1": "The sun hides his face",  "c2": "the moon laughs at his coyness", "c3": "as clouds float on past" }
]

// Initalise program repeat variable and create control condition to repeat until user wants to quit
let repeat = true;

do {
	// Introduction
	console.log("Greetings!");
	console.log("I am an auto Haiku generator. I have two source files you can choose from:");
	console.log("(1. Children's Haiku, or, 2. Adults' Haiku)");
	
	// Initialise choice variables.
	let haikuChoice = 0;
	let numQuotes = 0;

	// Initialise haikuChoice. Ask for user's choice until valid.
	while ( haikuChoice < 1 || haikuChoice > 2 || isNaN(haikuChoice) ) {
		haikuChoice = prompt("Enter source: (1) children's haikus or (2) - adult's haikus: ");
	}
	(haikuChoice == 1) ? haikuSource = haiku1 : haikuSource = haiku2;

	// Initialise numQuotes variable. Ask for user's choice until valid.
	while (numQuotes < 1 || numQuotes > 5 || isNaN(numQuotes) ) {
		numQuotes = prompt("Enter number of quotes to generate (1..5): ");
	}

	// Create a random haiku, each section chosen from different rows of the source file
	for ( let i = 0; i < numQuotes; i++ ) {
	randomQuote = (haikuSource[Math.floor(Math.random()*10)].c1 + ' ' +
		haikuSource[Math.floor(Math.random()*10)].c2 + ' ' +
		haikuSource[Math.floor(Math.random()*10)].c3 + ' ');
		
		console.log(randomQuote);
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

