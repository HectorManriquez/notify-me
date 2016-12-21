import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Header/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}

export default App;