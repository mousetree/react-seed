import React, { Component } from 'react';
import NavBar from '../components/Navigation/NavBar';

class App extends Component {

  render() {
    const styles = {
      body: {
        margin: 0,
        padding: 0,
        lineHeight: 1.5,
        color: '#666',
        fontSize: 14,
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif'
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
