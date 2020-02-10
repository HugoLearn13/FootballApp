import React, {Component} from 'react';

class Card extends Component {
	constructor(props){
		super(props);
		// this.id = id;
		// this.name = name;
		// this.position = position;
	}

	render(){
		const {id, name, position} = this.props;
		return (
			<div className = "bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
				<img alt="footballers" src={`https://robohash.org/${id}?size=200x200`}/>
				<div>
					<h2>{name}</h2>
					<h3>{position}</h3>
				</div>
			</div>
			)
	}
}

export default Card;