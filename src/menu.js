import {
  content,
  heading2,
  para,
  menuHeading,
} from "./index.js";




const menu = () => {

  const menuContent = document.createElement('div');
  menuContent.classList.add('menu');

  heading2.innerText = 'Welcome to foodlab';
  para.innerText = 'Our food is cooked fresh and based on fresh ingredients and produce, during busy hours waiting times may be longer than we’d like them to be. After all we all know, good food takes time ';
  menuHeading.append(heading2, para)

  menuContent.append(menuHeading);
  content.append(menuContent);

  const menuInfo = [
    ['Grilled Halloumi', 'Grilled Halloumi with a cherry tomato chutney & croûtes.'],
    ['POT OF MUSSELS', 'Small portion of fresh Sicilian mussels, cooked in white wine, anchovy butter, lemon and black pepper.'],
    ['FALAFEL PATTIES ', 'Homemade chickpea patties served with raita dressing.'],
    ['JAMAICAN MEAT BALLS', 'Spiced Jamaican beef patties served with tomato chutney.'],
    ['PULLED PORK BUN ', '250g local pulled pork, house braised for 3 hour, fried onions, double Emmental cheese, rucola, tomatoes & mayo. Served in a sesame brioche bun.'],
    ['CHICKEN BURGER', 'Deep-fried 300g boneless chicken thigh, coated with our blend of spices, double red Leicester cheese & coleslaw. Served in a sesame brioche bun.'],
    ['FRESH CALAMARI SALAD', 'Grilled calamari, avocado, tomatoes, red peppers, cucumbers, mixed leaves, marjoram, pernod mayo & lemon.'],
    ['CANDANASRI BUDDHA BOWL', 'Brown quinoa, beetroot, asparagus, cucumber, grilled halloumi, hummus, hazelnuts & herb vinaigrette. '],
    ['IRISH BEEF TAGLIATA ', '220g of Fresh grilled beef steak, mixed leaves, rucola, red peppers, carrots, parmesan, crushed hazelnuts, chili, balsamic vinaigrette & lime.'],
  ]
  
  menuInfo.forEach(i => {
    const menuRender = document.createElement('div');
    const itemName = document.createElement('h4');
    const itemDesc = document.createElement('p');

    itemName.classList.add('sub-heading');

    itemName.innerHTML = i[0];
    itemDesc.innerHTML = i[1];

    menuRender.append(itemName, itemDesc);
    menuContent.append(menuRender);

    console.log(i[0]);
    console.log(i[1]);
  })
}










export default menu;