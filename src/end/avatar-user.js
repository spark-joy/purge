function avatarUser(user) {
    if(user.character === 'game') {
        user.items = ['controller', 'computer'];
        return user;
    }

    if(user.character === 'music') {
        user.items = ['guitar', 'cat'];
        return user;
    }

    if(user.character === 'outdoor') {
        user.items = ['rope', 'backpack'];
        return user;
    }

    if(user.character === 'sport') {
        user.items = ['football', 'shirt'];
        return user;
    }

}

export default avatarUser;