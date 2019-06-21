import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import { BrowserRouter, Route, Link, browserHistory, History ,RouterContext} from 'react-router-dom';
import LeftMenu from './leftMenu.jsx';
import ScrollArea  from 'react-scrollbar';

const Header = React.createClass({
	
	getInitialState: function(){
		return {
			active :false,
			notificationContent:false,
			helpContent:false,
			notificationTop:true,
			notificationTop1:false,
			dotRemoveClass1:false,dotRemoveClass2:false,dotRemoveClass3:false,
			emails:[],
		}
	},
	 mixins: [ History ],
	toggleClass() {
		if(!this.state.active){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick, false);
		}
		 this.setState({ active: !this.state.active });
	}, 
	
	toggleNotification() {
		if(!this.state.notificationContent){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick1, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick1, false);
		}
        this.setState({ notificationContent: !this.state.notificationContent });
    },
	
	toggleHelp() {
		if(!this.state.helpContent){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick2, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick2, false);
		}
        this.setState({ helpContent: !this.state.helpContent });
    },
	handleOutsideClick(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleClass();
	},
	
	handleOutsideClick1(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleNotification();
	},
	handleOutsideClick2(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleHelp();
	},
	profileSetting(){
		//event.preventDefault();
		// do some login logic here, and if successful:
		//this.contextTypes.push('/mypath');
		console.log('this',this);
		
		//this.props.history.push('/profile');
		 //browserHistory.push('profile');
		 this.history.push('/profile')
	},
	notificationHide(){
		this.setState({notificationTop1:true});
		
		 setTimeout(() => {
      this.setState({
        notificationTop:false
      });
    }, 400);	
	},
	
	dotRemove1() {
		this.setState({dotRemoveClass1:true});
	},
	dotRemove2() {
		this.setState({dotRemoveClass2:true});
	},
	dotRemove3() {
		this.setState({dotRemoveClass3:true});
	},
	
	// dotRemove(index, events) {
		//alert(index);alert(events);
   // var emails = this.state.emails.slice(); // Make a copy of the emails first.
   // emails[index] = event.target.value; // Update it with the modified email.
   // this.setState({emails: emails}); // Update the state.
//}, 
	
	
	render: function() {
console.log("this.state.notificationContent...."+this.state.notificationContent);
		return (
			<div className="top_header">
				<div className="header">
					<header className="">
						<nav className="module moduleGlobal">
							<ul className="module moduleGlobalNav">
								<li className="left_menu">
								 <a className="logo1" href="#"></a> 
									{/*<a className="logo2" href="#"></a>*/}
									<a className={this.props.mobileDashboardClick?"mobile_close":"mobile_view"} href="#" onClick={this.props.mobileDashboard}></a>
									<a className="mobile_logo" href="#"></a>
								</li>
								<li className="user">
									<span className="devide"></span>
									<span className="avatar" onClick={this.toggleClass}></span>
								</li>
								<li className="com_icon">
									<span className={this.state.notificationContent?"notification notificationActive":"notification "} onClick={this.toggleNotification}></span>
									<span className={this.state.helpContent?"question questionActive":"question"} onClick={this.toggleHelp}></span>
								</li>
							</ul>
						</nav>
					</header>
					
					{/* {this.state.active ?
					<div className="com_cont notice" ref={node => { this.node = node; }}>
						<img src="images/Profile-dropdown.png" className="const_img img_responsive" />
					</div> : null} */}
					
					{this.state.helpContent ?
					<div className="com_cont notice1 com_pop_box arrow_box"  ref={node => { this.node = node; }}>
						<ul className="search">
						{/* <li><input type="text" className="search_type" placeholder="Search help"/></li> */}
							<li>
								<div><a href="http://172.99.67.90/url/#/" target="_blank">View my support cases</a></div>
								<div><a href="https://knowledge.autodesk.com/support" target="_blank">Support & Learning</a></div>
								<div><a href="https://knowledge.autodesk.com/contact-support" target="_blank">Contact us</a></div>
							</li>
							<li>
								<div><a href="https://knowledge.autodesk.com/customer-service/account-management/account-access/get-started/admin-tour" target="_blank">Account tour</a></div>
							</li>
						</ul>
					</div> : null}
					
					{/* {this.state.helpContent ?
					<div className="com_cont notice1"  ref={node => { this.node = node; }}>
						<img src="images/Help-drpdown.png" className="const_img img_responsive" />
					</div>: null} */}
					
					{this.state.active ?
					<div className="com_cont notice profile com_pop_box arrow_box" ref={node => { this.node = node; }}>
						<div log_cont>
							<div className="user_name">Jenny Eishingdrelo</div>
							<div className="email">jenny.eishingdrelo@autodesk.com</div>
							<div className="sign_btn_grp">
								<button onClick={this.props.dotRemove5} type="button" className="profile_settings but" >Profile Settings</button>
								<button type="button" className="sign_out but">Sign Out</button>
							</div>
						</div>
					</div>: null}
					
					
					
					{/* {this.state.notificationContent ?
					<div className="com_cont notice"  ref={node => { this.node = node; }}>
						<img src="images/Notification-dropdown.png" className="const_img img_responsive" />
					</div>: null} */}
					
					{this.state.notificationContent ?

					<div className="com_cont notification_box arrow_box"  ref={node => { this.node = node; }}>
						<ul className="notification_contents">
							<li>Notifications</li>
							
							<li className={this.state.notificationTop ?(this.state.notificationTop1 ? "fst11 fst_notifi":"fst_notifi"):"fst_notifi hide_fst_notification"}>
								<div className="bold_text">New enhancements to subscription management
								 <span className="close_notification" onClick={this.notificationHide}></span>
								</div>
								<div>Add or reduce seats on your subscriptions and align upcoming payments in your Account</div>
								<div className="green_text">Primary link or Secondary link</div>
							</li>
							
							<li  className="com_notification_hover" onClick={this.dotRemove1}>
								<div className={this.state.dotRemoveClass1 ? "bold_text":"bold_text blue_bullet"}> Your subscription expires May 5</div>
								<div>Maya</div>
								<div> Media & Entertainment Collection</div>
								<div>Product Design Collection</div>
								<div>2 mor</div>
								<div className="green_text"><a href="aaa#" target="_blank">Manage renewal</a></div>
							</li>
							
							<li className="com_notification_hover" onClick={this.dotRemove2}>
								<div className={this.state.dotRemoveClass2 ? "bold_text":"bold_text blue_bullet"}>Your subscription expires April 20</div>
								<div>AutoCAD</div>
								<div>Architecture Engineering Construction Collection</div>
								<div className="green_text"><a href="aaa#" target="_blank">Manage renewal</a></div>
							</li>
							
							<li  className="com_notification_hover">
								<div>You have 4 new seats of Product Design Collection subscription, switched from Building Design Suite
								Premium subscription.</div>
								<div className="green_text">Learn how to swnch or Asmgn users</div>
							</li>
							
							<li  className="com_notification_hover"  onClick={this.dotRemove3}>
								<div className={this.state.dotRemoveClass3 ? "bold_text":"bold_text blue_bullet"}> Your subscription expires May 5</div>
								<div>Maya</div>
								<div> Media & Entertainment Collection</div>
								<div>Product Design Collection</div>
								<div>2 mor</div>
								<div className="green_text"><a href="aaa#" target="_blank">Manage renewal</a></div>
							</li>
							
							
						</ul>
					</div> : null}
					
				</div>
			</div>
		)
	}
});

module.exports = Header;