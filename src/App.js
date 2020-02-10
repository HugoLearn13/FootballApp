import React, {Component} from 'react';
import Card from './Card';
import {footballers} from './footballers';

class App extends Component {

	constructor(){
		super();
	}

	render() {
		return (
			<div className ="tc">
				<h1>"Top footballers"</h1>
				<Card id={footballers[0].id} name={footballers[0].name} position={footballers[0].position} />
				<Card id={footballers[1].id} name={footballers[1].name} position={footballers[1].position} />
				<Card id={footballers[2].id} name={footballers[2].name} position={footballers[2].position} />
				<Card id={footballers[3].id} name={footballers[3].name} position={footballers[3].position} />
				<Card id={footballers[4].id} name={footballers[4].name} position={footballers[4].position} />
			</div> 
		)
	}
}
export default App;