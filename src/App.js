import React, { Component } from 'react';
import Appbar from './components/navbar.component';
import CardGrid from './components/cardgrid.component';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: {
          main: '#5294e2',
        },
      }
    });

    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Appbar/>
          <CardGrid/>
        </ThemeProvider>
      </div>
    );
  } 
}

export default App;
