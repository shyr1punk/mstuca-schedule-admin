import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

require('bootstrap-grid');

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Dashboard - Расписание МГТУГА"
            showMenuIconButton={false}
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
