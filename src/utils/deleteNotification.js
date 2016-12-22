import axios from 'axios';

function deleteNotification(notification) {
    return axios({
        url: '/api/deleteNotification',
        timeout: 20000,
        method: 'post',
        responseType: 'json',
        data: notification
    })
        .then(function (res) {
            return res.data;
        })
}

export default deleteNotification;