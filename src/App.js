import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Carouselfunc from './Components/Carouselfunc';
import Book from './Components/Book';
import Footer from './Components/Footer';

class App extends React.Component {
    render() {
        return (
            <div className="App" >
                <Header/>
                <Carouselfunc />
                <Book/>
                <Footer/>
            </div>
        )
    }
}

export default App;