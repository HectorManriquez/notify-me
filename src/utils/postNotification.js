import axios from 'axios';

function postNotification(notification) {
    return axios({
        url: '/api/createNotification',
        timeout: 20000,
        method: 'post',
        responseType: 'json',
        data: notification
    })
        .then(function (res) {
            return res.data;
        })
}

export default postNotification();