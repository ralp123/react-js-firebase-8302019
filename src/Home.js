import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ImageUploader from 'react-images-upload';
import firebase from 'firebase';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Img from 'react-image';
import { loadData, loadDetails, Click, LoadD } from './DataModels';
import { getUsers } from './DataModels1';
const axios = require('axios');


class Home extends Component {

	constructor(props){
		super(props);

		this.state = {
			isLoading: true,
			postDetails: ''
		}
	}

	componentDidMount(){
		console.log('componentDidMount');
		this.postD();

		let id = 2
		getUsers(id)
         	.then((res) => {
				console.log(res.data);
		})
	}

	componentDidUpdate(){
		console.log('componentDidUpdate');
	}

	postD = () =>{    
		axios.get('https://reactjs-test-a2133.firebaseio.com/post.json')
		.then(response => {
			// handle success
			let data = response.data;
			if(response.status === 200){
				this.setState({
					isLoading: false,
					postDetails: data.sort((a, b) => a - b).reverse()
				});
			}
		})
		.catch(error => {
			console.log(error);
		})
		.finally(val => {
			//always executed
			//console.log(val);
		});
	} 

	tableDetail = () =>{    
		let postDetails = this.state.postDetails;
		let isLoading = this.state.isLoading;
		let tableDetail;

		//postDetails.sort((a, b) => a - b).reverse()

		if(isLoading === true){
			tableDetail = <div class="spinner-border"></div>;
		}else{
			tableDetail = Object.keys(postDetails).map((i) => (
				<div className="post-padding-bottom-25" key={i}>
					<h2>{ postDetails[i].title }</h2>
					<h5>{ postDetails[i].author }, { postDetails[i].date }</h5>
					<img src={require(''+postDetails[i].img_path+'')} />
					<p>{ postDetails[i].content }</p>
				</div>
			))
		}
		
		return (
			<>
				{tableDetail}
			</>
		);
	} 

	render() {
		let tableDetail = this.tableDetail();
		let test123;
		//console.log(getUSers1);
		//test123 = getUSers1.then(response => {
			
			//working code//
			//console.log(response.status);
		//})
		// let test123 = [
		// 	{title : 1},{2},{3}
		// ]
		// console.log(test123);
		// let test12345 = JSON.parse(test123);

		// tableDetail= test123.map((value, i) => 
		// 	<li>{value}</li>
		// );

		return (
            <>
				<div className="container-fluid">
					<Carousel showThumbs={false} showStatus={false}>
						<div>
							<img src={require('./images/img1.png')} />
							{/* <p className="legend">Legend 1</p> */}
						</div>
						<div>
							<img src={require('./images/img2.jpg')} />
							{/* <p className="legend">Legend 2</p> */}
						</div>
						<div>
							<img src={require('./images/img3.png')} />
							{/* <p className="legend">Legend 3</p> */}
						</div>
					</Carousel>
					<br />
					<>
						{tableDetail}
					</>

				</div>
            </>			
		);
	}	
}

export default Home;
