import findById from './find-by-id.js';

const api = {
    storage: localStorage,
    saveUser(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        const user = JSON.parse(json);
        return user;
    },
    getItem(id) {
        return findById(id);
    }
};

export default api;

