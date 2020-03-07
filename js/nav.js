console.log('Nav JS Loaded');

//Get Nav Menu
const menu = document.querySelector('.nav-menu');

//Get Nav List
const list = document.querySelector('.nav-list');

//Capture Window Width
var width = window.matchMedia("(max-width: 775px)");

//Declare Function To Show Nav
const showNav = (list) =>
{	
	//Remove Hidden Class
	list.classList.remove('nav-hidden');
}

//Declare Function To Hide Nav
const hideNav = (list) =>
{	
	//Add Hidden Class
	list.classList.add('nav-hidden');
}

//Click Menu To Show Hide Nav
menu.addEventListener('click', e =>
{	 
	if (list.classList.contains('nav-hidden'))
	{
		showNav(list);
	}
	else
	{
		hideNav(list);
	}
})

//Hide Nav Bar On Page Load
window.addEventListener('load', e =>
{
	if (width.matches)
	{
		hideNav(list);
	}
	else
	{
		showNav(list);
	}
})

//Hide Nav Bar On Window Resize
window.addEventListener('resize', e =>
{
	//Capture Window Width
	width = window.matchMedia("(max-width: 775px)");
	
	//Check If Window Width Matches Media Query
	if (width.matches)
	{
		hideNav(list);
	}
	else
	{
		showNav(list);
	}
})