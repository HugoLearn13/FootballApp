import React from 'react';
import Card from './Card';

const CardList = ({ footballers }) => {
	const cardArray = footballers.map((footballer, index) => {
		return <Card 
		key={index} 
		id={footballers[index].id} 
		name={footballers[index].name} 
		position={footballers[index].position} />
	})
	
	return (
		<div>
			{cardArray}
		</div>
	)
		
}
export default CardList;