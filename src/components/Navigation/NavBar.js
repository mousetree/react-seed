import React from 'react';
import AppBar from 'material-ui/AppBar';

const NavBar = (props) => (
	<AppBar
		title="React Seed"
		onLeftIconButtonTouchTap={() => props.onMenuToggle()}
	/>
);

export default NavBar;