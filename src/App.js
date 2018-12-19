import React, {Component} from 'react';
import './App.css';
import Main from "./components/Main/Main";
import cyan from "@material-ui/core/es/colors/cyan";
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import lightBlue from "@material-ui/core/es/colors/lightBlue";
import {withStyles} from "@material-ui/core/styles";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const theme = createMuiTheme({
    palette: {
        primary: cyan,
        secondary: lightBlue
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="app">
                    <Main/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles({withTheme: true})(App);
