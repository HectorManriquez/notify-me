import axios from 'axios';

function updateNotification(notification) {
    return axios({
        url: '/api/updateNotification',
        timeout: 20000,
        method: 'post',
        responseType: 'json',
        data: notification
    })
        .then(function (res) {
            return res.data;
        })
}

export default updateNotification;