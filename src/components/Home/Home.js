import React, {Component} from 'react';
import getNotifications from '../../utils/getNotification';
import Notification from '../Notification/Notification';

class Home extends Component {
    constructor() {
        super();

        this.state = null;
    }

    componentWillMount() {
        getNotifications()
            .then((notifications) => {
                this.setState(notifications);
            })
    }

    render() {
        if (!this.state) {
            return <h4>No notifications, add one!</h4>
        } else {
            return (
                <div>
                    <h4 className='center-align'>Notifications</h4>
                    <div className='row'>
                        {this.state.notifications.map((notification, index) => {
                            return (
                                <Notification key={index}
                                              pillName={notification.pillName}
                                              time={notification.time}
                                              email={notification.email}/>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
}

export default Home;