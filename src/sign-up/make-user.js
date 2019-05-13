function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        kept: 0,
        discarded: 0,
        keptArray: [],
        discardedArray: []
    };
    return user;
}

export default makeUser;