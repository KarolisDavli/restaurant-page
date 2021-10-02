import "./styles.css"
import pageLoad from "./page-load";
import menu from "./menu"
import navigation from "./nav";


  const content = document.getElementById('content');
  const heading = document.createElement('h1');
  const para = document.createElement('p');
  const topImg = document.createElement('img');


// Initialise page
navigation();
pageLoad();



const clearContent = () => {
  // content.innerHTML = '';
  content.removeChild(content.lastChild);
}


export {
  content,
  heading,
  para,
  topImg,
  clearContent
};

// viskas gerai, tik dabar clearContent funcija
// Isclearina ir button, vadinas juos reiktu sukurt outside content
