'use strict';

/* global $ */

function handleSubmit() {
  $('.js-breedsForm').submit(event => {
    event.preventDefault();
    const breed = $('.js-breedsInput').val();
    $('.js-dogImagesSection').html('');
    const breedName = breed.split(' ').join('/').toLowerCase();
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
    <img src="${data['message']}"></img>
    `
    )}


function handleEverything() {
  handleSubmit();
}

$(handleEverything());

