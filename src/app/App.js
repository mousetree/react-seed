import React, { Component } from 'react';
import NavBar from '../components/Navigation/NavBar';

class App extends Component {

  render() {
    const styles = {
      body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Roboto'
      },
      page: {
        padding: 16
      }
    };

    return (
        <div style={styles.body}>
          <NavBar/>
          <div className="page" style={styles.page}>
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default App;
