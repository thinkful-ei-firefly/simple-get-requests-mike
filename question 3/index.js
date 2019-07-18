'use strict';

/* global $ */

function handleSubmit() {
  $('.js-breedsForm').submit(event => {
    event.preventDefault();
    const breedName = $('.js-breedsInput').val();
    $('.js-dogImagesSection').html('');
    console.log(breedName);
    getBreed(breedName);
  });
}


function getBreed(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(data => renderImages(data))
    .catch(error => console.log(error)
    );
}

function renderImages(data) {
  
    $('.js-dogImagesSection').append(`
    <img src="${data['message'][0]}"></img>
    `
    )}


function handleEverything() {
  handleSubmit();
}

$(handleEverything());

