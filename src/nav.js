import {clearContent, content } from "./index.js";
import home from "./home";
import menu from "./menu"
import contact from "./contact.js";


// Navigation
function navigation() {
  
  const nav = document.createElement('div');
  nav.classList.add('nav');
  
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  homeBtn.classList.add('btn');
  menuBtn.classList.add('btn');
  contactBtn.classList.add('btn');

  homeBtn.innerText = 'Home';
  menuBtn.innerText = 'Menu';
  contactBtn.innerText = 'Contact';

  nav.append(homeBtn, menuBtn, contactBtn);
  content.appendChild(nav);

  const clearContent = () => {
    // content.innerHTML = '';
    content.removeChild(content.lastChild);
  }

  homeBtn.addEventListener('click', () => {
    clearContent();
    home();
  });

  menuBtn.addEventListener('click', () => {
    clearContent();
    menu();
  });

  contactBtn.addEventListener('click', () => {
    clearContent();
    contact();
  });
}


export default navigation;