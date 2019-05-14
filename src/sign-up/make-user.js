function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        kept: this.keptArray.length,
        discarded: this.discardedArray.length,
        keptArray: [],
        discardedArray: []
    };
    return user;
}

export default makeUser;