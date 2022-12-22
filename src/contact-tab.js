import Alien from './alien.jpg';

function contactTabBuilder(){
    const articleDiv = document.getElementById('article');

    //Body
    const contactTab = document.createElement('div');
    contactTab.className = 'contact-tab contact';
    articleDiv.appendChild(contactTab);

    const articleHeader = document.createElement('div');
    articleHeader.className = 'headerDiv contact';
    contactTab.appendChild(articleHeader);

    const articleHeaderText = document.createElement('h1');
    articleHeaderText.textContent = 'Make Contact';
    articleHeader.appendChild(articleHeaderText);

    const contactImage = document.createElement('img');
    contactImage.src = Alien;
    contactImage.width = 600;
    contactTab.appendChild(contactImage);

    const subHeader1 = document.createElement('h2');
    subHeader1.textContent = 'Phone Home!'
    contactTab.appendChild(subHeader1);

    const contactList = document.createElement('ul');
    contactList.innerHTML = '<li>Planet Pizza, LLC.</li><li>555-5555</li><li>planetpizza@realemail.net</li>';
    contactTab.appendChild(contactList);

    const subHeader2 = document.createElement('h2');
    subHeader2.textContent = 'Leave us a sign!';
    contactTab.appendChild(subHeader2);

    const textBoxLabel = document.createElement('label');
    textBoxLabel.htmlFor = 'feedback';
    textBoxLabel.innerHTML = 'How are we doing?';
    contactTab.appendChild(textBoxLabel);

    const textBox = document.createElement('textarea');
    textBox.name = 'feedback';
    contactTab.appendChild(textBox);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    contactTab.appendChild(submitBtn);
}

export default contactTabBuilder;