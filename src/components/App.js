import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import AddNotification from './AddNotification/AddNotification';

class App extends Component {
    componentDidMount() {
        $('.modal-trigger').leanModal();
    }

    render() {
        return (
            <div className='container'>
                <Header/>
                <Home/>
                <AddNotification/>
                <Footer/>
            </div>
        )
    }
}

export default App;