import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import Select from 'react-select';
import Header from './header.jsx';
import LeftMenu from './leftMenu.jsx';

import LeftMenuDemo from './leftMenuDemo.jsx';


const Main = React.createClass({
	
	getInitialState: function(){
		return {
		}
	},
		
	render: function() {
		return (
		<div>
			<Header/>
			<LeftMenu/>	
			{/*<LeftMenuDemo/>*}
		</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));