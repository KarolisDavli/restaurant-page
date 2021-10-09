import "./styles.css"
import home from "./home";
import menu from "./menu"
import navigation from "./nav";



// Content elements
const content = document.getElementById('content');
const heading1 = document.createElement('h1');
const heading2 = document.createElement('h2')
const para = document.createElement('p');
const menuHeading = document.createElement('div');
menuHeading.classList.add('sub-heading');

// Logo
const logo = document.createElement('div');
logo.setAttribute('id', 'logo');
logo.innerText = 'foodlab';
content.append(logo);

// Initialise page
navigation();
home();



export {
  content,
  heading1,
  heading2,
  para,
  menuHeading,
};

// viskas gerai, tik dabar clearContent funcija
// Isclearina ir button, vadinas juos reiktu sukurt outside content
