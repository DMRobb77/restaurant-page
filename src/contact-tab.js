import Alien from './alien.jpg';

function contactTabBuilder(){
    const articleDiv = document.getElementById('article');

    const contactTab = document.createElement('div');
    contactTab.className = 'contact-tab contact';
    articleDiv.appendChild(contactTab);

    //Tab title

    const articleHeader = document.createElement('div');
    articleHeader.className = 'headerDiv contact';
    contactTab.appendChild(articleHeader);

    const articleHeaderText = document.createElement('h1');
    articleHeaderText.textContent = 'Make Contact';
    articleHeader.appendChild(articleHeaderText);

    //First section

    const contactSection1 = document.createElement('div');
    contactTab.appendChild(contactSection1);

    const contactImage = document.createElement('img');
    contactImage.src = Alien;
    contactSection1.appendChild(contactImage);

    const subHeader1 = document.createElement('h2');
    subHeader1.className = 'subtitle';
    subHeader1.textContent = 'Phone Home!'
    contactSection1.appendChild(subHeader1);

    const contactList = document.createElement('ul');
    contactList.className = '.contact';
    contactList.innerHTML = '<li>Planet Pizza, LLC.</li><li>555-5555</li><li>planetpizza@realemail.net</li>';
    contactSection1.appendChild(contactList);

    //Second section

    const contactSection2 = document.createElement('div');
    contactTab.appendChild(contactSection2);

    const subHeader2 = document.createElement('h2');
    subHeader2.className = 'subtitle';
    subHeader2.textContent = 'Leave us a sign!';
    contactSection2.appendChild(subHeader2);

    const textBoxLabel = document.createElement('label');
    textBoxLabel.htmlFor = 'feedback';
    textBoxLabel.innerHTML = 'How are we doing?';
    contactSection2.appendChild(textBoxLabel);

    const textBox = document.createElement('textarea');
    textBox.name = 'feedback';
    contactSection2.appendChild(textBox);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    contactSection2.appendChild(submitBtn);
}

export default contactTabBuilder;