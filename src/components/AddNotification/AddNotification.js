import React, {Component} from 'react';
import createNotification from '../../utils/createNotification';

class Add extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleCreateButton = this.handleCreateButton.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleCreateButton() {
        createNotification(this.state)
            .then((res) => {
                if(res.status) {
                    document.location.href = '/';
                }
            });
    }

    render() {
        return (
            <div id="addModal" className="modal">
                <div className="modal-content">
                    <h4 className="center-align">Add A Notification</h4>
                    <form className="col s12">
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
                <div className="modal-footer">
                    <button className="modal-action modal-close waves-effect waves-green btn-flat"
                            onClick={this.handleCreateButton}> Create
                    </button>
                </div>
            </div>
        )
    }
}

export default Add;