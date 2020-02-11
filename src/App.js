import React, {Component} from 'react';
import CardList from './CardList';
import {footballers} from './footballers';
import SearchBox from './SearchBox'

class App extends Component {

	constructor(){
		super();
		this.state = {
			footballers: footballers, 
			searchBox: ''
		};
	}

	updateOnSearch = (event) => {
		this.setState({searchBox: event.target.value});
	}

	render() {
		const filterFootballers = footballers.filter(footballer => {
			return footballer.name.includes(this.state.searchBox);
		});

		return (
			<div className ="tc">
				<h1 className="ttu">Top footballers</h1>
				<SearchBox searchChange={this.updateOnSearch} value={this.state.searchBox} />
				<CardList footballers={filterFootballers}/>
			</div> 
		)
	}
}
export default App;