
import createModalContent from '../modal/create-modal-content.js';

const modal = document.getElementById('modal');

function createLink(objectData) {
    const button = document.createElement('button');
    const image = document.createElement('img');
    image.src = './assets/objects/' + objectData.id + '.png';

    const searchParams = new URLSearchParams();
    searchParams.set('id', objectData.id);

    button.appendChild(image);

    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        modal.classList.add('modal-display');
        modal.classList.remove('hidden');
        image.classList.add('visited');
        button.disabled = true;
        
        createModalContent(objectData.id);
    });

    return button;
    
}

export default createLink;