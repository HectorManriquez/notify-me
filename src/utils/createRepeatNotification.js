import axios from 'axios';

function createRepeatNotification(notification) {
    return axios({
        url: '/api/createRepeatNotification',
        timeout: 20000,
        method: 'post',
        responseType: 'json',
        data: notification
    })
        .then(function (res) {
            return res.data;
        })
}

export default createRepeatNotification;