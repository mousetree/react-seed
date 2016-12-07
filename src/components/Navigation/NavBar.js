import React from 'react';
import {Link} from 'react-router';
import {login, logout} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const styles = {
	container: {
		borderBottom: '1px solid whitesmoke',
		padding: 24,
		display: 'flex',
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		color: 'black',
		textDecoration: 'none',
		marginLeft: 16
	},
	menu: {},
	spacer: {
		flex: 1
	},
	menuItem: {
		color: 'grey',
		textDecoration: 'none',
		marginLeft: 32
	},
	activeMenuItem: {
		color: 'black'
	}
};

const NavBar = (props) => (
	<div style={styles.container}>
		<svg height="24" width="24">
			<circle cx="12" cy="12" r="12" fill="grey" />
		</svg>
		<Link style={styles.title} to="/">
			Seed
		</Link>
		<div style={styles.menu}>
			<Link to="/about" style={styles.menuItem} activeStyle={styles.activeMenuItem}>About</Link>
			<Link to="/products" style={styles.menuItem} activeStyle={styles.activeMenuItem}>Products</Link>
		</div>
		<div style={styles.spacer}></div>
		<div>
			{ props.auth && !props.auth.token ?
				<a onClick={props.login}>Login</a> :
				<a onClick={props.logout}>Logout</a>
			}
		</div>
	</div>
);

export default connect(
	(state) => state.auth,
	(dispatch) => bindActionCreators({
		login,
		logout
	}, dispatch)
)(NavBar);