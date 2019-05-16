function avatarUser(user) {
    if(user.character === 'game') {
        user.items = ['controller', 'computer', 'floppy-disk', 'mom'];
        return user;
    }

    if(user.character === 'music') {
        user.items = ['guitar', 'cat', 'leather-jacket', 'pocket-knife', 'suitcase'];
        return user;
    }

    if(user.character === 'outdoor') {
        user.items = ['rope', 'backpack', 'cactus', 'grill', 'telescope'];
        return user;
    }

    if(user.character === 'sport') {
        user.items = ['football', 'shirt', 'trophy', 'pills'];
        return user;
    }

}

export default avatarUser;