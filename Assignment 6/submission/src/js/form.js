/*
 * WEB222 – Assignment 06
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Kiarash Kia
 *      Student ID: 108688235
 *      Date:       12/08/2023
 */

function addSongInput() {
  const newSongButton = document.querySelector('#requestButton');
  if (newSongButton) {
    newSongButton.addEventListener('click', (e) => {
      const fieldset = document.querySelector('#songs-list');
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Heartless';

      fieldset.appendChild(input);
    });
  } else {
    console.log('newSongButton element not found');
  }
}

function onLoad() {
  console.log('loaded');
  addSongInput();
}

window.addEventListener('load', onLoad);
