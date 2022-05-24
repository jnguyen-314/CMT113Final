// JavaScript Document

//The new england part of the project

//To link the style 
var cssLink = document.createElement('link');
cssLink.rel = "stylesheet";
cssLink.href = "css/style2.css";
document.querySelector("head").append(cssLink);

//Title
document.querySelector('title').innerHTML = "New England";


//New England States
//Maine, New Hampshire, Vermont, Massachussetts, Rhode Island, Connecticut
class neStates {};
	neStates.stateName = [
		"Maine",
		"New Hampshire",
		"Vermont",
		"Massachussetts",
		"Rhode Island",
		"Connecticut"
	];

	neStates.stateBanner = [
		"image/mainebanner.png",
		"image/newhampshirebanner.png",
		"image/vermontbanner.png",
		"image/massachussettsbanner.png",
		"image/rhodeislandbanner.png",
		"image/connecticutbanner.png"
	];
	
//Third panel
	neStates.stateGovernor = [
		"Janet Mills",
		"Chris Sununu",
		"Phil Scott",
		"Charlie Baker",
		"Daniel McKee",
		"Ned Lemont"
	];
	
	neStates.stateSize = [
		"33,215 square miles",
		"9,349 square miles",
		"9,616 square miles",
		"10,565 square miles",
		"1,214 square miles",
		"5,543 square miles"
	];

	neStates.statePopulation = [
		"1,340,825 people",
		"1,355,244 people",
		"624,340 people",
		"6,873,003 people",
		"1,057,798 people",
		"3,570,549 people"
	];

	neStates.stateFound = [
		"March 15, 1820",
		"January 5, 1776",
		"March 4, 1791",
		"February 6, 1788",
		"May 4, 1776",
		"January 9, 1788"
	];

	neStates.stateLink = [
		"https://www.maine.gov",
		"https://www.nh.gov",
		"https://www.vermont.gov",
		"https://www.mass.gov",
		"https://www.ri.gov",
		"https://www.portal.ct.gov"
	];
//Fourth Panel
	neStates.stateHouse = [
		"https://upload.wikimedia.org/wikipedia/commons/8/82/Maine_State_House_5.JPG",
		"https://upload.wikimedia.org/wikipedia/commons/7/70/New_Hampshire_State_House_5.JPG",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Vermont_State_House_Montpelier_October_2021_HDR.jpg/1200px-Vermont_State_House_Montpelier_October_2021_HDR.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Mass_statehouse_eb1.jpg/1200px-Mass_statehouse_eb1.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/9/99/Rhode_Island_state_house_2009a.JPG",
		"https://upload.wikimedia.org/wikipedia/commons/d/d0/Connecticut_State_Capitol_north_side.jpg"
	];
//Black capped chickadee, Purple Finch, Hermit Thrush, Black-capped chickadee, Rhode Island Red,American Robin
	neStates.stateBird = [
		"https://upload.wikimedia.org/wikipedia/commons/f/fb/M%C3%A9sange_%C3%A0_t%C3%AAte_noire_Black-capped_Chickadee.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/e/ec/Purple_Finch_DSC5455vvc.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Swainson%27s_Thrush_0777vv.jpg/1200px-Swainson%27s_Thrush_0777vv.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/f/fb/M%C3%A9sange_%C3%A0_t%C3%AAte_noire_Black-capped_Chickadee.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Rhode_Island_Red.jpg/540px-Rhode_Island_Red.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/3/32/American_robin.jpg"
	];
	
	neStates.stateBirdName = [
		"Black Capped Chickadee",
		"Purple Finch",
		"Hermit Thrush",
		"Black-Capped Chickadee",
		"Rhode Island Red",
		"American Robin"
	]
	
//white pine cone and tassel, purple lilac, red clover, mayflower, violet, mountain laurel
	neStates.stateFlower = [
		"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pinus_strobus_cones.JPG/188px-Pinus_strobus_cones.JPG",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lilac_%282%29.jpg/188px-Lilac_%282%29.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Red_clover_closeup.jpg/188px-Red_clover_closeup.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Trailing_arbutus.jpg/188px-Trailing_arbutus.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Viola_sororia.jpg/188px-Viola_sororia.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kalmia_latifolia2.jpg/188px-Kalmia_latifolia2.jpg"
	];

	neStates.stateFlowerName = [
		"White Pine Cone and Tassel",
		"Purple Lilac",
		"Red Clover",
		"Mayflower",
		"Violet",
		"Mountain Laurel"
	]

	neStates.stateDescription = [
		"Maine, the northeasternmost U.S. state, is known for its rocky coastline, maritime history and nature areas like the granite and spruce islands of Acadia National Park. Moose are plentiful in Baxter State Park, home to Mt. Katahdin, endpoint of the Appalachian Trail. Lighthouses such as the candy-striped beacon at West Quoddy Head, dot the coast, as do lobster shacks and sandy beaches like Ogunquit and Old Orchard. ― Google",
		"New Hampshire, a U.S. state in New England, is defined by its quaint towns and large expanses of wilderness. In the north, White Mountain National Forest is known for winter sports areas and Mt. Washington, the region’s highest peak, with a cog railway to its summit. Also in the White Mountains are moose, black bears and part of the Appalachian Trail. ― Google",
		"Vermont is a state in the northeastern United States, known for its natural landscape, which is primarily forested. Part of the New England region, it's also known for being home to more than 100 19th-century covered wooden bridges, and as a major producer of maple syrup. Thousands of acres of mountain terrain are crossed by hiking trails and skiing slopes. ― Google",
		"Massachusetts, officially the Commonwealth of Massachusetts, is the most populous state in the New England region of the United States. It borders on the Atlantic Ocean and Gulf of Maine to the east, Connecticut and Rhode Island to the south, New Hampshire and Vermont to the north and New York to the west. ― Wikipedia",
		"Rhode Island, a U.S. state in New England, is known for sandy shores and seaside Colonial towns. It's home to several large cities, including Newport, which is famed for sailing and Gilded Age mansions, such as The Breakers. Providence, its capital, is home to Brown University, green Roger Williams Park, landscaped Waterplace Park and Riverwalk, with the famed WaterFire art installation. ― Google",
		"Connecticut is a U.S. state in southern New England that has a mix of coastal cities and rural areas dotted with small towns. Mystic is famed for its Seaport museum filled with centuries-old ships, and the beluga whale exhibits at Mystic Aquarium. On Long Island Sound, the city of New Haven is known as the home of Yale University and its acclaimed Peabody Museum of Natural History. ― Google"
	];

//////////////////////////To create the buttons nav with class name "stateButtons"

var stateNav = document.createElement('nav');
stateNav.classList.add("stateButtons");
var stateButton = "";

for (i=0;i<neStates.stateName.length; i++) {
	stateButton += "<button onClick=stateChange("+ i + ")>";
	stateButton += neStates.stateName[i];
	stateButton += "</button>";
}
stateNav.innerHTML = stateButton;

var homeNav = document.querySelector('nav');
homeNav.after(stateNav);


///////////////////////////To create the main element

var stateMain = document.createElement('main');

stateNav.after(stateMain);

///////////////////////////To create the panels within "stateMain".

var stateHeader = document.createElement("header");
stateHeader.classList.add("banner");

var stateHeader2 = document.createElement("header");
stateHeader2.classList.add("name");

var stateContent = document.createElement("section");

var stateImage = document.createElement("aside");

stateMain.append(stateHeader,stateHeader2,stateContent,stateImage);

//////////////////////////////Function for each state change
//num:
//0 is maine
//1 is new hampshire
//2 is vermont
//3 is massachussetts
//4 is rhode island
//5 is connecticut



function stateChange(num) {
	stateHeader.innerHTML = `<img src= '${neStates.stateBanner[num]}' alt = '${neStates.stateName[num]} banner'>`;
	stateHeader2.innerHTML = "<h1>" + neStates.stateName[num] + "</h1>";
	stateContent.innerHTML = `<h2>Key Factors</h2>
								<ul>
									<li>The State's Governor: ${neStates.stateGovernor[num]}</li>
									<li>The State's Size: ${neStates.stateSize[num]}</li>
									<li>The State's Population: ${neStates.statePopulation[num]}</li>
									<li>When the State is founded?: ${neStates.stateFound[num]}</li>
									<li>Link: <a href='${neStates.stateLink[num]}' target='_blank'>${neStates.stateLink[num]}</a></li>
								</ul>
							<h2>Description</h2>
							<p>${neStates.stateDescription[num]}</p> <br><br>
							<p>Hover over the image for a description of it.</p>
							<br><br>
`
	stateImage.innerHTML = `<img src='${neStates.stateHouse[num]}'
								alt= '${neStates.stateName[num]} State House'
								title = '${neStates.stateName[num]} State House'>
							<img src='${neStates.stateBird[num]}' 
								alt= '${neStates.stateName[num]} State Bird'
								title = '${neStates.stateName[num]} State Bird is the ${neStates.stateBirdName[num]}'>
							<img src='${neStates.stateFlower[num]}'
								alt= '${neStates.stateName[num]} state flower'
								title = '${neStates.stateName[num]} State Flower is the ${neStates.stateFlowerName[num]}'>

`
};
