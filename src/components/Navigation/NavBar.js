import React from 'react';
import {Link} from 'react-router';

const styles = {
	container: {
		borderBottom: '1px solid whitesmoke',
		padding: 24,
		display: 'flex',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		color: 'black',
		textDecoration: 'none'
	},
	menu: {},
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
		<Link style={styles.title} to="/">
			Seed
		</Link>
		<div style={styles.menu}>
			<Link to="/about" style={styles.menuItem} activeStyle={styles.activeMenuItem}>About</Link>
			<Link to="/products" style={styles.menuItem} activeStyle={styles.activeMenuItem}>Products</Link>
		</div>
	</div>
);

export default NavBar;