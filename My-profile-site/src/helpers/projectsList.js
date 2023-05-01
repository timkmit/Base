import axios from 'axios';

let projects = [];

axios.get('http://127.0.0.1:8000/')
  .then(response => {
    projects = response.data;
  })
  .catch(error => {
    console.log(error);
  });

export { projects };