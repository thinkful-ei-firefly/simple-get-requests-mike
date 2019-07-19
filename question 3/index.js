'use strict';

/* global $ */

function handleSubmit() {
  $('.js-breedsForm').submit(event => {
    event.preventDefault();
    const breed = $('.js-breedsInput').val();
    $('.js-dogImagesSection').html('');
    $('.js-breedsInput').val('');
    const breedName = breed.split(' ').join('/').toLowerCase();
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
  $('.js-dogImagesSection').html('<h2>Look at this Breed!</h2>')
  if (data.status === 'error'){
    $('.js-dogImagesSection').html(`
    <h2>Error!</h2> 
    <p>${data.message}</p>
    <img src = 'https://yourdogfoodstore.com/wp-content/uploads/2016/12/best-pet-supplies-home-sweet-home-dog-bed.jpg'
    alt = 'empty dog cage' >
    `)
    
  } else {
    $('.js-dogImagesSection').append(`
    <img src="${data['message']}" alt="dog image" ></img>
    `
    )}
    
    }


function handleEverything() {
  handleSubmit();
}

$(handleEverything());

