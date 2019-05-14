
import createModalContent from '../modal/create-modal-content.js';

const modal = document.getElementById('modal');

function createLink(objectData) {
    const link = document.createElement('a');
    const image = document.createElement('img');
    image.src = './assets/objects/' + objectData.id + '.png';


    const searchParams = new URLSearchParams();
    searchParams.set('id', objectData.id);
    // link.href = 'object.html?' + searchParams.toString();

    link.appendChild(image);

    image.addEventListener('click', (event) => {
        event.preventDefault();
        
        modal.classList.add('modal-display');
        
        createModalContent(objectData.id);
    });

    return link;

}

export default createLink;