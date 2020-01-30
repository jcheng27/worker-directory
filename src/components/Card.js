import React from 'react';

const Card = (props) => {
	const { name, email, id } = props;
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

	{/* make sure that you use back ticks `` and not single quotes '' 
		<img alt='photos' src={`https://robohash.org/${id}?200x200`} />
	*/}
			<img alt='photos' src={`https://picsum.photos/id/${id}/200/200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<p>{id}</p>
			</div>
		</div>
	)
}

export default Card;