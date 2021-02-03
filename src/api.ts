import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsInN1YiI6ImIyMGVkYmUyLTRkYzctNDkxNS1hYmM5LTg3YjdhNGI5NDJhZSIsImlhdCI6MTYxMTYyNTU5MCwiZXhwIjoxNjExNjI5MTkwfQ.ExhQ2Pogw1DWm-Sm1YaLmul3KDTKng_OMn8Ft8HzrCc',
  },
})
