// JavaScript Document

//for the home page only

//To change Title
var theTitle = document.querySelector("title").innerHTML = "Home";

//To link the style for index
var cssLink = document.createElement('link');
cssLink.rel = "stylesheet";
cssLink.href = "css/styleindex.css";
document.querySelector("head").append(cssLink);

//To create a main
var theMain = document.createElement('main');

theMain.innerHTML = `

						<div class="post">
							<img src="image/profile.jpg" alt="profile pic">
							<p>
							    The final exam contains three projects. The first project is illustrating the web development courses of Bunker Hill Community College. The task is to create arrays of table data and use those data to create a table, all using Javascript DOM. 
							</p>
						</div>

						<div class="post">
							<img src="image/profile.jpg" alt="profile pic">
							<p>
							    The second project involves creating a sort of wikipedia page for the six New England States, which are: Maine, New Hampshire, Vermont, Massachusetts, Rhode Island, and Connecticut. Just like the first project, all of this has to be done with Javascript DOM. This project uses a lot of arrays to organize the facts and images of each State. It is to have four panels: the banner, the name, the facts, and the images of the State.
							</p>
						</div>

						<div class="post">
							<img src="image/profile.jpg" alt="profile pic">
							<p>
								The third project involves creating a form that validate the name, address, city, zip code, state, and the email address. It has to be validated so that if a user misinput a text-box, the form will remind the user to fix it. With HTML5 new features, especially the pattern atrribute, most of the validations were done without javascript. However, the complicated validations, like checking for capitalization of first letter, were still done with javascript. In the end, the form validates to the best of my ability.
							</p>
						</div>
		
`
document.querySelector('nav').after(theMain);