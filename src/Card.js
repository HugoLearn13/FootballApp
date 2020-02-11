import React from 'react';

const Card = ({id, name, position}) => {
		return (
			<div className = "bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
				<img alt="footballers" src={`https://robohash.org/${id}?size=200x200`}/>
				<div>
					<h2>{name}</h2>
					<h3>{position}</h3>
				</div>
			</div>
			);
}
export default Card;
