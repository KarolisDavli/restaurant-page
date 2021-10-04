import {
  content,
  heading2,
  para,
} from "./index.js";


const menuContent = document.createElement('div');

const menu = () => {

  heading2.innerText = 'Welcome to foodlab';

  para.innerText = 'Our food is cooked fresh and based on fresh ingredients and produce, during busy hours waiting times may be longer than we’d like them to be. After all we all know, good food takes time ';


  menuContent.append(heading2, para);
  content.append(menuContent);




  createMenuItem('Grilled Halloumi', 'Grilled Halloumi with a cherry tomato chutney & croûtes.')
  createMenuItem('POT OF MUSSELS', 'Small portion of fresh Sicilian mussels, cooked in white wine, anchovy butter, lemon and black pepper.');
  createMenuItem('FALAFEL PATTIES ', 'Homemade chickpea patties served with raita dressing.')
  createMenuItem('JAMAICAN MEAT BALLS', 'Spiced Jamaican beef patties served with tomato chutney.')
}


function createMenuItem(name, desc) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('h4');
    itemName.classList.add('item-name');
    itemName.innerHTML = name;

    const itemDesc = document.createElement('p');
    itemDesc.classList.add('item-desc');
    itemDesc.innerHTML = desc;

    menuItem.append(itemName, itemDesc);
    menuContent.append(menuItem);
    console.log(menuContent);
};






export default menu;