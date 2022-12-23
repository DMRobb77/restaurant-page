import Pep from './pep.jpg';
import FourCheese from './four-cheese.jpg';
import Spinach from './spinach.jpg';

function menuTabBuilder(){
    const articleDiv = document.getElementById('article');

    const menuTab = document.createElement('div');
    menuTab.className = 'menu-tab menu';
    articleDiv.appendChild(menuTab);

    //Tab title

    const articleHeader = document.createElement('div');
    articleHeader.className = 'headerDiv menu';
    menuTab.appendChild(articleHeader);

    const articleHeaderText = document.createElement('h1');
    articleHeaderText.textContent = 'Our Menu';
    articleHeader.appendChild(articleHeaderText);

    //First menu item

    const item1Div = document.createElement('div');
    menuTab.appendChild(item1Div);

    const menuImage1 = document.createElement('img');
    menuImage1.className = 'menu-image';
    menuImage1.src = Pep;
    item1Div.appendChild(menuImage1);

    const menuItem1 = document.createElement('h2');
    menuItem1.textContent = 'Interplanetary Pep';
    item1Div.appendChild(menuItem1);

    //Second menu item

    const item2Div = document.createElement('div');
    menuTab.appendChild(item2Div);

    const menuImage2 = document.createElement('img');
    menuImage2.className = 'menu-image second';
    menuImage2.src = FourCheese;
    item2Div.appendChild(menuImage2);

    const menuItem2 = document.createElement('h2');
    menuItem2.textContent = 'Cheese Encounters of the Fourth Kind';
    item2Div.appendChild(menuItem2);

    //Third menu item

    const item3Div = document.createElement('div');
    menuTab.appendChild(item3Div);

    const menuImage3 = document.createElement('img');
    menuImage3.className = 'menu-image';
    menuImage3.src = Spinach;
    item3Div.appendChild(menuImage3);

    const menuItem3 = document.createElement('h2');
    menuItem3.textContent = 'Deep Space Spinach';
    item3Div.appendChild(menuItem3);

}

export default menuTabBuilder;