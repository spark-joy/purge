import api from '../services/api.js';
import loadProfile from '../load-profile.js';

function createModalContent(id) {
    const title = document.getElementById('item-title');
    const image = document.getElementById('item-image');
    const description = document.getElementById('item-description');
    const formNode = document.getElementById('form');

    const item = api.getItem(id);

    title.textContent = item.title;
    description.textContent = item.description;
    image.src = './assets/objects/' + item.id + '.png';

    const user = api.getUser();

    const modal = document.getElementById('modal');

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
}

export default createModalContent;