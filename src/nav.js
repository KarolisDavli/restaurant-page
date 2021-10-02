import { globalVar, clearContent } from "./index.js";
import pageLoad from "./page-load";
import menu from "./menu"



// Navigation
function navigation() {
  const nav = document.getElementById('nav');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  nav.append(homeBtn, menuBtn, contactBtn);


  homeBtn.innerText = 'Home';
  menuBtn.innerText = 'Menu';
  contactBtn.innerText = 'Contact';

  homeBtn.addEventListener('click', () => {
    clearContent();
    pageLoad();
  });
  menuBtn.addEventListener('click', () => {
    clearContent();
    menu();
  });
}


export default navigation;