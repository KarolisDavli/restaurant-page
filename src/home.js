import {
  content,
  heading1,
  para,
} from "./index.js";

const home = () => {

  const homeContent = document.createElement('div');

  heading1.innerText = 'Less drama more food';
  para.innerText = 'Restaurant of the people, by the people, for the people';

  const ctaButton = document.createElement('button');
  ctaButton.classList.add('cta', 'btn');
  ctaButton.innerText = 'Book a table';

  homeContent.append(heading1, para, ctaButton);
  content.append(homeContent);

}

export default home;


