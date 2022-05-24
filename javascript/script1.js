// JavaScript Document

//This script does the WebDev Course

//To change Title
document.querySelector("title").innerHTML = "WebDev Course";

//To link the style for index
var cssLink = document.createElement('link');
cssLink.rel = "stylesheet";
cssLink.href = "css/style1.css";
document.querySelector("head").append(cssLink);

//Create main element after nav element for the WebDev Course
var theMain = document.createElement('main');

var theNav = document.querySelector("nav");

theNav.after(theMain);

//Create arrays for WebDev Course
var mainHead = "Web Development Option";

var subHead = [
	"Course Title",
	"Course Number",
	"Semester Taken",
	"Credits",
	"Prerequisites"
];

var courseType = [
	"General Education Courses",
	"Concentration Courses"
];

var courseTitle = [
	"College Writing I",
	"College Writing II",
	"Individual and Society",
	"Intro to Mass media",
	"Quantitaive Thought",
	"Science and Technology",
	"Humanities",
	
	"Oral Communication",
	"HTML5",
	"CSS",
	"Digital Imaging With Photoshop",
	
	"Javascript",
	"SQL Programming",
	"XML",
	
	"JQuery",
	"PHP/MySql",
	"Career Elective I",
	"Node JS",
	
	"JavaScript Object Notation (JSON)",
	"Mobile Web",
	"Career Elective II",
	
	" "
];

var courseNumber = [
	"ENG 111",
	"ENG 112",
	"From Area 2",
	"VMA111 satisfies Area 3 requirement",
	"From Area 4",
	"From Area 5",
	"From Area 6",
	
	"ENG 171",
	"CMT 111",
	"CMT 125",
	"VMA 105",
	
	"CMT 113",
	"CIT 236",
	"XML 117",
	
	"CMT1xx",
	"CMT 241",
	"See Note *",
	"CMT 2xx",
	
	"CMT2xx",
	"CMT2xx",
	"See Note **",
	
	" "
];

var semesterTaken = [
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	
	" ",
	"1",
	"1",
	"1",
	
	"2",
	"2",
	"2",
	
	"3",
	"3",
	"3",
	"3",
	
	"4",
	"4",
	"4",

	"Total"
];

var credits = [
	"3",
	"3",
	"3",
	"3",
	"3",
	"4",
	"3",
	
	"3",
	"3",
	"3",
	"3",
	
	"3",
	"3",
	"3",
	
	"3",
	"3",
	"3",
	"3",
	
	"3",
	"3",
	"3",
	
	"64"
];

var prerequistes = [
	"ENG095 or placement and ESL098 or RDG095 or Placement",
	"ENG111",
	" ",
	"ENG095 and MAT093",
	"MAT097 or placement",
	" ",
	" ",
	
	" ",
	"prerequiste/corequisite CMT125",
	"prerequiste/corequisite CMT111",
	"ENG095 and MAT093 or placement",
	
	"CMT 111 and CMT 125",
	"CIT110 or CIT113 or CIT120 or Chair approval",
	"CMT 111 and CMT 125",
	
	"CMT113",
	"CMT 113 and CIT 236",
	"As defined by chosen elective",
	"CMT 117",
	
	"CMT 113",
	"CMT 241",
	"As defined by chosen elective",
	
	" "
	
];

var asterisk = [
	"* The student may elect to take either VMA 132, Typography I or CIT 268, Operating Systems",
	
	"** The student may elect to take either CMT 2xx, Web Design with Ajax or CMT299, Web Internship"
];

//To create the WebDev table
var mainTable = "<h1>" + mainHead + "</h1>";

mainTable += "<table> <tr>";
for (i=0; i < subHead.length; i++) {
	mainTable += "<th>" + subHead[i] + "</th>";
}
mainTable += "</tr>";



for (i=0; i < courseTitle.length; i++) {
	mainTable += "<tr>";
	
	mainTable += "<td>" + courseTitle[i] + "</td>";
	mainTable += "<td>" + courseNumber[i] + "</td>";
	mainTable += "<td>" + semesterTaken[i] + "</td>";
	mainTable += "<td>" + credits[i] + "</td>";
	mainTable += "<td>" + prerequistes[i] + "</td>";
	
	mainTable += "</tr>";
}
mainTable += "</table>";

	
//print whole table
document.querySelector("main").innerHTML = mainTable;

//To input the course type with colspan

var theTableRow = document.querySelectorAll("tr");

var generalType = document.createElement("tr");
generalType.innerHTML = "<td class='big' colspan=5>" + courseType[0] + "</td>";

var concentrationType = document.createElement("tr");
concentrationType.innerHTML = "<td class='big' colspan=5>" + courseType[1] + "</td>";

theTableRow[0].after(generalType);
theTableRow[8].after(concentrationType);


///////////to add a secton of asterisks after the table

var asteriskSection = document.createElement("section");
asteriskSection.innerHTML = `
					<p>${asterisk[0]}</p>
					<p>${asterisk[1]}</p>
`

document.querySelector('table').after(asteriskSection);