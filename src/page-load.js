import {
  content,
  heading,
  para,
  topImg,} from "./index.js";

const pageLoad = () => {

  const pageLoadContent = document.createElement('div');
  
  heading.innerText = 'Awesome Restaurant Page';

  
  para.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum quae officiis facere quam eos sit, voluptatum tenetur amet explicabo qui corporis dolores animi? Quisquam vitae reiciendint repudiaus!';

  
  topImg.classList.add('top-img');
  topImg.setAttribute('src', '../img/main.jpg');

  pageLoadContent.append(heading, para, topImg)
  content.append(pageLoadContent);

}

export default pageLoad;


