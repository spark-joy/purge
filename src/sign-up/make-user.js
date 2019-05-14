function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        keptArray: [],
        discardedArray: []
    };
    return user;
}

export default makeUser;