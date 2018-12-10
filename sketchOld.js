

var spaceData;

let angle = 0;

let x = 50;
let y = 50;

let r2 = 1;


function setup() {
	createCanvas(windowWidth,windowHeight);
	angleMode(DEGREES);
	rectMode(CENTER);
	//asynchronious function
	loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
	textAlign(CENTER, CENTER);
	textSize(30);
}
//whatever you named it above, this function is the callback for loading the process, let me know when you're done loading the data by triggering what's in here. Specific to p5.js library, others have something similar, but syntax and function name is specific to p5.js. Where is the data? The special way p5.js works, if you add a parameter to your function callback definition, p5.js will fill it behind the scenes with the data.
function gotData(data) {
spaceData = data;
}
function draw() {
	background(255);
	fill(0);

	push(); //save
	translate(x,y);
	rotate(angle);
	rect(0,0,100,50);
	// line(0,0,50,50);
	pop(); //restore

	push(); // saves styling and translate, when you push a bunch of things, is it a stack or a Q, or another algorithym?
	//stack push and pop, it's like a stack of paper - so push pushes things to the top of the stack, when you say pop it takes the last thing you put in off (first one in, last one out), people line up in a queue - first person in queue is first to get a ticket, if restoring, you're doing it in reverse order of how you pushed interval
	//web gl renderer - still in early stages, way to do 3D in p5, so can do rotate z! wow cool!
	//apply and reset matrix, so it turns out that the way the transformation state is stored in a matrix of numbers
	//reset matrix - wipe everything to a default state
	translate(100,300);
	//scale(mouseX/100, mouseY/100);
	scale(1,-1); //can flip images, like for mirroring
	rotate(r2);
	fill(50,50,200);
	rect(0,0,50,10);
	pop();

	angle = angle+1;
	x=x+2;
	r2 = r2+3;
	if (x>=windowWidth) {
		x = 0;
	}

	//if spaceData - just looks if it's true or false - does it exist?, the value of spaceData before it's done being added, it's initial value is undefined which defaults to false
	// if (spaceData) {
	// 	text(spaceData.people[2].name, windowWidth/2, windowHeight/2);
	// }
//example of a for loop and getting information, I'm not sure why you would need a for loop for the instance above?
translate(0,0);
rotate(0);
	if (spaceData) {
		//RANDOM Seed is a way to make it not get random numbers anymore
		randomSeed(4);
		for (var i = 0; i < spaceData.number; i++) {
			if (i == 2) {
						text(spaceData.people[i].name, windowWidth/2, windowHeight/2);
			}
			// fill(0);
			// ellipse(random(width), random(height), 16, 16);
	}}

}
