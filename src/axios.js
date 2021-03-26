 import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://marketplace-52be8-default-rtdb.firebaseio.com'
});

export default instance;