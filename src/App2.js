import React, { Component } from 'react';
import Header from './components/Header';
import MainForm from './components/MainForm'
import './App.css';

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header />
                <MainForm />
            </div>
         );
    }
}
 
export default App2;