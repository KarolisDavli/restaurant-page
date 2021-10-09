import {
  content,
  heading2,
  para,
  subHeading,
} from "./index.js";

const contact = () => {

  const contactContent = document.createElement('div');
  contactContent.classList.add('contact');
  
  heading2.innerText = 'Get in touch';
  para.innerHTML = 'Call us, email us or just come by';
  subHeading.append(heading2, para)


  contactContent.append(subHeading);
  content.append(contactContent);


  const contactInfo = [
    ['Address', 'Piazza del Duomo, 56126, Pisa'],
    ['Phone', '+370 69224808'],
    ['Email', 'hello@foodlab.com'],
    ['We open', 'Monday - Thursday   09:00 - 23:00' + '<br>' +
      'Friday - Saturday    09:00 - 01:00' + '<br>' +
      'Sunday     09:00 - 13:00']
  ];

  contactInfo.forEach(i => {
    const infoRender = document.createElement('div');
    infoRender.classList.add('info-item')
    const bigInfo = document.createElement('h4');
    const smallIfo = document.createElement('p');

    // bigInfo.classList.add('');

    bigInfo.innerHTML = i[0];
    smallIfo.innerHTML = i[1];

    infoRender.append(bigInfo, smallIfo);
    contactContent.append(infoRender);

    console.log(bigInfo);
    console.log(smallIfo);
  })

  
}

export default contact;