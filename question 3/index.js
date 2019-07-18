'use strict';

/* global $ */

function handleSubmit() {
  $('.js-dogNumberForm').submit(event => {
    event.preventDefault();
    const number = $('.js-numberInput').val();
    $('.js-dogImagesSection').html('');
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
  for (let i = 0; i < data['message'].length; i++) {
    console.log(data['message'][i]);
    $('.js-dogImagesSection').append(`
    <img src="${data['message'][i]}"></img>
    `);
  }
}

function handleEverything() {
  handleSubmit();
}

$(handleEverything());

