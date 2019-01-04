import React, {Component} from 'react';
import './App.css';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import createPalette from "@material-ui/core/styles/createPalette";
import Main from "./components/Main/Main";

const theme = createMuiTheme({
    palette: createPalette({
        primary: {main: "#3f51b5"}
    }),
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
