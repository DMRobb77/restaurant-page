import homeTabBuilder from "./home-tab";
import menuTabBuilder from "./menu-tab";
import contactTabBuilder from "./contact-tab";
import 'normalize.css';
import './style.css';


function tabRefresher(currentTab){

    //removes HTML elements to be replaced on tab switch
    const currentElements = document.getElementsByClassName(currentTab);

    if (currentElements.length !== 0){
        for (let i = 0; i < currentElements.length; i++){
            currentElements[i].remove();
        };
    };
}

function tabButtonActivator(activatedTab){
    let allTabs = document.querySelectorAll('.activated');
    for (let i = 0; i < allTabs.length; i++){
        allTabs[i].classList.remove('activated');
    }
    activatedTab.className = 'activated';
}

function baseContentBuilder() {
    const contentDiv = document.getElementById('content');
    let currentTab = 'home';

    //Create header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';
    contentDiv.appendChild(headerDiv);

    //Create list of tab butons
    const tabList = document.createElement('ul');
    tabList.className = 'tablist';
    headerDiv.appendChild(tabList);

    //Home tab logic
    const homeTab = document.createElement('li');
    const homeLink = document.createElement('button');
    homeLink.className = 'activated';
    homeLink.textContent = 'Home';
    homeTab.appendChild(homeLink);

    homeLink.addEventListener('click', function(){
        if (currentTab != 'home'){
            tabRefresher(currentTab);
            tabButtonActivator(homeLink);
            homeTabBuilder();
            currentTab = 'home';
        }
    })

    //Menu tab logic
    const menuTab = document.createElement('li');
    const menuLink =  document.createElement('button');
    menuLink.textContent = 'Menu';
    menuTab.appendChild(menuLink);

    menuLink.addEventListener('click', function(){
        if (currentTab != 'menu'){
            tabRefresher(currentTab);
            tabButtonActivator(menuLink);
            menuTabBuilder();
            currentTab = 'menu';
        }
    });

    //Contact tab logic
    const contactTab = document.createElement('li');
    const contactLink = document.createElement('button');
    contactLink.textContent = 'Contact';
    contactTab.appendChild(contactLink);

    contactLink.addEventListener('click', function(){
        if (currentTab != 'contact'){
            tabRefresher(currentTab);
            tabButtonActivator(contactLink);
            contactTabBuilder();
            currentTab = 'contact';
        }
    });

    //Add tab buttons to header list
    tabList.appendChild(homeTab);
    tabList.appendChild(menuTab);
    tabList.appendChild(contactTab);

    //Create body to attach new tabs to
    const articleDiv = document.createElement('div');
    articleDiv.id= 'article';
    contentDiv.appendChild(articleDiv);
}

function footerBuilder(){
    const contentDiv = document.getElementById('content');

    //Footer
    const footerDiv = document.createElement('div');
    footerDiv.className = 'footer';
    footerDiv.innerHTML = `All images from www.unsplash.com - Home Pizza image 
    by Kelvin T, Pepperoni image by The Nix Company, Four Cheese image by 
    Mahyar Motebassem, Spinach image by Saundarya Srinivasan, Alien Mask image
    by Stephen Leonardi, and Background Nebula image by Aldebran S.`;
    contentDiv.appendChild(footerDiv);
}


baseContentBuilder();
homeTabBuilder();
footerBuilder();
