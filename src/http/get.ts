import axios from 'axios';

function getData() {
    return axios.get('http://localhost:8888/src/http/data.json');
}

export {
    getData,
}
