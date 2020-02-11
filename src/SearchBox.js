import React from 'react';

const SearchBox = ({searchBox, searchChange}) => {

	return (
		<div>
			<input 
			type="search" 
			className="bg-light-gray br4 pa2 mb3"
			placeholder="Search..."
			onChange={searchChange}/>
		</div>
	)
}
export default SearchBox;