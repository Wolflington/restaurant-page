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

    // Append the submit button to the form
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