import React from 'react';
import Card from './Card';

//CardList is accepting a robots prop from App.js
const CardList = (props) => {
	
	//const { name, email, id} = props;
	const { robots } = props;

//.map is loop through an array

// const cardComponent = robots.map ((Child, index) => {
// 	return <Card 
// 		key={index}
// 		id={robots[index].id} 
// 		name={robots[index].name} 
// 		email={robots[index].email}/> 
// })


	return (

	<div className='tc'> 

		<p></p>
		{
			robots.map ( (Child, index) => {
			return <Card 
						key={index}
						id={robots[index].id} 
						name={robots[index].name} 
						email={robots[index].email}/>
			})
		}
	</div>
	)
}

/* instead of returning {cardComponent} */
export default CardList;