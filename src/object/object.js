import objectData from '../services/object-data.js';

const title = document.getElementById('item-title');
const image = document.getElementById('item-image');
const description = document.getElementById('item-description');

title.textContent = objectData.title;
image.src = './assets/objects/' + objectData.id + '.png';
description.textContent = objectData.description;