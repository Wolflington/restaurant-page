import phoneIcon from './assets/phone.png';
import timeIcon from './assets/time.png';
import pinIcon from './assets/pin.png';

export function createContacts() {
    let topPage = document.querySelector('.top-page');
    topPage.innerHTML = ''

    let contactBox = document.createElement('div');
    contactBox.classList.add('contact-box');

    let p = document.createElement('p');
    p.textContent = 'Book a Table';

    //Contact container
    let contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    // Create form element
    let reservationForm = document.createElement('form');
    reservationForm.id = 'reservationForm';

    // Define form elements data
    const formElements = [
        { label: 'Date:', type: 'date', name: 'date', required: true },
        { label: 'Time:', type: 'time', name: 'time', required: true },
        { label: 'Number of Guests:', type: 'number', name: 'guests', min: '1', required: true },
        { label: 'Name:', type: 'text', name: 'name', required: true },
        { label: 'Email:', type: 'email', name: 'email', required: true }
    ];

    // Loop through form elements data and create corresponding HTML elements
    formElements.forEach(element => {
        let container = document.createElement('div');

        let label = document.createElement('label');
        label.textContent = element.label;

        let input = document.createElement('input');
        input.type = element.type;
        input.name = element.name;
        if (element.hasOwnProperty('min')) {
            input.min = element.min;
        }
        if (element.hasOwnProperty('required')) {
            input.required = element.required;
        }

        container.appendChild(label);
        container.appendChild(input);

        // Append the container to the form
        reservationForm.appendChild(container);
    });

    // Create submit button
    let submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submitBtn');
    submitButton.type = 'button';
    submitButton.textContent = 'Reserve';
    submitButton.addEventListener('click', () => {
        console.log('I am clicked from submit button!');
    });

    reservationForm.appendChild(submitButton);

    //Details section
    let details = document.createElement('div');
    details.classList.add('details');
    
    let contactNum = document.createElement('div');
    contactNum.classList.add('contact-num');
        let contactIcon = document.createElement('img');
        contactIcon.src = phoneIcon;

        let contactInfo = document.createElement('p');
        contactInfo.textContent = '(02) 789-9999';

        contactNum.append(contactIcon);
        contactNum.append(contactInfo);

    let location = document.createElement('div');
    location.classList.add('location');
        let locationIcon = document.createElement('img');
        locationIcon.src = pinIcon;

        let locationInfo = document.createElement('p');
        locationInfo.textContent = '123 Via Sapore del Sole, Quartiere BuonGusto, MI';

        location.append(locationIcon);
        location.append(locationInfo);

    let schedule = document.createElement('div');
    schedule.classList.add('schedule');
        let scheduleIcon = document.createElement('img');
        scheduleIcon.src = timeIcon;

        let scheduleInfo = document.createElement('p');
        scheduleInfo.textContent = 'Monday to Sunday: 10:00 AM to 9:00 PM';

        schedule.append(scheduleIcon);
        schedule.append(scheduleInfo);
    
    let comments = document.createElement('div');
    comments.classList.add('comments');
        let commentMsg = document.createElement('p');
        commentMsg.textContent = "Message us!";

        let commentBox = document.createElement('textarea');
        commentBox.rows = 11;
        commentBox.cols = 100;

        comments.append(commentMsg);
        comments.append(commentBox);

    //Append elements into website
    topPage.appendChild(contactBox);
    contactBox.appendChild(p);
    contactBox.appendChild(contactContainer);
    contactContainer.appendChild(reservationForm);
    contactContainer.appendChild(details);
    details.appendChild(contactNum);
    details.appendChild(location);
    details.appendChild(schedule);
    details.appendChild(comments);
}