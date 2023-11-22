import bgPic from './assets/dim-nerfee-mirandilla-o1EDsUFmuXQ-unsplash.png';
import logoPic from './assets/white-pastaciutta-trattoria-high-resolution-logo-transparent.png';

export function createHeader(header) {
    //-------- HEADER START --------

    header = document.querySelector('header');
    header.style.cssText = `
        height: 8rem;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 3.5rem;
        background-color: #35323269;
    `;

}

export function createTopPage() {
    //-------- TOP PAGE START --------

    let mainContent = document.querySelector('#content');

    let topPage = document.querySelector('.top-page');
    topPage.innerHTML = '';

    topPage.style.cssText = `
    background: url(./assets/dim-nerfee-mirandilla-o1EDsUFmuXQ-unsplash.png);
    `;
        let logo = document.createElement('img');
        logo.classList.add('logo');
        logo.src = logoPic;

        let slogan = document.createElement('p');
        slogan.textContent = 'Savor the Soul of Italy';

    //Append this section to top-page
    topPage.append(logo);
    topPage.append(slogan);

    //-------- TOP PAGE END --------
    return topPage;
}

function loadHome() {
    console.log('I am clicked from home.js module!');
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = '';
    mainContent.appendChild(createHeader());
    mainContent.appendChild(createTopPage());

    return mainContent;
}

//Problem: it restarts the whole webpage and the event listener is unintentionally not working anymore

export default loadHome;