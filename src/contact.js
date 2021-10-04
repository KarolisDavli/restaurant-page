import {
  content,
  heading2,
  para,
} from "./index.js";

const contact = () => {

  const menuContent = document.createElement('div');

  heading2.innerText = 'Get in touch';


  menuContent.append(heading2, para);
  content.append(menuContent);


  const info = [
    ['Address', 'Grilled Halloumi with a cherry tomato \u0026 chutney & croûtes.'],
    ['Phone', '+370 69224808'],
    ['Email', 'hello@foodlab.com'],
    ['We open', 'Monday - Thursday     09:00 - 23:00 Friday - Saturday     09:00 - 01:00 Sunday     09:00 - 13:00']
  ];

  const infoRender = document.createElement('div');
  const bigInfo = document.createElement('h4');
  const smallIfo = document.createElement('p');

  info.forEach(function reder(i) {

    console.log(i);
  }) 

  
}

export default contact;