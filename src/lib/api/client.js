import axios from 'axios';

//const client = axios.create();
const client = axios.create({
  baseURL: 'https://port-0-server-17xco2nlsttmp5f.sel5.cloudtype.app/',
});

//client.defaults.headers.common['Authorization'] = 'Bearer (Token Information)';

export default client;
