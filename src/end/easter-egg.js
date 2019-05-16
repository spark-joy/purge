function easterEgg(user) {
    for(let index = 0; index < user.items.length; index++) {
        const item = user.items[index];

        if(user.keptArray.includes(item)) {
            console.log('this matches');
        }
    }
}

export default easterEgg;