import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
  headers: {
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsInN1YiI6ImIyMGVkYmUyLTRkYzctNDkxNS1hYmM5LTg3YjdhNGI5NDJhZSIsImlhdCI6MTYxNTM5OTE0MSwiZXhwIjoxNjE1NDAyNzQxfQ.YUaSZR4gVHHm-7WoVuVFyECPEWdyL34nMpq84-XgsAw',
  },
});

instance.interceptors.response.use(
  (response: any) => response,
  async (error: { response?: any; message?: any }) => {
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
