function displayIcons(array, location) {
    for(let index = 0; index < array.length; index++) {
        const keptItem = array[index];
        const image = document.createElement('img');
        image.src = './assets/objects/' + keptItem + '.png';
        location.appendChild(image);
    }
}

export default displayIcons;
