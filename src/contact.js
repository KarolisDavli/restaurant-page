import {
  content,
  heading,
  para,
  topImg,} from "./index.js";

const contact = () => {

  const menuContent = document.createElement('div');

  heading.innerText = 'Contact';


  para.innerText = 'Get in touch';

  // topImg.classList.add('top-img');
  // topImg.setAttribute('src', '../img/main.jpg');

  menuContent.append(heading, para, topImg);
  content.append(menuContent);
  console.log('this is menu');
}

export default contact;