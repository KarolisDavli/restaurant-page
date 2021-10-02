import {
  content,
  heading,
  para,
  topImg,} from "./index.js";



const menu = () => {

  const menuContent = document.createElement('div');

  heading.innerText = 'Menu';

  para.innerText = 'Burger please!';

  // topImg.classList.add('top-img');
  // topImg.setAttribute('src', '../img/main.jpg');

  menuContent.append(heading, para, topImg);
  content.append(menuContent);
  console.log('this is menu');
}

export default menu;