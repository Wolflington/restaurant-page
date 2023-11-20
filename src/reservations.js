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

    //Reservation Form

    let reservationForm = document.createElement('form');
    reservationForm.id = 'reservationForm';

    // Create date input
    let dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date:';
    let dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'date';
    dateInput.required = true;
    dateLabel.appendChild(dateInput);

    // Create time input
    let timeLabel = document.createElement('label');
    timeLabel.textContent = 'Time:';
    let timeInput = document.createElement('input');
    timeInput.type = 'time';
    timeInput.name = 'time';
    timeInput.required = true;
    timeLabel.appendChild(timeInput);

    // Create number of guests input
    let guestsLabel = document.createElement('label');
    guestsLabel.textContent = 'Number of Guests:';
    let guestsInput = document.createElement('input');
    guestsInput.type = 'number';
    guestsInput.name = 'guests';
    guestsInput.min = '1';
    guestsInput.required = true;
    guestsLabel.appendChild(guestsInput);

    // Create name input
    let nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.required = true;
    nameLabel.appendChild(nameInput);

    // Create email input
    let emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    let emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    emailLabel.appendChild(emailInput);

    // Create submit button
    let submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Submit Reservation';
    submitButton.addEventListener('click',  () => {
        console.log('I am clicked from submit button!');
    });

    // Append form elements to the form
    reservationForm.appendChild(dateLabel);
    reservationForm.appendChild(timeLabel);
    reservationForm.appendChild(guestsLabel);
    reservationForm.appendChild(nameLabel);
    reservationForm.appendChild(emailLabel);
    reservationForm.appendChild(submitButton);

    let contactNum = document.createElement('div');
    contactNum.innerHTML = `(02) 789-9999`

    // topPage.appendChild(map);
    topPage.appendChild(contactBox);
    contactBox.appendChild(p);
    contactBox.appendChild(contactContainer);
    contactContainer.appendChild(reservationForm);
    // contactContainer.appendChild(contactNum);
}