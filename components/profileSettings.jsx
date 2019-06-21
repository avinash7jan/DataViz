import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';


const ProfileSettings = React.createClass({
	
	getInitialState: function(){
		return {
			
		}
	},
	
	
	
	render: function() {
		return (
			<div className="user_profile col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
			<div className="user_profile_center">
				<div className="com_width main_profile_bg"></div>
			{/* <img src="images/profile_setting.png" className="const_img img_responsive" /> */}
				<button onClick={this.props.dotRemove5} type="button" className="profile_done">Done</button>
				</div>
			</div>
		)
	}
});

module.exports = ProfileSettings;