import axios from 'axios';

export default axios.create({
  // baseURL: `https://whispering-plains-13580.herokuapp.com`,
  baseURL: `http://localhost:4000`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});