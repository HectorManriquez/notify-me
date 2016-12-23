import React, {Component} from 'react';
import createRepeatNotification from '../../utils/createRepeatNotification';
import createScheduleNotification from '../../utils/createScheduleNotification';

class Add extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleRepeatCreateButton = this.handleRepeatCreateButton.bind(this);
        this.handleScheduleCreateButton = this.handleScheduleCreateButton.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleRepeatCreateButton() {
        createRepeatNotification(this.state)
            .then((res) => {
                if (res.status) {
                    document.location.href = '/';
                }
            });
    }

    handleScheduleCreateButton() {
        createScheduleNotification(this.state)
            .then((res) => {
                if (res.status) {
                    document.location.href = '/';
                }
            });
    }

    render() {
        return (
            <div id='addModal' className='modal'>
                <div className='modal-content'>
                    <h4 className='center-align'>Add A Notification</h4>
                    <form className='col s12'>
                        <div className='input-field col s6'>
                            <label htmlFor='pillName'>Pill Name</label>
                            <input id='pillName' type='text' onChange={this.handleChange}/>
                        </div>
                        <div className='input-field col s6'>
                            <label htmlFor='time'>When to notify</label>
                            <input id='time' type='text' onChange={this.handleChange}/>
                        </div>
                        <div className='input-field col s6'>
                            <label htmlFor='email'>Email</label>
                            <input id='email' type='text' onChange={this.handleChange}/>
                        </div>
                    </form>
                </div>
                <div className='modal-footer'>
                    <button className='modal-action modal-close waves-effect waves-green btn-flat'
                            onClick={this.handleScheduleCreateButton}> Schedule
                    </button>
                    <button className='modal-action modal-close waves-effect waves-green btn-flat'
                            onClick={this.handleRepeatCreateButton}> Repeat
                    </button>
                </div>
            </div>
        )
    }
}

export default Add;