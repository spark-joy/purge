const gif = document.getElementById('gif');
const easterEggMessage = document.getElementById('easter-egg-message');

function easterEgg(user) {
    for(let index = 0; index < user.items.length; index++) {
        const item = user.items[index];

        if(user.keptArray.includes(item)) {
            gif.classList.remove('no-egg');
            easterEggMessage.textContent = `Your character isn't pissed you tossed their shit!`;
            return;
        } 
    }
}

export default easterEgg;
