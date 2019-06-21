import React from 'react';
import Dashboard from './dashBoard.jsx';
import Trial from './trial.jsx';
import AllProducts from './allProducts.jsx';
import ProductUpdates from './productUpdates.jsx';
import User from './user.jsx';
import Products from './products.jsx';
import Devices from './devices.jsx';
import Summary from './summary.jsx';
import CloudServices from './cloud_service_usege.jsx';
import Subscriptions from './subscriptions.jsx';
import UpcomingPayments from './upcomingPayments.jsx';
import OrderHistory from './orderHistory.jsx';
import Contracts from './contracts.jsx';


class RightContent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			rightJsx:this.props.selectedRight,
		}
	}
	componentWillMount(){
		console.log('[RightContent] is will mount');
	}
	componentDidMount(){
		console.log('[RightContent] is did mount');
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			rightJsx:nextProps.selectedRight,
		})
	}
	componentWillUnmount(){
		console.log('[RightContent] is will unmount');
	}
	
	
	
	render(){
		console.log("123456"+this.state.rightJsx);
		return(
			<div className="col-xs-10 col-md-10 col-lg-10 col-sm-10 no-pad flex main_bg">
				{this.state.rightJsx=='dashboard'?<Dashboard leftMenuClick={(val)=>{this.props.leftMenuClick(val)}}/>:null}
				{this.state.rightJsx=='trials'?<Trial />:null}
				{this.state.rightJsx=='allProducts'?<AllProducts />:null}
				{this.state.rightJsx=='productUpdates'?<ProductUpdates />:null}
				{this.state.rightJsx=='users'?<User/>:null}
				{this.state.rightJsx=='products'?<Products/>:null}
				{this.state.rightJsx=='devices'?<Devices/>:null}
				{this.state.rightJsx=='contracts'?<Contracts/>:null}
				{this.state.rightJsx=='subscriptions'?<Subscriptions/>:null}
				{this.state.rightJsx=='summary'?<Summary/>:null}
				{this.state.rightJsx=='cloud_service'?<CloudServices/>:null}
				{this.state.rightJsx=='upcoming_payments'?<UpcomingPayments/>:null}
				{this.state.rightJsx=='order_history'?<OrderHistory/>:null}
			</div>
		)
	}
}
module.exports=RightContent;