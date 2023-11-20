export function createContacts() {
    let contactBox = document.createElement('div');
    contactBox.classList.add('contact-box');

    let topPage = document.querySelector('.top-page');
    console.log(topPage);
    topPage.innerHTML = ''

    let map = document.createElement('div');
    map.classList.add('map');
    // map.alt = 'Pastaciutta Trattoria map location';

    topPage.appendChild(map);
}