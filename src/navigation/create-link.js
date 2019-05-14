function createLink(objectData) {
    const link = document.createElement('a');
    const image = document.createElement('img');
    image.src = './assets/objects/' + objectData.id + '.png';

    const searchParams = new URLSearchParams();
    searchParams.set('id', objectData.id);
    link.href = 'object.html?' + searchParams.toString();

    link.appendChild(image);

    return link;

}

export default createLink;