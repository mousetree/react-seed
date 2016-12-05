import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavBar from './components/Navigation/NavBar';
import NavDrawer from './components/Navigation/NavDrawer';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    const styles = {
      page: {
        padding: 16
      }
    };

    return (
      <MuiThemeProvider>
        <div>
          <NavBar onMenuToggle={this.handleToggle}/>
          <NavDrawer open={this.state.open} onToggle={this.handleToggle}/>
          <div className="page" style={styles.page}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
