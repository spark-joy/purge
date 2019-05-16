import makeUser from './make-user.js';
import api from '../services/api.js';
import avatarUser from '../end/avatar-user.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);
    const updatedUser = avatarUser(user);

    api.saveUser(updatedUser);

    window.location = 'navigation.html';

});
