import api from '../services/api.js';
import loadProfile from '../load-profile.js';

loadProfile();
const user = api.getUser(); 

const discardedBox = document.getElementById('discarded-box');
const keptBox = document.getElementById('kept-box');

const keptItems = user.keptArray;
const discardedItems = user.discardedArray;


function displayIcons(array, location) {
    for(let index = 0; index < array.length; index++) {
        const keptItem = array[index];
        const image = document.createElement('img');
        image.src = './assets/objects/' + keptItem + '.png';
        location.appendChild(image);
    }
}

displayIcons(keptItems, keptBox);
displayIcons(discardedItems, discardedBox);