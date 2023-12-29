import axios from 'axios';

const client = axios.create();
//const client = axios.create({
//  baseURL: 'https://your-wep-server.app/',
//});

//client.defaults.headers.common['Authorization'] = 'Bearer (Token Information)';

export default client;
