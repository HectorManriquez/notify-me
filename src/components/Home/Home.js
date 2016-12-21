import React, {Component} from 'react';
import getNotifications from '../../utils/getNotification';

class Home extends Component {
    constructor() {
        super();

        this.state = null;
    }

    componentDidMount() {
        /*
        getNotifications()
            .then(function (docs) {
                this.setState({
                    users: docs
                });
            }.bind(this))
            */
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
                    {/*
                    <div className='row'>
                        {this.state.users.map((user, index) => {
                            return (
                                <div className='col s12 m6 l6' key={index}>
                                    <h5 className='header flow-text'>
                                        {user.firstName && user.lastName ? user.firstName + ' ' + user.lastName : user.email}
                                    </h5>
                                    <div className='card horizontal'>
                                        <div>
                                            <img className='circle' src={user.picture} height='150px' width='150px'/>
                                        </div>
                                        <div className='card-stacked'>
                                            <div className='card-content'>
                                                <p className='flow-text'>{user.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                     */}
                </div>
            )
        }
    }
}

export default Home;