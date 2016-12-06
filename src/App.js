import React, { Component } from 'react';
import NavBar from './components/Navigation/NavBar';

class App extends Component {

  render() {
    const styles = {
      page: {
        padding: 16
      }
    };

    return (
        <div>
          <NavBar/>
          <div className="page" style={styles.page}>
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default App;
