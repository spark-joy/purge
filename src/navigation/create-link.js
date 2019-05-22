import createModalContent from '../modal/create-modal-content.js';

const modal = document.getElementById('modal');
const modalWrapper = document.getElementById('model-wrapper');

function createLink(objectData) {
    const button = document.createElement('button');
    const image = document.createElement('img');
    
    image.src = './assets/objects/' + objectData.id + '.png';

    button.appendChild(image);
    button.classList.add('item-button');

    button.addEventListener('click', (event) => {
        event.preventDefault();

        modal.classList.add('modal-display');
        modal.classList.remove('hidden');
        modalWrapper.classList.remove('hidden');
        image.classList.add('visited');
        button.classList.remove('item-button');
        button.disabled = true;

        createModalContent(objectData.id);
    });

    return button;
    
}

export default createLink;
