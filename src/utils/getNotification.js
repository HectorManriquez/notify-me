import axios from 'axios';

function getNotifications() {
    return axios({
        url: '/api/getNotifications',
        timeout: 20000,
        method: 'get',
        responseType: 'json'
    })
        .then(function (res) {
            return res.data;
        })
}

export default getNotifications;