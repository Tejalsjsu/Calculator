import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Welcome from './components/Welcome';

    class App extends Component {
        render() {
            return (
                <div className="App">
                    <BrowserRouter>
                        <Welcome username="Welcome, to Calculator"/>
                    </BrowserRouter>
                </div>
            );
        }
    }

    export default App;
