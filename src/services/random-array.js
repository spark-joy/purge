function randomArray(array) {
    let randomItems = [];

    do{
        let number = Math.floor(Math.random() * array.length);
        const object = array[number];
        
        if(!randomItems.includes(object)) {
            randomItems.push(object);
        }
    }
    while(randomItems.length < 6);

    return randomItems;
}

export default randomArray;
