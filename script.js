'use strict';

/* global $ */

function handleSubmit() {
  $('.randomDogForm').submit(event => {
    event.preventDefault();
    const number = $('.numberInput').val();
    console.log(number);
  });
}


function handleEverything() {
  handleSubmit();
}

$(handleEverything());