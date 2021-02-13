import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsInN1YiI6ImIyMGVkYmUyLTRkYzctNDkxNS1hYmM5LTg3YjdhNGI5NDJhZSIsImlhdCI6MTYxMjMxODIyMywiZXhwIjoxNjEyMzIxODIzfQ.Eg4gg8xB1x2w4vQ1kCv2X9AZ_ktsFmTU5cXe7Vcz_2U',
  },
});
