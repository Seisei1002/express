const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('https://api.abalin.net/namedays?month=1&day=1');
        console.log(response.data);
    } catch(error){
        console.log(error);
    }
}

getRequest();