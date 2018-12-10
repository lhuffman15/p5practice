var sanjose2009;
var sanjose2010;
var sanjose2011;
var sanjose2012;
var sanjose2013;
var sanjose2014;
var sanjose2015;
var sanjose2016;
var sanjose2017;
var sanjose2018;
var category = [];
var sj;
var occupTitle = [];
var yearA = [];
var numEmployed = [];
var meanWage = [];
var empChange = [];
var occupCode = [];
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
  angleMode(DEGREES);
  loadJSON("sanjose2009.json", gotData);
  loadJSON("sanjose2010.json", gotData2010);
  loadJSON("sanjose2011.json", gotData2011);
	loadJSON("sanjose2012.json", gotData2012);
	loadJSON("sanjose2013.json", gotData2013);
	loadJSON("sanjose2014.json", gotData2014);
	loadJSON("sanjose2015.json", gotData2015);
	loadJSON("sanjose2016.json", gotData2016);
	loadJSON("sanjose2017.json", gotData2017);
	loadJSON("sanjose2018.json", gotData2018);
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
  text('Silicon Valley Occupations - 10 Year Visualization', canWidth / 2, 60);

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
  line(500, 200, 500, canHeight - 100); // 2009
  line(100, 800, 900, 800);

  noStroke();
  textFont(light);
  textSize(14);
  fill(20);
  text('-70         -60         -50         -40         -30         -20         -10         0         10         20         30         40         50         60         70      ~ 165', 106, 820);

  textFont(boldItal);
  textSize(20);
  text('% Change Increase/Decrease in Employees Since 2009', 260, 860);

  push();
  translate(30, 500);
  rotate(270);
  text('Median Wage', 0, 0);
  textFont(light);
  textSize(14);
  text('$10,000', -300, 30);
  text('$85,000', 25, 30);
  text('$170,000', 230, 30);
  pop();

  textFont(light);
  textSize(14);
  fill(20);
  text('Data from data.edd.ca.gov/Wages/Occupational-Employment-Statistics-OES-San-Jose-Su/6far-p7bd', 180, 890);

  //buttons
  // textFont(heading);
  // textSize(48);
  // text('YEAR', 10, 150);

  var butX = 10;
  var butY = 114;
  var butW = 80;
  var butH = 40;
  var corn = 6;
  var butTX = 22;
  var butTY = 143;

  //back to 2009
  fill(230);
  rect(butX, butY, butW, butH, corn);
  textFont(light);
  textSize(24);
  fill(20);
  text('2009', butTX, butTY);

  if (mouseIsPressed && mouseX > butX && mouseX < (butX + butW) && mouseY > butY && mouseY < (butY + butH)) {
    page = 0;
    fill(20);
    rect(butX, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2009', butTX, butTY);
  }

  //2010
  fill(230);
  rect(butX + 100, butY, butW, butH, corn);
  textFont(light);
  textSize(24);
  fill(20);
  text('2010', butTX + 100, butTY);

  if (mouseIsPressed && mouseX > butX + 100 && mouseX < (100 + butX + butW) && mouseY > butY && mouseY < (butY + butH)) {
    page = 1;
    fill(20);
    rect(butX + 100, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2010', butTX + 100, butTY);
  }

  //2011
  fill(230);
  rect(butX + 200, butY, butW, butH, corn);
  textFont(light);
  textSize(24);
  fill(20);
  text('2011', butTX + 200, butTY);

  if (mouseIsPressed && mouseX > butX + 200 && mouseX < (200 + butX + butW) && mouseY > butY && mouseY < (butY + butH)) {
    page = 2;
    fill(20);
    rect(butX + 200, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2011', butTX + 200, butTY);
  }

  //2012
  fill(230);
  rect(butX + 300, butY, butW, butH, corn);
  textFont(light);
  textSize(24);
  fill(20);
  text('2012', butTX + 300, butTY);

  if (mouseIsPressed && mouseX > butX + 300 && mouseX < (300 + butX + butW) && mouseY > butY && mouseY < (butY + butH)) {
    page = 3;
    fill(20);
    rect(butX + 300, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2012', butTX + 300, butTY);
  }

  //2013
  fill(230);
  rect(butX + 400, butY, butW, butH, corn);
  textFont(light);
  textSize(24);
  fill(20);
  text('2013', butTX + 400, butTY);

  if (mouseIsPressed && mouseX > butX + 400 && mouseX < (400 + butX + butW) && mouseY > butY && mouseY < (butY + butH)) {
    page = 4;
    fill(20);
    rect(butX + 400, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2013', butTX + 400, butTY);
  }

  //2014
  fill(230);
  rect(butX + 500, butY, butW, butH, corn);
  textFont(light);
  textSize(24);
  fill(20);
  text('2014', butTX + 500, butTY);

  if (mouseIsPressed && mouseX > butX + 500 && mouseX < (500 + butX + butW) && mouseY > butY && mouseY < (butY + butH)) {
    page = 5;
    fill(20);
    rect(butX + 500, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2014', butTX + 500, butTY);
  }

	//2015
  fill(230);
  rect(butX + 600, butY, butW, butH, corn);
  textFont(light);
  textSize(24);
  fill(20);
  text('2015', butTX + 600, butTY);

  if (mouseIsPressed && mouseX > butX + 600 && mouseX < (600 + butX + butW) && mouseY > butY && mouseY < (butY + butH)) {
    page = 6;
    fill(20);
    rect(butX + 600, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2015', butTX + 600, butTY);
  }

	//2016
  fill(230);
  rect(butX + 700, butY, butW, butH, corn);
  textFont(light);
  textSize(24);
  fill(20);
  text('2016', butTX + 700, butTY);

  if (mouseIsPressed && mouseX > butX + 700 && mouseX < (700 + butX + butW) && mouseY > butY && mouseY < (butY + butH)) {
    page = 7;
    fill(20);
    rect(butX + 700, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2016', butTX + 700, butTY);
  }

	//2017
  fill(230);
  rect(butX + 800, butY, butW, butH, corn);
  textFont(light);
  textSize(24);
  fill(20);
  text('2017', butTX + 800, butTY);

  if (mouseIsPressed && mouseX > butX + 800 && mouseX < (800 + butX + butW) && mouseY > butY && mouseY < (butY + butH)) {
    page = 8;
    fill(20);
    rect(butX + 800, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2017', butTX + 800, butTY);
  }

	//2018
  fill(230);
  rect(butX + 900, butY, butW, butH, corn);
  textFont(light);
  textSize(24);
  fill(20);
  text('2018', butTX + 900, butTY);

  if (mouseIsPressed && mouseX > butX + 900 && mouseX < (900 + butX + butW) && mouseY > butY && mouseY < (butY + butH)) {
    page = 9;
    fill(20);
    rect(butX + 900, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2018', butTX + 900, butTY);
  }

  //reset stroke
  stroke(255);

  //2009 Data
  if (page === 0) {
    fill(20);
    rect(butX, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2009', butTX, butTY);
    if (sanjose2009) {
      for (var i = 0; i < sanjose2009.data.length; i++) {

        //reassign variables
        occupTitle = sanjose2009.data[i].occupTitle;
        occupCode = sanjose2009.data[i].occupCode;
        yearA = sanjose2009.data[i].year;
        numEmployed = sanjose2009.data[i].numEmployed;
        meanWage = sanjose2009.data[i].meanWage;
        empChange = sanjose2009.data[i].empChange;

        circleSize = map(numEmployed, 10000, 140000, 20, 110);
        wage = map(meanWage, 10000, 170000, 800, 200);
        change = (500 + empChange);

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

    }
  } // end of if data is loaded

  //2010 Data
  if (page === 1) {
    fill(20);
    rect(butX + 100, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2010', butTX + 100, butTY);

		strokeWeight(4);
	  stroke(180);
	  line(485, 200, 485, canHeight - 100);
		strokeWeight(1);
		stroke(255);

    if (sanjose2010) {
      for (var i = 0; i < sanjose2010.data.length; i++) {

        //reassign variables
        occupTitle = sanjose2010.data[i].occupTitle;
        occupCode = sanjose2010.data[i].occupCode;
        yearA = sanjose2010.data[i].year;
        numEmployed = sanjose2010.data[i].numEmployed;
        meanWage = sanjose2010.data[i].meanWage;
        empChange = sanjose2010.data[i].empChange;

        circleSize = map(numEmployed, 10000, 140000, 20, 110);
        wage = map(meanWage, 10000, 170000, 800, 200);
				changeMap = map(empChange, -70, 70, -400, 400);
        change = (500 + changeMap);

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

    }
  } // end of if data is loaded

	//2011 Data
	if (page === 2) {
		fill(20);
    rect(butX + 200, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2011', butTX + 200, butTY);

		strokeWeight(4);
	  stroke(180);
	  line(468, 200, 468, canHeight - 100);
		strokeWeight(1);
		stroke(255);

		if (sanjose2011) {
			for (var i = 0; i < sanjose2011.data.length; i++) {

				//reassign variables
				occupTitle = sanjose2011.data[i].occupTitle;
				occupCode = sanjose2011.data[i].occupCode;
				yearA = sanjose2011.data[i].year;
				numEmployed = sanjose2011.data[i].numEmployed;
				meanWage = sanjose2011.data[i].meanWage;
				empChange = sanjose2011.data[i].empChange;

				circleSize = map(numEmployed, 10000, 140000, 20, 110);
				wage = map(meanWage, 10000, 170000, 800, 200);
				changeMap = map(empChange, -70, 70, -400, 400);
				change = (500 + changeMap);

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

		}
	} // end of if data is loaded

	//2012 Data
	if (page === 3) {
		fill(20);
    rect(butX + 300, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2012', butTX + 300, butTY);

		strokeWeight(4);
	  stroke(180);
	  line(477, 200, 477, canHeight - 100);
		strokeWeight(1);
		stroke(255);

		if (sanjose2012) {
			for (var i = 0; i < sanjose2012.data.length; i++) {

				//reassign variables
				occupTitle = sanjose2012.data[i].occupTitle;
				occupCode = sanjose2012.data[i].occupCode;
				yearA = sanjose2012.data[i].year;
				numEmployed = sanjose2012.data[i].numEmployed;
				meanWage = sanjose2012.data[i].meanWage;
				empChange = sanjose2012.data[i].empChange;

				circleSize = map(numEmployed, 10000, 140000, 20, 110);
				wage = map(meanWage, 10000, 170000, 800, 200);
				changeMap = map(empChange, -70, 70, -400, 400);
				change = (500 + changeMap);

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

		}
	} // end of if data is loaded

	//2013 Data
	if (page === 4) {
		fill(20);
    rect(butX + 400, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2013', butTX + 400, butTY);

		strokeWeight(4);
		stroke(180);
		line(491, 200, 491, canHeight - 100);
		strokeWeight(1);
		stroke(255);

		if (sanjose2013) {
			for (var i = 0; i < sanjose2013.data.length; i++) {

				//reassign variables
				occupTitle = sanjose2013.data[i].occupTitle;
				occupCode = sanjose2013.data[i].occupCode;
				yearA = sanjose2013.data[i].year;
				numEmployed = sanjose2013.data[i].numEmployed;
				meanWage = sanjose2013.data[i].meanWage;
				empChange = sanjose2013.data[i].empChange;

				circleSize = map(numEmployed, 10000, 140000, 20, 110);
				wage = map(meanWage, 10000, 170000, 800, 200);
				changeMap = map(empChange, -70, 70, -400, 400);
				change = (500 + changeMap);

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

		}
	} // end of if data is loaded

	//2014 Data
	if (page === 5) {
		fill(20);
    rect(butX + 500, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2014', butTX + 500, butTY);

		strokeWeight(4);
		stroke(180);
		line(503, 200, 503, canHeight - 100);
		strokeWeight(1);
		stroke(255);

		if (sanjose2014) {
			for (var i = 0; i < sanjose2014.data.length; i++) {

				//reassign variables
				occupTitle = sanjose2014.data[i].occupTitle;
				occupCode = sanjose2014.data[i].occupCode;
				yearA = sanjose2014.data[i].year;
				numEmployed = sanjose2014.data[i].numEmployed;
				meanWage = sanjose2014.data[i].meanWage;
				empChange = sanjose2014.data[i].empChange;

				circleSize = map(numEmployed, 10000, 140000, 20, 110);
				wage = map(meanWage, 10000, 170000, 800, 200);
				changeMap = map(empChange, -70, 70, -400, 400);
				change = (500 + changeMap);

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

		}
	} // end of if data is loaded

	//2015 Data
	if (page === 6) {
		fill(20);
    rect(butX + 600, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2015', butTX + 600, butTY);

		strokeWeight(4);
		stroke(180);
		line(527, 200, 527, canHeight - 100);
		strokeWeight(1);
		stroke(255);

		if (sanjose2015) {
			for (var i = 0; i < sanjose2015.data.length; i++) {

				//reassign variables
				occupTitle = sanjose2015.data[i].occupTitle;
				occupCode = sanjose2015.data[i].occupCode;
				yearA = sanjose2015.data[i].year;
				numEmployed = sanjose2015.data[i].numEmployed;
				meanWage = sanjose2015.data[i].meanWage;
				empChange = sanjose2015.data[i].empChange;

				circleSize = map(numEmployed, 10000, 140000, 20, 110);
				wage = map(meanWage, 10000, 170000, 800, 200);
				changeMap = map(empChange, -70, 70, -400, 400);
				change = (500 + changeMap);

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

		}
	} // end of if data is loaded

	//2016 Data
	if (page === 7) {
		fill(20);
    rect(butX + 700, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2016', butTX + 700, butTY);

		strokeWeight(4);
		stroke(180);
		line(545, 200, 545, canHeight - 100);
		strokeWeight(1);
		stroke(255);

		if (sanjose2016) {
			for (var i = 0; i < sanjose2016.data.length; i++) {

				//reassign variables
				occupTitle = sanjose2016.data[i].occupTitle;
				occupCode = sanjose2016.data[i].occupCode;
				yearA = sanjose2016.data[i].year;
				numEmployed = sanjose2016.data[i].numEmployed;
				meanWage = sanjose2016.data[i].meanWage;
				empChange = sanjose2016.data[i].empChange;

				circleSize = map(numEmployed, 10000, 140000, 20, 110);
				wage = map(meanWage, 10000, 170000, 800, 200);
				changeMap = map(empChange, -70, 70, -400, 400);
				change = (500 + changeMap);

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

		}
	} // end of if data is loaded

	//2017 Data
	if (page === 8) {
		fill(20);
    rect(butX + 800, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2017', butTX + 800, butTY);

		strokeWeight(4);
		stroke(180);
		line(567, 200, 567, canHeight - 100);
		strokeWeight(1);
		stroke(255);

		if (sanjose2017) {
			for (var i = 0; i < sanjose2017.data.length; i++) {

				//reassign variables
				occupTitle = sanjose2017.data[i].occupTitle;
				occupCode = sanjose2017.data[i].occupCode;
				yearA = sanjose2017.data[i].year;
				numEmployed = sanjose2017.data[i].numEmployed;
				meanWage = sanjose2017.data[i].meanWage;
				empChange = sanjose2017.data[i].empChange;

				circleSize = map(numEmployed, 10000, 140000, 20, 110);
				wage = map(meanWage, 10000, 170000, 800, 200);
				changeMap = map(empChange, -70, 70, -400, 400);
				change = (500 + changeMap);

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

		}
	} // end of if data is loaded

	//2018 Data
	if (page === 9) {
		fill(20);
    rect(butX + 900, butY, butW, butH, corn);
    textFont(light);
    textSize(24);
    fill(255);
    text('2018', butTX + 900, butTY);

		strokeWeight(4);
		stroke(180);
		line(583, 200, 583, canHeight - 100);
		strokeWeight(1);
		stroke(255);

		if (sanjose2018) {
			for (var i = 0; i < sanjose2018.data.length; i++) {

				//reassign variables
				occupTitle = sanjose2018.data[i].occupTitle;
				occupCode = sanjose2018.data[i].occupCode;
				yearA = sanjose2018.data[i].year;
				numEmployed = sanjose2018.data[i].numEmployed;
				meanWage = sanjose2018.data[i].meanWage;
				empChange = sanjose2018.data[i].empChange;

				circleSize = map(numEmployed, 10000, 140000, 20, 110);
				wage = map(meanWage, 10000, 170000, 800, 200);
				changeMap = map(empChange, -70, 70, -400, 400);
				change = (500 + changeMap);

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

		}
	} // end of if data is loaded

} // end of draw

function gotData(data) {
  sanjose2009 = data;
  console.log(sanjose2009);
}

function gotData2010(data) {
  sanjose2010 = data;
  console.log(sanjose2010);
}

function gotData2011(data) {
  sanjose2011 = data;
  console.log(sanjose2011);
}

function gotData2012(data) {
  sanjose2012 = data;
  console.log(sanjose2012);
}

function gotData2013(data) {
  sanjose2013 = data;
}

function gotData2014(data) {
  sanjose2014 = data;
}

function gotData2015(data) {
  sanjose2015 = data;
}

function gotData2016(data) {
  sanjose2016 = data;
}

function gotData2017(data) {
  sanjose2017 = data;
}

function gotData2018(data) {
  sanjose2018 = data;
}
