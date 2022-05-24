// JavaScript Document


//This script will create the header, navbar, and footer of the final exam of all pages


//To link the style 
var cssLink = document.createElement('link');
cssLink.rel = "stylesheet";
cssLink.href = "css/style.css";
document.querySelector("head").append(cssLink);


//To create the header
var theHeader = document.createElement('header');
theHeader.innerHTML = `
					<a href="index.html"><img src="image/bhcc_logo.png" alt="BHCC LOGO"></a>
					<h1>CMT 113 Javascript Final Exam</h1>

`
document.querySelector("body").append(theHeader);

//To create the nav
var theNav = document.createElement("nav");
theNav.innerHTML = `
					<a href="index.html">Home</a>
					<a href="page1.html">WebDev Course</a>
					<a href="page2.html">New England</a>
					<a href="page3.html">Form</a>
`
document.querySelector("body").append(theNav);


//To create the footer
var theFooter = document.createElement("footer");
theFooter.innerHTML = `
					<h2>Navigation</h2>
					<a href="index.html">Home</a>
					<a href="page1.html">WebDev Course</a>
					<a href="page2.html">New England</a>
					<a href="page3.html">Form</a>
					<br>
					<p>All rights are reserved to James Nguyen, the web developer of this website. &copy; Spring 2022</p>
`
document.querySelector("body").append(theFooter);