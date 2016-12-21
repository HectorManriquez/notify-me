import React, {Component} from 'react';

class Head extends Component {
    render() {
        return (
            <nav>
                <div className='nav-wrapper blue-grey lighten-3'>
                    <a href='/' className='brand-logo center'>Notify Me</a>
                    <ul className='right'>
                        <i className='material-icons'>menu</i>
                        <li><a href='/Add'>Add Notification</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Head;