//import makeUser from '../sign-up/make-user.js';
import api from '../services/api.js';

const profile = document.getElementById('profile');
const avatarNode = document.getElementById('avatar');
const nameNode = document.getElementById('name');
const keptNode = document.getElementById('kept');
const discardedNode = document.getElementById('discarded');

const user = api.getUser();

avatarNode.src = './assets/avatars/' + user.character + '.png';
nameNode.textContent = user.name;
keptNode.textContent = 'Kept: ' + user.kept;
discardedNode.textContent = 'Discarded: ' + user.discarded;