import Pizza from './pizza.jpg'



function homeTabBuilder() {
    const articleDiv = document.getElementById('article');

    const homeTab = document.createElement('div');
    homeTab.className = 'home-tab home';
    articleDiv.appendChild(homeTab);

    //Tab title

    const articleHeader = document.createElement('div');
    articleHeader.className = 'headerDiv home';
    homeTab.appendChild(articleHeader);

    const articleHeaderText = document.createElement('h1');
    articleHeaderText.textContent = 'Planet Pizza';
    articleHeader.appendChild(articleHeaderText);

    //First section

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

    const blurb = document.createElement('span');
    blurb.innerHTML = `For over 30 years, our mission at Planet Pizza has 
        been to explore the outer reaches of what's possible with pizza. We've 
        boldly explored the final frontiers of flavor and crash-landed back here
        on Earth to deliver our discoveries right to your doorstep. Because at
        Planet Pizza, the sky is no longer the limit. 🚀`;
    imgDiv.appendChild(blurb);

    //Second section

    const hoursDiv = document.createElement('div');
    hoursDiv.className = 'hours home';
    hoursDiv.innerHTML = `<h3 class='subtitle'>Hours</h3>`;
    homeTab.appendChild(hoursDiv);

    const hoursList = document.createElement('ul');
    hoursList.innerHTML = `<li>Sunday:   11am - 6pm</li><li>Monday:   10am - 11pm
        </li><li>Tuesday:   10am - 11pm</li><li>Wednesday:   10am - 11pm</li><li>
        Thursday:   10am - 11pm</li><li>Friday:   10am - 1am</li><li>Saturday:   
        10am - 1am</li>`
    hoursDiv.appendChild(hoursList);

    //Third section

    const locationDiv = document.createElement('div');
    locationDiv.innerHTML = `<h3 class = 'subtitle'>Location</h3> <span>123 South Nebula Drive, Jupiter, Missouri</span>`;
    locationDiv.className = 'location home';
    homeTab.appendChild(locationDiv);

}

export default homeTabBuilder;