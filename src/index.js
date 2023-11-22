import _ from 'lodash';
import './style.css';
import bgPic from './assets/dim-nerfee-mirandilla-o1EDsUFmuXQ-unsplash.png';
import logoPic from './assets/white-pastaciutta-trattoria-high-resolution-logo-transparent.png';
import { template, menuContent, createMenuItems } from './menu';
import loadHome from './home';
import { createHeader, createTopPage } from './home';
import { createContacts } from './reservations';

const mainContent = document.querySelector('#content');

//-------- HEADER START --------


//Remove these global variables and call the functions that create the headers and top page

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
    let logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = logoPic;

    let slogan = document.createElement('p');
    slogan.classList.add('slogan');
    slogan.textContent = 'Savor the Soul of Italy';
//Append this section to top-page
topPage.append(logo);
topPage.append(slogan);


//-------- TOP PAGE END --------

//Event Listeners for changing tabs
function changeTabs(currentButton) {
    console.log('changeTabs called with:', currentButton);
    const mainMenu = document.querySelector('.main-menu');
    const buttons = mainMenu.querySelectorAll('button');
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });

    if (currentButton) {
        currentButton.classList.add('active');
        console.log('Added active class to:', currentButton);
    }
}

//Create a function that initialize websites. Call the uncalled functions inside of initializeWebsite()
function initializeWebsite() {
    //Appends the content
    mainContent.append(header);
    mainContent.append(topPage);

    changeTabs(homeButton) //Changes the active button upon initialization

    //Event listeners for tab-switching

    //Home button
    homeButton.addEventListener('click', () => {
        console.log('I am clicked from home button!');
        changeTabs(homeButton);
        // loadHome();
        createHeader();
        createTopPage();
    });
    //Menu button
    menuButton.addEventListener('click', () => {
        console.log('I am clicked from menu button!');
        changeTabs(menuButton);
        template(header, topPage, homeButton, menuButton, reserveButton, headerLogo);
        menuContent(topPage);
        createMenuItems();
    });
    //Reserve Button
    reserveButton.addEventListener('click', () => {
        console.log('I am clicked from reserve button!');
        changeTabs(reserveButton);
        template(header, topPage, homeButton, menuButton, reserveButton, headerLogo);
        createContacts();
    });
}

function updateContent() {

}

initializeWebsite();