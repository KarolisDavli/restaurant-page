import {
  content,
  heading2,
  para,
} from "./index.js";

const menu = () => {

  const menuContent = document.createElement('div');

  heading2.innerText = 'Welcome to foodlab';

  
  

  para.innerText = 'Our food is cooked fresh and based on fresh ingredients and produce, during busy hours waiting times may be longer than we’d like them to be. After all we all know, good food takes time ';

  // topImg.classList.add('top-img');
  // topImg.setAttribute('src', '../img/main.jpg');

  menuContent.append(heading2, para);
  content.append(menuContent);
  console.log('this is menu');
}

export default menu;