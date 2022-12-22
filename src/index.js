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
    homeLink.textContent = 'Home';
    homeTab.appendChild(homeLink);

    homeLink.addEventListener('click', function(){
        if (currentTab != 'home'){
            tabRefresher(currentTab);
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
    footerDiv.innerHTML = 'footer';
    contentDiv.appendChild(footerDiv);
}


baseContentBuilder();
homeTabBuilder();
footerBuilder();
