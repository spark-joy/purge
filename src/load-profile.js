import api from './services/api.js';

function loadProfile() {
    const avatarNode = document.getElementById('avatar');
    const nameNode = document.getElementById('name');
    const keptNode = document.getElementById('kept');
    const discardedNode = document.getElementById('discarded');
    
    const user = api.getUser();
    
    avatarNode.src = './assets/avatars/' + user.character + '.png';
    nameNode.textContent = user.name;
    keptNode.textContent = 'Kept: ' + user.keptArray.length;
    discardedNode.textContent = 'Discarded: ' + user.discardedArray.length;
}

export default loadProfile;