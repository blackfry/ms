import React, {Component} from 'react';
import './App.css';
import {Main} from './ms-specific/main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="App-intro">
                        <Main />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
