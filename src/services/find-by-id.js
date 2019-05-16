import objectData from './object-data.js';

function findById(id) {
    for(let i = 0; i < objectData.length; i++) {
        const object = objectData[i];
        if(object.id === id) {
            return object;
        }
    }
}

export default findById;
