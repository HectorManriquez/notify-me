import axios from 'axios';

function createScheduleNotification(notification) {
    return axios({
        url: '/api/createScheduleNotification',
        timeout: 20000,
        method: 'post',
        responseType: 'json',
        data: notification
    })
        .then(function (res) {
            return res.data;
        })
}

export default createScheduleNotification;