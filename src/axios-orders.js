import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-hooks-update.firebaseio.com'
});

export default instance;