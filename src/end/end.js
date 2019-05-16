import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import displayIcons from './display-icons.js';
import scoreKept from './score-kept.js';
import keptMessages from './kept-array-messages.js';
import easterEgg from '../end/easter-egg.js';

loadProfile();
const user = api.getUser(); 

const discardedBox = document.getElementById('discarded-box');
const keptBox = document.getElementById('kept-box');

const keptItems = user.keptArray;
const discardedItems = user.discardedArray;


displayIcons(keptItems, keptBox);
displayIcons(discardedItems, discardedBox);

const resultMessage = document.getElementById('result-message');
const keptResult = scoreKept(user.keptArray.length); 

const results = keptMessages[keptResult];
resultMessage.textContent = user.name + ' ' + results;



easterEgg(user);




