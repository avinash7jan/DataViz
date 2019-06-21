import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import ScrollArea  from 'react-scrollbar';
import { BrowserRouter, Route, Link, browserHistory, History ,RouterContext} from 'react-router-dom';
import QuickLinks from './quickLinks.jsx';


const LeftMenu = React.createClass({
	
	getInitialState: function(){
		return {
			selectedLeft:this.props.selectedLeft,
			open :true,
			mobileDashboardClick:this.props.mobileDashboardClick || false,
			topMenues:false,
			selectedLinks:false,
		}
	},
	componentWillReceiveProps:function(nextProps){
		this.setState({
			selectedLeft:nextProps.selectedLeft,
			mobileDashboardClick:nextProps.mobileDashboardClick,
		})
	},
	
	selectedQuickLinks(){
		this.setState({
			selectedLinks:!this.state.selectedLinks,
		})
	},
	selectedQuickLinks1(){
		this.setState({
			selectedLinks:false,
		})
	},
	
	topMenu() {
	 this.setState({ topMenues: !this.state.topMenues });
	}, 
		
	render: function() {
		console.log("this.state.mobileDashboardClick....",this.state.mobileDashboardClick);
		return (
			<div className={this.state.mobileDashboardClick?"col-xs-2 col-md-2 col-sm-2 col-lg-2 no-pad left_main_menu tabDashBoard":"col-xs-2 col-md-2 col-sm-2 col-lg-2 no-pad left_main_menu iphoneDashboard  "} ref="left">
				<ScrollArea speed={0.8} className={this.state.selectedLeft=="dashboard" ? "scrool_height area leftScroll":(this.state.selectedLinks?"area leftScroll leftScrool_height":"area leftScroll")} contentClassName="content" horizontal={false}>
					<PanelGroup  collapsible defaultExpanded  aria-multiselectable="true" className="col-xs-12 no-pad left_main_accord left_menu_height">
						
						<Panel onClick={()=>{this.props.leftMenuClick('dashboard')}} collapsible header="Home"  defaultExpanded  className={this.state.selectedLeft=="dashboard"?"select_active left_panel IT-Services com_hover dashboard com_menu":"non_active left_panel IT-Services com_hover dashboard com_menu"} ></Panel>
												
						<span className="left_vertical_line"></span>
						<Panel collapsible defaultExpanded collapsible="false" 
						/*onClick={()=>{this.props.leftMenuClick('allProductsHeader')}}*/
						/*onClick={this.topMenu()}*/
						className={(this.state.selectedLeft=="allProducts" || this.state.selectedLeft=="productUpdates" || this.state.selectedLeft=="trials")?
						"left_panel IT-Services com_hover top_fst_menu header_active ":"left_panel IT-Services com_hover top_fst_menu header_non_active"} 
						header="Products & Services"  >		

							<ul className="col-xs-12 no-pad left_panel_ul">
								<li onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('allProducts');}}
								className={this.state.selectedLeft=="allProducts"?
								"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} >
									<label id="Project_type">All Products & Services</label>
								</li>
								
								<li className={this.state.selectedLeft=="productUpdates"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}  onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('productUpdates')}}>
									<label  id="Geography">Product Updates</label>
								</li>
								
								<li className={this.state.selectedLeft=="trials"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('trials')}}>
									<label  id="Geography">Trials</label>
								</li>
							</ul>
						</Panel>
						
						<span className="left_vertical_line"></span>
						
						<Panel  collapsible="false" defaultExpanded  header="Manage Access" 
						/*onClick={()=>{this.props.leftMenuClick('manageAccessHeader')}}*/
						className={(this.state.selectedLeft=="devices" || this.state.selectedLeft=="users" || this.state.selectedLeft=="products") ?
						"left_panel tablemain-cls com_hover manage header_active ":"left_panel tablemain-cls com_hover manage header_non_active"}>
						
							<ul className="col-xs-12 no-pad left_panel_ul" >
								<li onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('users')}} className={this.state.selectedLeft=="users"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
									<label className="col-xs-12 no-pad" htmlFor="Project_Name">By User</label>
								</li>
								
								<li onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('products')}} className={this.state.selectedLeft=="products"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
									<label className="col-xs-12 no-pad" htmlFor="Project_Name">By Product</label>
								</li>
								
								<li onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('devices')}} className={this.state.selectedLeft=="devices"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
									<label className="col-xs-12 no-pad" htmlFor="Project_Name">By Device</label>
								</li>
							</ul>
						</Panel>
						
						<span className="left_vertical_line"></span>
						
						<Panel collapsible="false" defaultExpanded  header="Billing & Orders"
						/*onClick={()=>{this.props.leftMenuClick('billingOrderHeader1')}}*/
						className={(this.state.selectedLeft=="contracts" || this.state.selectedLeft=="order_history" || this.state.selectedLeft=="upcoming_payments" || this.state.selectedLeft=="subscriptions") ?
						"left_panel IT-Services com_hover billing header_active ":"left_panel IT-Services com_hover billing header_non_active"}>
						
							<ul className="col-xs-12 no-pad left_panel_ul  ">
								<li  className={this.state.selectedLeft=="subscriptions"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('subscriptions')}} >
									<label id="Project_type">Subscriptions</label>
								</li>
								
								<li  className={this.state.selectedLeft=="upcoming_payments"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('upcoming_payments')}} >
									<label  id="Geography">Upcoming Payments</label>
								</li>
								<li  className={this.state.selectedLeft=="order_history"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('order_history')}} >
									<label  id="Geography">Order History</label>
								</li>
								
								<li  className={this.state.selectedLeft=="contracts"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('contracts')}} >
									<label  id="Geography">Contracts</label>
								</li>
							</ul>
						</Panel>
						
						<span className="left_vertical_line"></span>
						
						
						<Panel collapsible="false" defaultExpanded  header="Reporting"
						/*onClick={()=>{this.props.leftMenuClick('reportingHeader1')}}*/
						className={(this.state.selectedLeft=="summary" || this.state.selectedLeft=="cloud_service") ?
						"left_panel IT-Services com_hover reporting header_active ":"left_panel IT-Services com_hover reporting header_non_active"}>
						
							<ul className="col-xs-12 no-pad left_panel_ul">
								<li className={this.state.selectedLeft=="cloud_service"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('cloud_service')}}>
									<label id="Project_type">Cloud Service Usage</label>
								</li>
								<li className={this.state.selectedLeft=="summary"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('summary')}}>
									<label id="Project_types">Cloud Services Usage by User</label>
								</li>
							</ul>
						</Panel>
						<span className="left_vertical_line"></span>
						{/* <Panel  onClick={()=>{this.props.leftMenuClick('manage_devices')}} className={(this.state.selectedLeft=="manage_devices") ?"left_panel IT-Services com_hover device_menu header_active ":"left_panel IT-Services com_hover device_menu header_non_active"} aria-expanded="true" collapsible header="Devices" defaultExpanded>
							<ul className="col-xs-12 no-pad left_panel_ul  ">
								<li className={this.state.selectedLeft=="manage_devices"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={()=>{this.props.leftMenuClick('manage_devices')}}>
									<label id="Project_type">Manage devices</label>
								</li>
							</ul>
						</Panel> */}
						
						<div className="separator1"></div>
						{/* <div className="bottom_supp">Support & Learning</div>
						<div className="bottom_supp">Contact Us</div>
						<div className="separator"></div> */}
						
					</PanelGroup>
				
				
					<div className="privacy">
						<div className="privacy_use">Privacy/Cookies</div>
						<div className="privacy_use">Terms of Use</div>
						<div className=""></div>
						<div className="autodesk"></div>
						<div className="all_rights"></div>
					</div>
				</ScrollArea>
				{this.state.selectedLeft=="dashboard"?"":
				<QuickLinks selectedRight={this.state.selectedLeft} selectedQuickLinks={this.selectedQuickLinks.bind(this)} 
				/>}
			</div>
		
		)
	}
});

module.exports = LeftMenu;