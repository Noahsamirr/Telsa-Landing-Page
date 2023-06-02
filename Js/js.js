/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navmenu = document.querySelector('navbar__menu');
const navbar = document.querySelector('navbar');
const navbarToggle = document.querySelector('.navbar__toggle');
const navItems = document.querySelectorAll('#nav-list li');
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
} // end createMenuItem

function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }


// get the ul#userprofile
const navList = document.getElementById('nav-list');
// add the user profile items
navList.appendChild(createMenuItem("Section 1"));
navList.appendChild(createMenuItem('Section 2'));
navList.appendChild(createMenuItem('Section 3'));



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let li = document.createElement("li");
let text = document.createTextNode("Home");
li.appendChild(text);
ul.appendChild(li);






// Add class 'active' to section when near top of viewport
function onScroll() {
    let scrollPos = window.scrollY;
    sections.forEach(function (el) {
        if (el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}



// Scroll to anchor ID using scrollTO event
function scrollToSection(e) {
    e.preventDefault();
    let target = e.target;
    let id = target.getAttribute('href');
    let section = document.querySelector(id);
    section.scrollIntoView({
        behavior: 'smooth'
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
navItems.forEach(function (el) {
    el.addEventListener('click', scrollToSection);
});

// Set sections as active