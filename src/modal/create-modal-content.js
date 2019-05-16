import api from '../services/api.js';
import loadProfile from '../load-profile.js';

let item;
const user = api.getUser();
const formNode = document.getElementById('form');
const title = document.getElementById('item-title');
const image = document.getElementById('item-image');
const description = document.getElementById('item-description');
const modal = document.getElementById('modal');

const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

function createModalContent(id) {
    item = api.getItem(id);

    yesButton.checked = false;
    yesButton.required = true;
    noButton.checked = false;
    noButton.required = true;

    title.textContent = item.title;
    description.textContent = item.description;
    image.src = './assets/objects/' + item.id + '.png';
}

formNode.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(formNode);
    const value = formData.get('choice-button');
    
    if(value === 'yes') {
        user.keptArray.push(item.id); 
    } else {
        user.discardedArray.push(item.id);
    }
    api.saveUser(user);

    modal.classList.add('hidden');
    
    loadProfile();

});

export default createModalContent;
