import React from 'react';
import Highcharts from 'highcharts';
import Highchartsmap from 'highcharts-map';
import ReactHighcharts from 'react-highcharts';
import ReactHighmaps from 'react-highcharts/bundle/ReactHighmaps';
import world from './mapdata/world';
import europe from './mapdata/europe';
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
	
