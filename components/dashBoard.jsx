import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Button,Modal,Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import Dropdown from 'react-dropdown';

import Highcharts from 'highcharts';
import Highchartsmap from 'highcharts-map';
import ReactHighcharts from 'react-highcharts';
import ReactHighmaps from 'react-highcharts/bundle/ReactHighmaps';

import world from './mapdata/world';
import data from './mapdata/data';
import highmaps from './mapdata/highmaps';

import solidgauge from './mapdata/solidgauge';
//import highcharts from './mapdata/highcharts';
import highchartsmore from './mapdata/highchartsmore';
import exporting from './mapdata/exporting';

//highchartsmore(Highcharts);
//solidgauge(Highcharts);

const DashBoard = React.createClass({
	
	getInitialState: function(){
		return {
			index: 0,
			fstChart:true,
			secTime:false,
			popupShow:false,
			showChartsAll:true,
			open:true,
			optionValue:'Cloud Users & Products',
		}
	},
	
	 handleChange (e) {
			this.setState({optionValue: e})
	},
	showAllCharts(){
		this.setState({
			showChartsAll:true,
			open:true,
		})
	},
	hideAllCharts(){
		this.setState({
			showChartsAll:false,
			open:false,
		})
	},
	modalShow(){
		this.setState({
			popupShow:true,
		})
	},
	close(){
		this.setState({
			popupShow:false,productUpdate:false,
			recentProductUpdate:false,
		})
	},
	showChart1(){
		this.setState({
			fstChart:true,
			secTime:false,
		})
	},
	showChart2(){
		this.setState({
			secTime:true,
			fstChart:false,
		})
	},

	
	render: function() {	
	
	const worlds={
		chart: {
            borderWidth: 0,
            map: 'custom/world',
        },

        title: {
            text: ''
        },

        legend: {
            enabled: false
        },
		/*Map Zoom enabled true*/
		mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

	 /*  tooltip: {
			pointFormat: '{point.name}: {point.z} thousands',
			
		} */
		
		tooltip: {
			backgroundColor: null,
			borderWidth: 0,
			shadow: false,
			useHTML: true,
			padding: 0,
			headerFormat: '',
			pointFormat: 
				'<div class="tooltip_width">'+
				'<span class="country_name">{point.name}</span><br>' +
				'<span style="font-size:36px">{point.z}</span><br> <span style="font-size:14px"> Active Users</span><br><span class="span_line"></span><br>'+
				'<span style="font-size:36px">{point.products}</span> <br> <span style="font-size:14px"> Products</span>', 
				
			 positioner: function () {
				return { x: 0, y: 115 };
			},
			
			style: {
                color: "#3b4454",
            }
		},
		/* subtitle: {
        		text: 'Total Count<br/><div class="burcum">burcum</div>',
				useHTML: true,
				x: -440, 
				y: 115, 
        }, */
		
		subtitle: {
				text:
				'<div class="dis">'+
				'<span style="color:#0696D7;font-size:13px">Total</span><br>' +
				'<span style="font-size:36px;">784</span><br> <span style="font-size:14px"> Active Users</span><br><span class="span_line"></span><br>'+
				'<span style="font-size:36px">64</span> <br> <span style="font-size:14px"> Products</span></div>',
				
				align:'left',
				floating:true,
				useHTML: true,
				x:0,
				y:126,
				style:{
					color:'#3b4454',
					position:'absolute',
					align:'left'
				}
        },

		colorAxis: {
            min: 1,
            max: 1000,
            type: 'logarithmic'
        },		
		
	credits: {
        enabled: false
    },
	 
  
  series: [
  {
	color: '#E0E0E0', 
	enableMouseTracking: false,
	mapData: world,
	
  }, 
		
  {
	name:null,
	mapData: world,
	type: 'mapbubble',  
	joinBy: ['iso-a2', 'code'],
	minSize: 4,
	maxSize: '3%',
    data: [ 
	{
		code: "AL",
		z: 28,
		products:1,
	},
	{
		code: "AT",
		z: 10,
		products:4,
	},
	{
		code: "DZ",
		z: 32,
		products:6,
	}, {
		code: "ADO",
		z: 79,
		products:9,
	}, {
		code: "AO",
		z: 21,
		products:8,
	}, {
		code: "AR",
		z: 41,
		products:1,
	}, {
		code: "AM",
		z: 29,
		products:3,
	}, {
		code: "AW",
		z: 103,
		products:3,
	}, {
		code: "US",
		z: 125,
		products:3,
	}, {
		code: "IN",
		z: 40,
		products:2,
	},
	{
		code: "NZ",
		z: 44,
		products:3,
	}, {
		code: "NI",
		z: 60,
		products:4,
	}, {
		code: "NE",
		z: 17,
		products:5,
	}, {
		code: "NG",
		z: 13,
		products:3,
	},
	{
		code: "ST",
		z: 13,
		products:3,
	}, {
		code: "SA",
		z: 88,
		products:3,
	}, {
		code: "SN",
		z: 41,
		products:3,
	},	
],
		states: {
                hover: {
                    color: 'red'
                }
            }
	  
  }]
};


	
const configs = {
	chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
		height:256,
		/* spacingBottom: -70,
		spacingTop: -70,
		spacingLeft: -70,
		spacingRight: -70, */
		width:null,
	//	backgroundColor: 'none',
		width:270,
		
		
    },
	
    title: {
        text: '42%<br>TOKENS USED',
        align: 'center',
        verticalAlign: 'middle',
        y: 10,
		style: {
				fontSize:'13px',
         },
    },

    tooltip: {
		borderWidth:1,
		borderColor:'#565C5F',
		backgroundColor:'#565C5F',
        pointFormat: '<span>{point.key}{point.y}</span>',
		/*pointFormat: '<span>{point.key}{point.percentage:.1f}%</span>', */
		style: {
                color: "#fff",
				//fontSize:'13px',
         },
    },
    plotOptions: {
        pie: {
			animation: {
				duration: 1000
			},
            dataLabels: {
                enabled: false,
                distance: -40,
                style: {
                    fontWeight: 'bold',
                    color: 'white',
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%','60%'],
			borderWidth: 0,
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        type: 'pie',
        name: ' ',
        innerSize: '50%',
		data: [{
            name: 'Tokens Used',
            y: 840,
        }, {
            name: 'Tokens Remaining',
            y: 1160,
           
        }],
    }]
		
};

const config = {
	chart: {
        zoomType: 'xy',
		type: 'column',
		/* height:'230px', */
		height:'180px',
		spacingBottom: -1,
		spacingTop: 10,
		spacingLeft: 0,
		spacingRight: 0,
 		//backgroundColor: 'none', 
 		width:280,
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
       /*  crosshair: true */
    }],
    yAxis: [{ // Primary yAxis text show left side
		max:250,
		min: 0,
		tickInterval: 50,
         labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
	   title: {
			text: '',
			style: {
				color: Highcharts.getOptions().colors[1]
			}
        }   
    }, 
	{ // Secondary yAxis text show right side
       title: {
            text: '',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
		},   
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }, 
        opposite: true
    }],
    tooltip: {
		backgroundColor:'#565C5F',
        shared: true,
		borderWidth:1,
		borderColor:'#565C5F',
		style: {
                color: "#fff",
				zIndex:99,
            }
    },
    legend: {
		 enabled: false,
    },
    credits: {
        enabled: false
    },
    series: [{
		color:"#66BFE9",
        name: 'Tokens',
        type: 'column',
        yAxis: 0,
        data: [60,148,110,170,180,90,160,110],
        tooltip: {
            valueSuffix: ''
        }

    },	{
		color:"red",
        name: 'Burn rate',
        type: 'spline',
        data: [250,225,200,175,150,125,100,75,50,25,0 ,""],
        tooltip: {
            valueSuffix: ''
        }
    }]
};	

const population = {
	 chart: {
        type: 'bar',
		/* height:'252px', */
		height:'200px',
		//backgroundColor: 'none',
		width:270,
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['AutoCAD', 'Revit', 'Inventor', 'Fusion','Maya'],
    },
    yAxis: {
		gridLineWidth: 0,
		minorGridLineWidth: 0,	
        min: 0,
         title: {
            text: " ",
            align: 'high'
        },
        labels: {
             enabled: false,
        } 
    },
	
	
	
    tooltip: {
		borderWidth:1,
		borderColor:'#565C5F',
		backgroundColor:'#565C5F',
		
		/* pointFormat: '<span style="color:#fff" class="half_tool">{this.series.name} </span>: <b><span style="color:#fff">{this.x}%{this.y}</span></b>', */
		
		formatter: function() {
				return '<b>'+ this.series.name +'</b><br/>'+
				this.x +': '+ this.y;
		},
		style: {
                color: "#fff",
            }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        },
		series: {
            animation: {
                duration: 2000,
            }
        }
    },

    legend: {
		enabled:false,
    },
    credits: {
        enabled: false
    },
    series: [
	 {
		pointWidth:20,
		colorByPoint: true,
	 	color:"#66BFE9",
        name: " ",
        data: [350, 250, 140, 60,40]
    }],
	
};
const populations = {
	 chart: {
        type: 'bar',
		/* height:'252px', */
		height:'200px',
		//backgroundColor: 'none',
		width:270,
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['AutoCAD', 'Revit', 'Inventor', 'Fusion','Maya'],
    },
    yAxis: {
		gridLineWidth: 0,
		minorGridLineWidth: 0,	
        min: 0,
         title: {
            text: " ",
            align: 'high'
        },
        labels: {
             enabled: false,
        } 
    },

    tooltip: {
		borderWidth:1,
		borderColor:'#565C5F',
		backgroundColor:'#565C5F',
		
		/* pointFormat: '<span style="color:#fff" class="half_tool">{this.series.name} </span>: <b><span style="color:#fff">{this.x}%{this.y}</span></b>', */
		
		formatter: function() {
				return '<b>'+ this.series.name +'</b><br/>'+
				this.x +': '+ this.y;
		},
		style: {
                color: "#fff",
            }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
		enabled:false,
    },
    credits: {
        enabled: false
    },
    series: [
	 {
		pointWidth:20,
		colorByPoint: true,
	 	color:"#66BFE9",
        name: " ",
        data: [450, 350, 240, 160,140]
    }],
	
};
	console.log("optionValue",this.state.optionValue);	
	return (
		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad dash_backg"></div>
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 fix_width no-pad">
			
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 dash_top_border"> 
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
							<h4 className="top_wish">Good afternoon, Pat</h4>
						</div>
						<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad features ul_mobile_view">
							
							<li className="col-md-4 col-sm-6 col-lg-4 com_pad_top mob_view">
								<div className="com_back_li com_hover" onClick={this.props.leftMenuClick.bind(this,'productUpdates')}> 
									<div className="com_icon updates"></div>
									<div className="">
										<div className="text_right">2</div>
										<span className="below_content">Recent Updates</span>
									</div>
								</div>	
							</li>
							
							<li className="col-md-4 col-sm-6 col-lg-4 com_pad_top mob_view">
								<a href="http://172.99.67.90/url/#/" target="blank">
									<div className="com_back_li com_hover">
										<div className="com_icon support_case"></div>
										<div className="text_right">4</div>
										<span className="below_content">Open Support Cases</span>
									</div>	
								</a>
							</li>
						</ul>
					</div>
				</div>
				
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 dash_top_border chart_back">
					<div  className="col-md-12 col-sm-12 col-xs-12 col-lg-12 no-pad drop_parient">
						<Dropdown value={this.state.optionValue.value} className="selectpicker no-pad "  options={[ 'Cloud Users & Products','Cloud credit', 'Product usage','Cloud services' ]} onChange={this.handleChange}  placeholder="Cloud Users & Products" />
					</div>

				
				{(this.state.optionValue=="Cloud Users & Products" || this.state.optionValue.value=="Cloud Users & Products") ? <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 top_gap">
						<div className="app world_chart">
							<ReactHighmaps config={worlds} />
								{/* <div className="static_content">India</div> */}
						</div>
						
					</div>
					
					
					<div className="col-xs-12 col-md-4 col-sm-12 col-lg-4 top_gap">
					
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 chart_header3 graph_bot_pad no-pad">Total Usage</div>
						
						<div className="col-xs-12 no-pad chart_back_div boxShadow">
							<div className="app half_chart">
							
							{/* <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 chart_text month_bot">TOTAL USAGE</div> */}
								
								<ReactHighcharts config={configs} />
								<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 month_bot no-pad tab_div">
								{/* <table className="table tabel1">
										<tr>
											<td>Used:</td>
											<td className="td1">840</td>
										</tr>
										<tr>
											<td>Remaining:</td>
											<td className="td1">1160</td>
										</tr>
										<tr>
											<td>Total:</td>
											<td className="td1">2000</td>
										</tr>
								</table> */}
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-xs-12 col-md-4 col-sm-12 col-lg-4 top_gap">
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 chart_header3 graph_bot_pad no-pad">Token Usage</div>
						<div className="col-xs-12 no-pad chart_back_div boxShadow">
							<div className="app monthly">
							
							{/* <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 chart_header3 month_bot no-pad">MONTHLY USAGE</div> */}
								
								<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 month_bot no-pad">
									<div className="float_right">
										<span className="com_token_color token_color1"></span>
										<span className="token_text  token_right">TOKENS</span>
										<span className="com_token_color token_color2"></span>
										<span className="token_text">BURN RATE</span>
									</div>
								</div>
								<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 tokens no-pad"> Tokens</div>
								<span className="nov_icons"></span>
								<ReactHighcharts config={config} />
							</div>
						</div>
					</div>
					
					<div className="col-xs-12 col-md-4 col-sm-12 col-lg-4 top_gap ">
						<div className="col-xs-12 no-pad col-md-12 col-sm-12 col-lg-12 chart_header3 graph_bot_pad">Most Used Products</div>
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 chart_back_div no-pad boxShadow">
							<div className="app top_prod">
							
							{/* <div className="col-xs-12 no-pad col-md-12 col-sm-12 col-lg-12 chart_header3 month_bot">TOP PRODUCTS</div> */}
								
								<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad month_bot month_top">
									<span className="chart_btn_grp">
										<span className={this.state.fstChart?"token active_token":"token"} onClick={this.showChart1}>Tokens</span>
										<span className={this.state.fstChart?"token":"token active_token"} onClick={this.showChart2}>Users</span>
									</span>
								</div>
								<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">		
									{this.state.fstChart?<ReactHighcharts config={population}/>:<ReactHighcharts config={populations}/>}
								</div>
							</div>
						</div>
					</div>
					
				</div>:<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad blank_div">
					<h2>Comming Soon...</h2>
				</div>}		
					
					
					
					
				<div className="col-xs-12 col-md-8 col-sm-12 col-lg-8 no-pad float_clear">	
					<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top10 new_contents trcently_purchase">What's new in Autodesk Account</div>
							
							<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12  no-pad  btn_grp desktop_view">
								<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad div_hov">
									
									<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top10 li_bg par_hov ">
										<div className="col-xs-12 no-pad boxShadow bottom_back">
										
										<div className="com_back_li1 com_back_li1_left">
											<div className="com_back_li11">
												<div className="know_auto">Get to know your Autodesk Account</div>
												{/* <div className="normal_txt">Take a video tour</div> */}
												<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad btn_grp administrator_png">
												<img src="images/video.png" className="video_png" onClick={this.modalShow}/>
												{/* <div className="administrator" onClick={this.modalShow}></div>  */}
												</div>
											</div>
										</div>
										
										<div className="com_back_li1 com_back_li1_right">
											<div className="com_back_li11 no_border11 com_back_li11_border">
												<div className="know_auto">Take a quick look at the new features</div>
												<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad new_contents new_contents1">
													<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1">
													<a href="http://172.99.67.90/url/#/" target="blank">Sort users by role or status</a></li>
													<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
													<a href="http://172.99.67.90/url/#/" target="blank">Set down preference</a></li>
													<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
													<a href="http://172.99.67.90/url/#/" target="blank">Product view for user management</a></li>
													<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
													<a href="http://172.99.67.90/url/#/" target="blank">Product view for user management</a></li>
												</ul>
											</div>
										</div>
										</div>
										<div className="view_purchase">
											<span className="marg_bot"><a href="http://172.99.67.90/url/#/" target="blank" className="view_text">See all new features</a></span>
										</div>
										
									</li>

									
									
								</div>
							</ul>
					</div>
					
				
					
					<Modal className="admin_modal" show={this.state.popupShow} onHide={this.close} bsSize="large" aria-labelledby="contained-modal-title-lg">
						<div className="close_modal" onClick={this.close}></div>
						<Modal.Body className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no_pad administrator_pop_png">
							<div className="administrator_tour"></div> 
						</Modal.Body>
					</Modal>

				</div>
			</div>	
		</div>
		
		)
	}
});

module.exports = DashBoard;