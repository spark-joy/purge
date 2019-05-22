import api from '../services/api.js';
import createLink from './create-link.js';
import objectData from '../services/object-data.js';
import createVisitedIcon from '../object/create-visited-icon.js';
import loadProfile from '../load-profile.js';
import randomArray from '../services/random-array.js';

loadProfile();

const nav = document.getElementById('items');
const objects = randomArray(objectData);
const user = api.getUser();

const intervalId = setInterval(function(){
    const user = api.getUser();
    // you don't need a combined array, just a combined length
    const combinedLength = user.keptArray.length + user.discardedArray.length;

    if(combinedLength === objects.length) {
        // Technically not necessary since navigating away, 
        // but should have id token of the interval:
        clearInterval(intervalId);
        window.location = './end.html';
    }
}, 1000);

for(let i = 0; i < objects.length; i++) {
    const object = objects[i];

    // limit conditionality to the thing that varies
    let objectNav = null;
    if(user.keptArray.includes(object.id) || user.discardedArray.includes(object.id)) {
        objectNav = createVisitedIcon(object);
    } else {
        objectNav = createLink(object);
    }

    nav.appendChild(objectNav);
}
