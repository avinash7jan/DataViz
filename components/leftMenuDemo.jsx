import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {ListGroup,ListGroupItem,Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import Select from 'react-select';
import { Router, Route, Link, browserHistory, History ,RouterContext} from 'react-router';


const LeftMenuDemo = React.createClass({
	
	getInitialState: function(){
		return {
			selectedLeft:this.props.selectedLeft,
			 open1: true,
			 open2: true,
			 open3: true,
		}
	},
	componentWillReceiveProps:function(nextProps){
		this.setState({
			selectedLeft:nextProps.selectedLeft,
		})
	},
		
	render: function() {
		return (
			<div className="col-xs-2 col-md-2 col-sm-2 col-lg-2 no-pad left_main_menu">

			{/* <Panel collapsible defaultExpanded header="Panel heading">
					<ListGroup fill>
						<ListGroupItem>Item 1</ListGroupItem>
						<ListGroupItem>Item 2</ListGroupItem>
					</ListGroup>
				</Panel>
  
				<Panel collapsible defaultExpanded header="Panel heading">
					<ListGroup fill>
						<ListGroupItem>Item 1</ListGroupItem>
						<ListGroupItem>Item 2</ListGroupItem>
					</ListGroup>
			</Panel> */}
			
			
			
			
			
			
			
			
			
			
			
			
			
			 <PanelGroup collapsible defaultExpanded aria-multiselectable="true">
					<Panel collapsible header="Panel 1"  aria-expanded="true"  defaultExpanded header="Panel heading1">
					
						<ListGroup fill>
						<ListGroupItem>Item 1</ListGroupItem>
						<ListGroupItem>Item 2</ListGroupItem>
						</ListGroup>
					
					</Panel>
					<Panel header="Panel heading2" aria-expanded="true" collapsible header="Panel heading2"  defaultExpanded>
						<ListGroup fill>
							<ListGroupItem>Item 1</ListGroupItem>
							<ListGroupItem>Item 2</ListGroupItem>
						</ListGroup>
					</Panel>
					
				<Panel header="Panel heading3" aria-expanded="true" defaultExpanded collapsible header="Panel 3" >
					<ListGroup fill>
							<ListGroupItem>Item 1</ListGroupItem>
							<ListGroupItem>Item 2</ListGroupItem>
						</ListGroup>
				
				</Panel>
			</PanelGroup> 
			
			
			
			
			
			
			
			
			{/*<div id="accordion" role="tablist" aria-multiselectable="false">
					  <div className="card">
						<div className="card-header" role="tab" id="headingOne">
						  <h5 className="mb-0">
							<a data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
							  Collapsible Group Item #1
							</a>
						  </h5>
						</div>

						<div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
						  <div className="card-block">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" role="tab" id="headingTwo">
						  <h5 className="mb-0">
							<a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							  Collapsible Group Item #2
							</a>
						  </h5>
						</div>
						<div id="collapseTwo" className="collapse show" role="tabpanel" aria-labelledby="headingTwo">
						  <div className="card-block">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						  </div>
						</div>
					  </div>
					  <div className="card">
						<div className="card-header" role="tab" id="headingThree">
						  <h5 className="mb-0">
							<a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							  Collapsible Group Item #3
							</a>
						  </h5>
						</div>
						<div id="collapseThree" className="collapse show" role="tabpanel" aria-labelledby="headingThree">
						  <div className="card-block">
							Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
						  </div>
						</div>
					  </div>
			</div>*/}
			
			{/*<div className="container">
  <h2>Simple Collapsible</h2>
  <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
  <div id="demo" className="collapse in">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
  
  <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo1">Simple collapsible</button>
  <div id="demo1" className="collapse in">
    Lorem1 ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
			</div>*/}
    
			
			
			
			
			
			
			
			
			
			
			</div>
		
		)
	}
});

module.exports = LeftMenuDemo;