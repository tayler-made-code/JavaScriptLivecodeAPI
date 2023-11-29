// Tell the javascript what the button and input are
const searchButton = document.querySelector('#mtgCardLookup');
const inputElement = document.querySelector('#mtgCardName');
const yeezyButton = document.querySelector('#yeezyButton');

// Add an event listener to the button
searchButton.addEventListener('click', function() {
    // Get the card name from the input element
    let cardName = inputElement.value;

    // Clear the container div
    document.querySelector('.container').innerHTML = '';

    // Fetch the card data from the Scryfall API
    fetch(`https://api.scryfall.com/cards/search?q=${cardName}&unique=prints`)
    .then(response => response.json())
    .then(data => {
        data.data.forEach(print => {
            const imageUrl = print.image_uris.normal;
            console.log(imageUrl); // Is this thing on?  *tap tap tap - feedback squeal*
        
            // Create a new div element for the image
            let imgDiv = document.createElement('div');
            imgDiv.className = 'col-2 m-3';

            // Create a new img element
            let img = document.createElement('img');

            // Add the Bootstrap classes to the img element
            img.className = 'img-fluid';

            // Set the src attribute of the img element to the image URL
            img.src = imageUrl;

            // Append the img element to the imgDiv
            imgDiv.appendChild(img);

            // Append the imgDiv to the container
            document.querySelector('.container').appendChild(imgDiv);
        });
    })
  .catch(error => console.error('Haha your code sucks:', error));
});


yeezyButton.addEventListener('click', function() {
    // Clear the Wrapper div
    document.querySelector('.yeezyisms').innerHTML = '';
    // Fetch the yeezy quote
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => {
        // Create a new div element for the quote
        console.log(data);

        let h1 = document.createElement('h1');
        h1.className = 'text-center text-light mt-4';
        h1.textContent = data.quote;

        let h3 = document.createElement('h3');
        h3.className = 'text-center text-light mt-4';
        h3.textContent = '- Kanye West';

        // Append the quote and author to the wrapper
        document.querySelector('.yeezyisms').appendChild(h1);
        document.querySelector('.yeezyisms').appendChild(h3);
    })

    .catch(error => console.error('Haha your code sucks:', error));
});