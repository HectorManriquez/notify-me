import React, {Component} from 'react';
import getNotifications from '../../utils/getNotification';

class Home extends Component {
    constructor() {
        super();

        this.state = null;
    }

    componentDidMount() {
        getNotifications()
            .then(function (notifications) {
                this.setState(notifications);
            }.bind(this))
    }

    render() {
        if (!this.state) {
            return (
                <div>
                    <h4>No notifications, add one!</h4>
                </div>
            )
        } else {
            return (
                <div>
                    <h4 className='center-align'>Notifications</h4>
                    <div className='row'>
                        {this.state.notifications.map((notification, index) => {
                            return (
                                <form className="col s12" key={index}>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <label htmlFor="first_name">Pill Name</label>
                                            <input value={notification.pillName}
                                                   id="first_name" type="text"/>
                                        </div>
                                        <div className="input-field col s6">
                                            <label htmlFor="last_name">When to notify</label>
                                            <input value={notification.time}
                                                   id="time" type="text"/>
                                        </div>
                                        <div className="input-field col s6">
                                            <label htmlFor="last_name">When to notify</label>
                                            <input value={notification.email}
                                                   id="time" type="text"/>
                                        </div>
                                    </div>

                                </form>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
}

export default Home;