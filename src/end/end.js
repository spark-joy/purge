import api from '../services/api.js';
import loadProfile from '../load-profile.js';

const profile = loadProfile();
const user = api.getUser(); 