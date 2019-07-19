'use strict';

/* global $ */

function handleSubmit() {
  $('.js-dogNumberForm').submit(event => {
    event.preventDefault();
    const number = $('.js-numberInput').val();
    $('.js-dogImagesSection').html('');
    $('.js-numberInput').val('');
    console.log(number);
    getDogImage(number);
  });
}


function getDogImage(number) {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(data => renderImages(data))
    .catch(error => console.log(error)
    );
}

function renderImages(data) {
  
    $('.js-dogImagesSection').html('<h2>Look at this Dog!</h2>')
    if (data.status === 'error') {
      $('.js-dogImagesSection').html(`
    <h2>Error!</h2> 
    <p>${data.message}</p>
    <img src = 'https://yourdogfoodstore.com/wp-content/uploads/2016/12/best-pet-supplies-home-sweet-home-dog-bed.jpg'
    alt = 'empty dog cage' >
    `)

    } else {
      for (let i = 0; i < data['message'].length; i++) {
        console.log(data['message'][i]);
      $('.js-dogImagesSection').append(`<img src="${data['message'][i]}" alt="dog image" ></img>`
      )
    }
  }
}

function handleEverything() {
  handleSubmit();
}

$(handleEverything());

