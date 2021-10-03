import {
  content,
  heading2,
  para,
} from "./index.js";

const menuContent = document.createElement('div');

const meals = {
  name: ['Grilled Halloumi', 'POT OF MUSSELS', 'FALAFEL PATTIES', 'JAMAICAN MEAT BALLS'],
  desc: ['Grilled Halloumi with a cherry tomato chutney \u0026 croûtes.',
        'Small portion of fresh Sicilian mussels,cooked in white wine, anchovy butter, lemon and black pepper.',
        'Homemade chickpea patties served with raita dressing.',
        'Spiced Jamaican beef patties served with tomato chutney.']
};

// Vietoj object sukurt array ir pervaryt per ji su forEach ir kas kast appending contenta


function go() {
  const starters = document.createElement('div');
  starters.classList.add('mealItems');

  for (let i = 0; i < meals.name.length; i++) {
    let mealName = document.createElement('h4');
    mealName.classList.add('meal-name');
    mealName = meals.name[i];
    starters.append(mealName);
    
    let mealDesc = document.createElement('p');
    mealDesc.classList.add('meal-desc');
    mealDesc = meals.desc[i];
    starters.append(mealDesc);
    menuContent.append(starters);
    
    console.log(starters);
    // starters.append(mealName, mealDesc); 
    // menuContent.append(starters);
  }
}



const menu = () => {

  heading2.innerText = 'Welcome to foodlab';

  para.innerText = 'Our food is cooked fresh and based on fresh ingredients and produce, during busy hours waiting times may be longer than we’d like them to be. After all we all know, good food takes time ';

  const starters = go();
  menuContent.append(heading2, para);
  content.append(menuContent);

}

// const createStartersMenu = () => {
//   const h3 = document.createElement('h3');
//   h3.innerText('Starters');
// }







export default menu;