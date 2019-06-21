import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Button,Modal,Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
//import PieChart from "react-svg-piechart"



import Highcharts from 'highcharts';
import Highchartsmap from 'highcharts-map';
import ReactHighcharts from 'react-highcharts';
import ReactHighmaps from 'react-highcharts/bundle/ReactHighmaps';

import world from './mapdata/world';
import europe from './mapdata/europe';
import data from './mapdata/data';
import highmaps from './mapdata/highmaps';
//import ReactDOM from 'react-dom';


const DashBoard = React.createClass({
	
	getInitialState: function(){
		return {
			index: 0,
		}
	},
	
	

		
	render: function() {
		
		
		
		
		
const config = {
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Browser<br>shares<br>2015',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Firefox',   1.315],
            ['Opera',     3.38],
            {
                name: 'Proprietary or Undetectable',
                y: 0,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
 
		
 
};
	
		
	return (
		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 fix_width no-pad">
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 dash_top_border">
					
					<div className="app">
						<ReactHighcharts config={config}>
						</ReactHighcharts>
					</div>
					
				</div>
				
			</div>	
		</div>
		
		)
	}
});

module.exports = DashBoard;