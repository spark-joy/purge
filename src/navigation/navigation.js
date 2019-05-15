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

setInterval(function(){
    const user = api.getUser();
    const combined = [...user.keptArray, ...user.discardedArray];
    // console.log(user);
    if(combined.length === objects.length) {
        console.log('hi');
        clearInterval();
        window.location = './end.html';
    }
}, 1000);





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


// var timeLeft = 10;

// var countdownTimer = setInterval(function() {
//     const countdown = document.getElementById('timer');
//     timeLeft -= 1;

//     if(timeLeft <= 0) {
//         clearInterval(countdownTimer);
//     }
// }, 1000);
