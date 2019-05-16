function createVisitedIcon(object) {
    const image = document.createElement('img');
    image.src = './assets/objects/' + object.id + '.png';
    image.classList.add('visited');
    return image;
}

export default createVisitedIcon;
