import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
      	<h1>React Seed</h1>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/products" activeClassName="active">Products</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App;
