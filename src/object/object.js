import api from '../services/api.js';
import createYes from '../create-yes.js';
import createNo from '../create-no.js';

const title = document.getElementById('item-title');
const image = document.getElementById('item-image');
const description = document.getElementById('item-description');
const choiceParentNode = document.getElementById('choice-parent');


const searchParams = new URLSearchParams(window.location.search);
const itemId = searchParams.get('id');
const item = api.getItem(itemId);

title.textContent = item.title;
description.textContent = item.description;
image.src = './assets/objects/' + item.id + '.png';

const yes = createYes();
const no = createNo();

choiceParentNode.appendChild(no);
choiceParentNode.appendChild(yes);




