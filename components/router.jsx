import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import { BrowserRouter, Route, Link, browserHistory, hashHistory } from 'react-router-dom';
import DashBoard from './dashBoard.jsx';
import Trial from './trial.jsx';
import AllProducts from './allProducts.jsx';
import ProductUpdates from './productUpdates.jsx';
import Home from './home.jsx';
import QuickLinks from './quickLinks.jsx';
import Contracts from './contracts.jsx';
import User from './user.jsx';
import Products from './products.jsx';
import Devices from './devices.jsx';
import Summary from './summary.jsx';
import CloudServices from './cloud_service_usege.jsx';
import UpcomingPayments from './upcomingPayments.jsx';
import OrderHistory from './orderHistory.jsx';
import ProfileSettings from './profileSettings.jsx';


const CustomRouter = React.createClass({  
	componentWillMount: function(){
		console.log("Component Mounting [CustomRouter] ");
    },
	componentWillUnmount: function() {
		console.log("Component Unmounting [CustomRouter] ");
	},
	render: function() {
	    return (
			<BrowserRouter history={hashHistory}>
            <Route path="/" component={Home} />
			</BrowserRouter>
			)
	}
});

ReactDOM.render(<CustomRouter />, document.getElementById('app'));