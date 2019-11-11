import React, { Component } from 'react';
import axios from 'axios';
import Player from './Player.js';
import './App.css';

export default class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/players')
			.then(response => {
				this.setState({
					data: response.data
				});
			})
			.catch(error => {
				console.log('ERROR:', error);
			});
	}

	render() {
		const { data } = this.state;
		return (
			<div className='App'>
				<Player data={data} />
			</div>
		);
	}
}
