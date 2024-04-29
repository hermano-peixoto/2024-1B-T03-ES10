
const axios = require('axios');

setInterval(async () => {
  try {
    const response = await axios.get('http://localhost:3000');
    console.log(response.data);
  } catch (error) {
    console.error('Error calling the API:', error.message);
  }
}, 1000);
