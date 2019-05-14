import api from '../services/api.js';
import createLink from './create-link.js';
import objectData from '../services/object-data.js';
import createVisitedIcon from '../object/create-visited-icon.js';


const avatarNode = document.getElementById('avatar');
const nameNode = document.getElementById('name');
const keptNode = document.getElementById('kept');
const discardedNode = document.getElementById('discarded');
const nav = document.getElementById('items');

const user = api.getUser();
console.log(user);
avatarNode.src = './assets/avatars/' + user.character + '.png';
nameNode.textContent = user.name;
keptNode.textContent = 'Kept: ' + user.keptArray.length;
discardedNode.textContent = 'Discarded: ' + user.discardedArray.length;

const objects = objectData;

for(let i = 0; i < objects.length; i++) {
    const object = objects[i];
    
    if(user.keptArray.includes(object.id) || user.discardedArray.includes(object.id)) {
        const visitedIcon = createVisitedIcon(object);
        console.log(visitedIcon);
        nav.appendChild(visitedIcon);
    } else {
        const link = createLink(object);
        nav.appendChild(link);
    
    }
}

