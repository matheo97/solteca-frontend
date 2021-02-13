import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
  headers: {
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsInN1YiI6ImIyMGVkYmUyLTRkYzctNDkxNS1hYmM5LTg3YjdhNGI5NDJhZSIsImlhdCI6MTYxMzI1NTc3MywiZXhwIjoxNjEzMjU5MzczfQ.LBXXrFOytjRONTm7ywM59OO4vDJjHVuYuYMvfxSPst8',
  },
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    let { message } = error;
    if (error.response) {
      if (error.response.data) {
        message = error.response.data.error;
      } else {
        message = 'Something went wrong.';
      }
    }
    return Promise.reject(message);
  }
);

export default instance;
