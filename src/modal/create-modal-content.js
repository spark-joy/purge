import api from '../services/api.js';
import createYes from '../create-yes.js';
import createNo from '../create-no.js';

function createModalContent(id) {
    const title = document.getElementById('item-title');
    const image = document.getElementById('item-image');
    const description = document.getElementById('item-description');
    const choiceParentNode = document.getElementById('choice-parent');
    const formNode = document.getElementById('form');

    const item = api.getItem(id);

    title.textContent = item.title;
    description.textContent = item.description;
    image.src = './assets/objects/' + item.id + '.png';

    const yes = createYes();
    const no = createNo();

    choiceParentNode.appendChild(no);
    choiceParentNode.appendChild(yes);

    const user = api.getUser();

    formNode.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(formNode);
        const value = formData.get('choice-button');
        
        window.location = './navigation.html';
        
        if(value === 'yes') {
            user.keptArray.push(item.id); 
        } else {
            user.discardedArray.push(item.id);
        }
        api.saveUser(user);
    });
}

export default createModalContent;