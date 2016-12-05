import React from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';

const NavDrawer = (props) => (
	<Drawer open={props.open} docked={false} onRequestChange={props.onToggle}>
      <List>
        <ListItem primaryText="Home" leftIcon={<ContentInbox />} containerElement={<Link to="/"/>} onTouchTap={props.onToggle}/>
        <ListItem primaryText="About" leftIcon={<ActionGrade />} containerElement={<Link to="/about"/>} onTouchTap={props.onToggle}/>
        <ListItem primaryText="Products" leftIcon={<ContentSend />} containerElement={<Link to="/products"/>} onTouchTap={props.onToggle}/>
      </List>
    </Drawer>
);

export default NavDrawer;