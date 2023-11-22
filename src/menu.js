//START OF MENU
export function template(header, topPage, homeButton, menuButton, reserveButton, headerLogo) {
   //Parameters will be passed on index.js to target the respective DOM elements

   topPage.style.cssText = `
   margin: 0;
   background-color: #fefefe;
   height: calc(100vh - ${header.offsetHeight}px);
   display: block;
`;
   topPage.innerHTML = ''; //Removes content in top-page

   //Change color of header
   header.style.cssText = `
   border-bottom: 2px solid #F3A83C;
   `;
   // //Change font color of buttons
   // homeButton.style.color = `#000000`;
   // menuButton.style.color = `#000000`;
   // reserveButton.style.color = `#000000`;

   //Change font color of logo
   // headerLogo.style.color = '#000000';
}

export function menuContent(topPage) {
   //-------- MENU ITEMS START --------
   //Append all items on the menu page
   let menuContainer = document.createElement('div');
   menuContainer.classList.add('menu-container');

      let pastaItems = document.createElement('div');
         pastaItems.classList.add('pasta-items');
         pastaItems.innerHTML = `<h4>Pasta</h4>`;
         pastaItems.style.color = `#000000`;
         pastaItems.appendChild(
            createMenuItems("Spaghetti Carbonara", "$15.00")
         );
         pastaItems.appendChild(
            createMenuItems("Fettuccine Alfredo", "$20.00")
         );
         pastaItems.appendChild(
            createMenuItems("Linguine alle Vongole", "$25.00")
         );
         pastaItems.appendChild(
            createMenuItems("Lasagna", "$15.00")
         );
         pastaItems.appendChild(
            createMenuItems("Penne alla Arrabbiata", "$20.00")
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
   //Function that automatically append the items and its price implicitly

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