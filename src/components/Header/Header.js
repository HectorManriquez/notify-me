import React, {Component} from 'react';

class Head extends Component {
    render() {
        return (
            <nav>
                <div className='nav-wrapper blue-grey lighten-3'>
                    <a href='/' className='brand-logo center'>Notify Me</a>
                    <ul className='right'>
                        <li>
                            <a className="btn-floating btn-large waves-effect waves-light blue-grey lighten-2 modal-trigger"
                               href='#addModal' ref='addModal'>
                                <i className="material-icons">add</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Head;