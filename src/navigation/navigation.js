import api from '../services/api.js';
import createLink from './create-link.js';
import objectData from '../services/object-data.js';


const profile = document.getElementById('profile');
const avatarNode = document.getElementById('avatar');
const nameNode = document.getElementById('name');
const keptNode = document.getElementById('kept');
const discardedNode = document.getElementById('discarded');
const nav = document.getElementById('items');

const user = api.getUser();

avatarNode.src = './assets/avatars/' + user.character + '.png';
nameNode.textContent = user.name;
keptNode.textContent = 'Kept: ' + user.kept;
discardedNode.textContent = 'Discarded: ' + user.discarded;

const objects = objectData;

for(let i = 0; i < objects.length; i++) {
    const object = objects[i];
    const link = createLink(object);
    nav.appendChild(link);
}

