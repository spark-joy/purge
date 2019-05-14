import api from '../services/api.js';
import createLink from './create-link.js';
import objectData from '../services/object-data.js';
import createVisitedIcon from '../object/create-visited-icon.js';
import loadProfile from '../load-profile.js';


loadProfile();

const nav = document.getElementById('items');

const user = api.getUser();

const combined = [...user.keptArray, ...user.discardedArray];

const objects = objectData;

if(combined.length === objects.length) {
    window.location = './end.html';
}

for(let i = 0; i < objects.length; i++) {
    const object = objects[i];
    
    if(user.keptArray.includes(object.id) || user.discardedArray.includes(object.id)) {
        const visitedIcon = createVisitedIcon(object);
        
        nav.appendChild(visitedIcon);
    } else {
        const link = createLink(object);
        nav.appendChild(link);
    }
}

