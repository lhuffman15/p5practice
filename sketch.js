var sanjose2009;
var category=[];
var sj;
var occupTitle=[];
var yearA=[];
var numEmployed=[];
var meanWage=[];
var empChange=[];
var occupCode=[];
var circleSize;
var wage;
var change;
var changeMap;
var page = 0;

//bubble colors
var busCol = 'rgba(255,175,88, 0.75)';
var techCol = 'rgba(107,231,207, 0.75)';
var commCol = 'rgba(250,100,146, 0.75)';
var logCol = 'rgba(0,152,200, 0.75)';
var healthCol = 'rgba(122,80,162, 0.75)';

//fonts
var heading;
var boldItal;
var light;

var canWidth = 1300;
var canHeight = 900;

function preload() {
	heading = loadFont('BebasNeueBold.ttf');
	boldItal = loadFont('Lato-SemiboldItalic.ttf');
	light = loadFont('Lato-Light.ttf');
}

function setup() {
	createCanvas(canWidth, canHeight);
	loadJSON("sanjose2009.json", gotData);
}

function draw() {
	background(255);
	noStroke();
// title
	textAlign(CENTER);
	fill(20);
	rect(0, 0, canWidth, 80);
	textFont(heading);
	textSize(48);
	fill(255);
	text('Silicon Valley Occupations - 10 Year Visualization', canWidth/2, 60);

//key bg and title
	textAlign(LEFT);
	fill(240);
	rect(1000, 80, 300, canHeight);
	textFont(heading);
	textSize(48);
	fill(20);
	text('KEY', 1030, 150);

// occup category
	textFont(boldItal);
	textSize(20);
	fill(20);
	text('Occupational category', 1030, 200);

	textFont(light);
	textSize(14);
	fill(busCol)
	rect(1030, 220, 40, 40);
	fill(20);
	text('Business & Professional Services', 1085, 245);

	fill(techCol)
	rect(1030, 290, 40, 40);
	fill(20);
	text('Technology/Science/Engineering', 1085, 315);

	fill(commCol)
	rect(1030, 360, 40, 40);
	fill(20);
	text('Community', 1085, 385);

	fill(healthCol)
	rect(1030, 430, 40, 40);
	fill(20);
	text('Healthcare', 1085, 455);

	fill(logCol)
	rect(1030, 500, 40, 40);
	fill(20);
	text('Logistical/Industrial', 1085, 525);

// Num category
	textFont(boldItal);
	textSize(20);
	fill(20);
	text('Number of employees', 1030, 600);

	textFont(light);
	textSize(14);
	fill(20);
	text('> 10,000', 1170, 640);
	text('140,000', 1170, 730);

	fill(0);
	ellipse(1080, 635, 15, 15);
	ellipse(1080, 720, 110, 110);


// workforce
	textFont(boldItal);
	textSize(20);
	text('% Change in total workforce', 1030, 820);
	strokeWeight(4);
	stroke(180);
	line(1030, 850, 1200, 850);

//reset for Graph
	strokeWeight(1);
	stroke(0);
	line(500, 200, 500, canHeight-100); // 2009
	line(100, 800, 900, 800);

	textFont(light);
	textSize(14);
	fill(20);
	text('> 10,000', 1170, 640);

	stroke(255);

//2009 Data
	if (page === 0) {


	if (sanjose2009) {
		for (var i = 0; i < sanjose2009.data.length; i++) {

			//reassign variables
			occupTitle= sanjose2009.data[i].occupTitle;
			occupCode= sanjose2009.data[i].occupCode;
			yearA=sanjose2009.data[i].year;
			numEmployed=sanjose2009.data[i].numEmployed;
			meanWage=sanjose2009.data[i].meanWage;
			empChange=sanjose2009.data[i].empChange;

			circleSize = map(numEmployed, 10000, 140000, 20, 110);
			wage = map(meanWage, 10000, 170000, 800,200);
			change = (500+empChange);

			if (occupTitle == "Management Occupations") {
				fill(busCol); //business
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Business & Financial") {
				fill(busCol); //business
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Computer & Math") {
				fill(techCol); // tech
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Architecture & Engineering") {
				fill(techCol); //tech
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Life, Physical, Social Science") {
				fill(techCol); // tech
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Community & Social Service") {
				fill(commCol); // community
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Legal Occupations") {
				fill(busCol); //business
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Education, Training & Library") {
				fill(commCol); // community
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Arts, Design, Entertainment, Sports, Media") {
				fill(commCol); // community
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Practioners & Technical") {
				fill(healthCol); // healthcare
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Healthcare Support") {
				fill(healthCol); // healthcare
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Protective Services") {
				fill(commCol); // community
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Food Prep & Serving") {
				fill(commCol); // community
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Building & Ground Maintenance") {
				fill(logCol); // logistics
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Personal Care") {
				fill(healthCol); // healthcare
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Sales") {
				fill(busCol); //business
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Office & Admin") {
				fill(busCol); //business
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Farming, Fishery & Forestry") {
				fill(logCol); // logistics
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Construction") {
				fill(logCol); // logistics
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Farming, Fishery & Forestry") {
				fill(logCol); // logistics
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Installation & Repair") {
				fill(logCol); // logistics
				ellipse(change, wage, circleSize, circleSize);
			} else if (occupTitle == "Production Occupations") {
				fill(logCol); // logistics
				ellipse(change, wage, circleSize, circleSize);
			}



	} // end of for loop


}} // end of if data is loaded

}

function gotData(data) {
	sanjose2009=data;
	console.log(sanjose2009);
}
