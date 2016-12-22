import React, {Component} from 'react';

class Notification extends Component {
    constructor() {
        super();

        this.state = null;

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.state = {
            pillName: this.props.pillName,
            time: this.props.time,
            email: this.props.email,
            changed: false
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value,
            changed: true
        }, () => {
            console.log(this.state);
        });
    }

    render() {
        let buttons = this.state.changed ?
            <div className='col s6'>
                <div className='row center'>
                    <div className='col s6'>
                        <button className='waves-effect waves-light btn blue-grey lighten-2'>Update</button>
                    </div>
                    <div className='col s6'>
                        <button className='waves-effect waves-light btn blue-grey lighten-2'>Delete</button>
                    </div>
                </div>
            </div> :
            <div className='center col s6'>
                <button className='waves-effect waves-light btn blue-grey lighten-2'>Delete</button>
            </div>;
        return (
            <form className='col s12'>
                <div className='row'>
                    <div className='input-field col s6'>
                        <label htmlFor='pillName'>Pill Name</label>
                        <input value={this.state.pillName}
                               id='pillName' type='text' onChange={this.handleChange}/>
                    </div>
                    <div className='input-field col s6'>
                        <label htmlFor='time'>When to notify</label>
                        <input value={this.state.time}
                               id='time' type='text' onChange={this.handleChange}/>
                    </div>
                    <div className='input-field col s6'>
                        <label htmlFor='email'>When to notify</label>
                        <input value={this.state.email}
                               id='email' type='text' onChange={this.handleChange}/>
                    </div>
                    {buttons}
                </div>
            </form>
        )
    }
}

export default Notification;