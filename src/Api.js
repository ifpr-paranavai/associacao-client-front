import axios from 'axios';

export default axios.create({
  baseURL: `https://whispering-plains-13580.herokuapp.com`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});