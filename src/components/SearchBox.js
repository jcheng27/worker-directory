import React from 'react';

const SearchBox = ({dynamicSearch}) => {
	return (
	<div className='pa2'>
		<input 
			className='pa3 ba b--gren bg-lightest-blue'
			type='search' 
			placeholder='Search for User'
			onChange={dynamicSearch} />
	</div>
	);
}

export default SearchBox;