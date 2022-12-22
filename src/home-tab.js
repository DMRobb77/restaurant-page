import Pizza from './pizza.jpg'



function homeTabBuilder() {
    const articleDiv = document.getElementById('article');

    //Body

    const homeTab = document.createElement('div');
    homeTab.className = 'main-tab home';
    articleDiv.appendChild(homeTab);

    const articleHeader = document.createElement('div');
    articleHeader.className = 'headerDiv home';
    homeTab.appendChild(articleHeader);

    const articleHeaderText = document.createElement('h1');
    articleHeaderText.textContent = 'Planet Pizza';
    articleHeader.appendChild(articleHeaderText);

    const imgDiv = document.createElement('div');
    imgDiv.className = 'img-div home';
    homeTab.appendChild(imgDiv);

    const pizzaImage = document.createElement('img');
    pizzaImage.src = Pizza;
    pizzaImage.className = 'pizza-img home';
    pizzaImage.width = '800';
    imgDiv.appendChild(pizzaImage);

    const subTitle = document.createElement('h3');
    subTitle.textContent = 'Tasting is Believing!';
    subTitle.className = 'subtitle home';
    imgDiv.appendChild(subTitle);

    const hoursDiv = document.createElement('div');
    hoursDiv.className = 'hours home';
    hoursDiv.innerHTML = '<h3>Hours</h3>';
    homeTab.appendChild(hoursDiv);

    const hoursList = document.createElement('ul');
    hoursList.innerHTML = '<li>Sunday 11am - 6pm</li><li>Monday: 10am - 11pm</li><li>Tuseday: 10am - 11pm</li><li>Wednesday: 10am - 11pm</li><li>Thursday: 10am - 11pm</li><li>Friday: 10am - 1am</li><li>Saturday: 10am - 1am</li>'
    hoursDiv.appendChild(hoursList);

    const locationDiv = document.createElement('div');
    locationDiv.innerHTML = '<h3>Location</h3> <span>123 South Nebula Drive, Jupiter, Missouri</span>';
    locationDiv.className = 'location home';
    homeTab.appendChild(locationDiv);

}

export default homeTabBuilder;