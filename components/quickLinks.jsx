import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import ScrollArea  from 'react-scrollbar';
import { BrowserRouter, Route, Link, browserHistory, History ,RouterContext} from 'react-router-dom';



const QuickLinks = React.createClass({
	
	getInitialState: function(){
		return {
			selectedLeft:this.props.selectedLeft,
			//selectedQuickLinks:false,
		}
	},
	componentWillReceiveProps:function(nextProps){
		this.setState({
			selectedLeft:nextProps.selectedLeft,
		})

	},

		
	render: function() {
		return (
				<PanelGroup collapsible   aria-multiselectable="true" className="col-xs-12 no-pad left_main_accord bottom_link">
					<Panel header="Quick Links" collapsible  className="left_panel IT-Services com_hover  link_bot" onClick={this.quickLinksShow}  onClick={this.props.selectedQuickLinks} >

						{this.props.selectedRight=="allProducts"?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices1</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices1</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices1</label>
							</li>
						</ul>
						:null}
						
						
						{this.props.selectedRight=="productUpdates"?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices2</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices2</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices2</label>
							</li>
						</ul>
						:null}
						
						{this.props.selectedRight=="trials"?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices3</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices3</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices3</label>
							</li>
						</ul>
						:null}
						
						
						{this.props.selectedRight=="users"?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices1</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices1</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices1</label>
							</li>
						</ul>
						:null}
						
						{this.props.selectedRight=="products" ?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices2</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices2</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices2</label>
							</li>
						</ul>
						:null}
						
						{this.props.selectedRight=="devices" ?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices3</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices3</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices3</label>
							</li>
						</ul>
						:null}
						
						{this.props.selectedRight=="subscriptions" ?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices1</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices1</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices1</label>
							</li>
						</ul>
						:null}
						{this.props.selectedRight=="upcoming_payments" ?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices2</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices2</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices2</label>
							</li>
						</ul>
						:null}
						{this.props.selectedRight=="order_history" ?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices3</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices3</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices3</label>
							</li>
						</ul>
						:null}
						{this.props.selectedRight=="contracts" ?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices4</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices4</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices4</label>
							</li>
						</ul>
						:null}

						{this.props.selectedRight=="cloud_service"?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices1</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices1</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices1</label>
							</li>
						</ul>
						:null}
						
						{this.props.selectedRight=="summary"?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link" onClick={(event)=>{event.stopPropagation()}}>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices2</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices2</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices2</label>
							</li>
						</ul>
						:null}
						
						
					</Panel>
				</PanelGroup>
		)
	}
});

module.exports = QuickLinks;