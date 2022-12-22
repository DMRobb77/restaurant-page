import Pep from './pep.jpg';
import FourCheese from './four-cheese.jpg';
import Spinach from './spinach.jpg';

function menuTabBuilder(){
    const articleDiv = document.getElementById('article');

    //Body

    const menuTab = document.createElement('div');
    menuTab.className = 'menu-tab menu';
    articleDiv.appendChild(menuTab);

    const articleHeader = document.createElement('div');
    articleHeader.className = 'headerDiv menu';
    menuTab.appendChild(articleHeader);

    const articleHeaderText = document.createElement('h1');
    articleHeaderText.textContent = 'Our Menu';
    articleHeader.appendChild(articleHeaderText);

    const menuImage1 = document.createElement('img');
    menuImage1.src = Pep;
    menuImage1.width = 600;
    menuTab.appendChild(menuImage1);

    const menuItem1 = document.createElement('h2');
    menuItem1.textContent = 'Interplanetary Pep';
    menuTab.appendChild(menuItem1);

    const menuImage2 = document.createElement('img');
    menuImage2.src = FourCheese;
    menuImage2.width = 600;
    menuTab.appendChild(menuImage2);

    const menuItem2 = document.createElement('h2');
    menuItem2.textContent = 'Cheese Encounters of the Fourth Kind';
    menuTab.appendChild(menuItem2);

    const menuImage3 = document.createElement('img');
    menuImage3.src = Spinach;
    menuImage3.width = 600;
    menuTab.appendChild(menuImage3);

    const menuItem3 = document.createElement('h2');
    menuItem3.textContent = 'Deep Space Spinach';
    menuTab.appendChild(menuItem3);

}

export default menuTabBuilder;