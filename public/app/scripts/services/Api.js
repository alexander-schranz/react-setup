import axios from 'axios';

class Api {
    static get(url) {
        return axios.get(url)
            .then(function(response) {
                return response.data;
            });
    }

    static post(url, payload) {
        return axios.post(url, payload)
            .then(function(response) {
                return response.data;
            });
    }

    static put(url, payload) {
        return axios.put(url, payload)
            .then(function(response) {
                return response.data;
            });
    }

    static delete(url, payload) {
        return axios.delete(url, payload)
            .then(function(response) {
                return response.data;
            });
    }
}

export default Api