import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import displayIcons from './display-icons.js';

loadProfile();
const user = api.getUser(); 

const discardedBox = document.getElementById('discarded-box');
const keptBox = document.getElementById('kept-box');

const keptItems = user.keptArray;
const discardedItems = user.discardedArray;


displayIcons(keptItems, keptBox);
displayIcons(discardedItems, discardedBox);