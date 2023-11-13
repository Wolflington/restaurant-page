const mainContent = document.querySelector('#content');
let topPage = document.createElement('div');
topPage.classList.add('top-page');

//-------- HEADER START --------

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


//START OF MENU

export function menuTemplate() {
    //Checks whether if active class is in the DOM element 
    const existingMenu = document.querySelector('.active');
    if (existingMenu) {
        existingMenu.classList.toggle('active');
    }
    
    topPage.classList.toggle('active');
    header.classList.toggle('active');
    topPage.style.cssText = `margin: 0;
    background-color: #fefefe;
    height: 100vh;
    display: block;
    `;
    topPage.innerHTML = ''; //Removes content in top-page

    //Change color of header
    header.style.cssText = `background-color: #fefefe;
    border-bottom: 2px solid #F3A83C;
    `;
    //Change font color of buttons
    homeButton.style.color = `#000000`;
    menuButton.style.color = `#000000`;
    reserveButton.style.color = `#000000`;

    //Change font color of logo
    headerLogo.style.color = '#000000';
}

export function menuContent() {
    //-------- MENU ITEMS START --------
    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

        let pastaItems = document.createElement('div');
     pastaItems.classList.add('pasta-items');
     pastaItems.innerHTML = `<h4>Pasta</h4>`;
     pastaItems.style.color = `#000000`;
     pastaItems.appendChild(
        createMenuItems("Spaghetti Carbonara", "15.00")
     );
     pastaItems.appendChild(
        createMenuItems("Fettuccine Alfredo", "20.00")
     );
     pastaItems.appendChild(
        createMenuItems("Linguine alle Vongole", "25.00")
     );
     pastaItems.appendChild(
        createMenuItems("Lasagna", "15.00")
     );
     pastaItems.appendChild(
        createMenuItems("Penne alla Arrabbiata", "20.00")
     );

        let pizzaItems = document.createElement('div');
     pizzaItems.classList.add('pizza-items');
     pizzaItems.innerHTML = `<h4>Pizza</h4>`
     pizzaItems.style.color = `#000000`;
     pizzaItems.append(
        createMenuItems("Margherita Pizza", "$15.00")
     );
     pizzaItems.append(
        createMenuItems("Quattro Formaggi Pizza", "$18.00")
     );
     pizzaItems.append(
        createMenuItems("Pizza Capricciosa", "$20.00")
     );
     pizzaItems.append(
        createMenuItems("Calzone", "$12.00")
     );
     pizzaItems.append(
        createMenuItems("Pizza Marinara", "$15.00")
     );

        let drinkItems = document.createElement('div');
     drinkItems.classList.add('drink-items');
     drinkItems.innerHTML = `<h4>Drinks</h4>`;
     drinkItems.style.color = `#000000`;
     drinkItems.append(
      createMenuItems("Coca-Cola", "$2.50")
     );
     drinkItems.append(
      createMenuItems("Sprite", "$2.50")
     );
     drinkItems.append(
      createMenuItems("Sparkling Water", "$2.50")
     );
     drinkItems.append(
      createMenuItems("Apple Juice", "$2.50")
     );
          drinkItems.append(
      createMenuItems("Peroni Beer", "$5.00")
     );

    topPage.append(menuContainer);
    menuContainer.append(pastaItems);
    menuContainer.append(pizzaItems);
    menuContainer.append(drinkItems);
}

export function createMenuItems(name, price) {
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");
  
    const foodName = document.createElement("p");
    foodName.textContent = name;
  
    const foodPrice = document.createElement("p");
    foodPrice.textContent = price;

    menuItems.appendChild(foodName);
    menuItems.appendChild(foodPrice);
  
    return menuItems;
  }