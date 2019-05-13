import objectData from '../services/object-data.js';
import api from '../services/api.js';

const title = document.getElementById('item-title');
const image = document.getElementById('item-image');
const description = document.getElementById('item-description');



const searchParams = new URLSearchParams(window.location.search);
const itemId = searchParams.get('id');
const item = api.getItem(itemId);

title.textContent = item.title;
description.textContent = item.description;
image.src = './assets/objects/' + item.id + '.png';