import axios from 'axios';

const client = axios.create();

/*
client.default.baseURL = 'https://external-api-server.com/';

client.default.headers.common['Authorization'] = 'Bearer a1b2c3d4';

axios.interceper.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
*/

export default client;
