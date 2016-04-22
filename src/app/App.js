import React from 'react';
import AppBar from 'material-ui/AppBar';
import menu from 'material-ui/svg-icons/navigation/menu'
import NavLink from './NavLink';
import {IndexLink, Link} from 'react-router';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <AppBar title="jmm-cutting-boards"/>
            </MuiThemeProvider>
        );
    }
}

export default App;
