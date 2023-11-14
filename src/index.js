import _ from 'lodash';
import './style.css';
import { menuTemplate, menuContent, createMenuItems } from './menu';
import loadHome from './home';

const mainContent = document.querySelector('#content');

//-------- HEADER START --------

//Remove these hard codes and call the functions that create the headers and top page

let header = document.createElement('header'); //Header of the page

    //Div for logo text
    let headerLogo = document.createElement('div');
    headerLogo.classList.add('header-logo');
    headerLogo.textContent = 'Pastaciutta Trattoria'

    let mainMenu = document.createElement('div'); //Div for buttons
    mainMenu.classList.add('main-menu');

        //Buttons for header
        let homeButton = document.createElement('button');
        homeButton.classList.add('homeBtn');

        let menuButton = document.createElement('button');
        menuButton.classList.add('menuBtn');

        let reserveButton = document.createElement('button');
        reserveButton.classList.add('reserveBtn');

        homeButton.textContent = 'Home';
        menuButton.textContent = 'Menu';
        reserveButton.textContent = 'Make Reservations';

//Append this portion to header
header.append(headerLogo);
header.append(mainMenu);
mainMenu.append(homeButton);
mainMenu.append(menuButton);
mainMenu.append(reserveButton);

//-------- HEADER END --------



//-------- TOP PAGE START --------

let topPage = document.createElement('div');
topPage.classList.add('top-page');
    let logo = document.createElement('div');
    logo.classList.add('logo');

    let slogan = document.createElement('p');
    slogan.textContent = 'Savor the Soul of Italy';

//Append this section to top-page
topPage.append(logo);
topPage.append(slogan);

//-------- TOP PAGE END --------

mainContent.append(header);
mainContent.append(topPage);

//Event Listeners for changing tabs
function changeTabs(button) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        if (button != this) {
            button.classList.toggle('active');
        }
    });

    //Add active class to buttons
    button.classList.toggle('active');
}

//Home button

homeButton.addEventListener('click', () => {
    console.log('I am clicked!');
    loadHome();
});

//Header Menu button
menuButton.addEventListener('click', () => {
    console.log('I am clicked!');
    menuTemplate(header, topPage, homeButton, menuButton, reserveButton, headerLogo);
    menuContent(topPage);
    createMenuItems();
});


//Create a function that initialize websites. Call the uncalled functions inside of initializeWebsite()
function initializeWebsite() {
    
}