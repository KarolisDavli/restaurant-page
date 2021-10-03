import {
  content,
  heading2,
  para,
} from "./index.js";

const contact = () => {

  const menuContent = document.createElement('div');

  heading2.innerText = 'Contact';


  para.innerText = 'Get in touch';

  menuContent.append(heading2, para);
  content.append(menuContent);
  console.log('this is menu');
}

export default contact;