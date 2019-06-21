import React from 'react';
import Highcharts from 'highcharts';
import Highchartsmap from 'highcharts-map';
import ReactHighcharts from 'react-highcharts';
import ReactHighmaps from 'react-highcharts/bundle/ReactHighmaps';
import world from './mapdata/world';
import europe from './mapdata/europe';
import data from './mapdata/data';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Button,Modal,Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
//import PieChart from "react-svg-piechart"

const config = {
  chart: {
    spacingBottom: 20
  },
  title: {
    text: 'Europe time zones'
  },
  legend: {
    enabled: true
  },
  plotOptions: {
    map: {
      allAreas: false,
      joinBy: ['iso-a2', 'code'],
      dataLabels: {
        enabled: true,
        color: 'white',
        style: {
          fontWeight: 'bold'
        }
      },
      mapData: europe,
      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}: <b>{series.name}</b>'
      }
    }
  },
  series: [{
    name: 'UTC',
    data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
      return { code: code };
    })
  }, {
    name: 'UTC + 1',
    data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU', 'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
      return { code: code };
    })
  }]
};

/*const config={
        title: {
            text: 'Fixed tooltip with HTML'
        },

        legend: {
            title: {
                text: 'Population density per km²',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        tooltip: {
            backgroundColor: 'none',
            borderWidth: 0,
            shadow: false,
            useHTML: true,
            padding: 0,
            pointFormat: '<span class="f32"><span class="flag {point.flag}">' +
                '</span></span> {point.name}<br>' +
                '<span style="font-size:30px">{point.value}/km²</span>',
            positioner: function () {
                return { x: 0, y: 250 };
            }
        },

        colorAxis: {
            min: 1,
            max: 1000,
            type: 'logarithmic'
        },

        series: [{
            //data: data,
            mapData: world,
            joinBy: ['iso-a2', 'code'],
            name: 'Population density',
            states: {
                hover: {
                    color: '#a4edba'
                }
            }
        }]
};*/
/*console.log(data);
console.log('');

const config={
	chart: {
            borderWidth: 1,
            map: world
        },
         title: {
            text: 'World population 2013 by country'
        },

        subtitle: {
            text: 'Demo of Highcharts map with bubbles'
        },

        legend: {
            enabled: false
        },
        plotOptions: {
    	map: {
			allAreas: false,
			joinBy: ['iso-a2', 'code'],
			dataLabels: {
				enabled: true,
				color: 'white',
				style: {
				fontWeight: 'bold'
		}
      },
      mapData: world,
      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}: <b>{series.name}</b>'
      }

    }
  },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        series: [{
            name: 'Countries',
            color: '#E0E0E0',
            enableMouseTracking: false
        }, {
            type: 'mapbubble',
            name: 'Population 2013',
            joinBy: ['iso-a2', 'code'],
            //data: data.map(function(code){
            	//return {code: code.title};}),
            mapData: world,
            //data: data,
            minSize: 4,
            maxSize: '12%',
            tooltip: {
                pointFormat: '{point.code}: {point.z} thousands'
            }
        }]

    }; */

// ReactDOM.render(
// <ReactHighmaps config={config}></ReactHighmaps>,
// document.getElementByClass('app')
// );

const Products = () => (
  <div className="app">
    <ReactHighmaps config={config}>
    </ReactHighmaps>
  </div>
);

export default Products;
	
