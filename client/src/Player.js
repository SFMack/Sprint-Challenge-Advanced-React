import React, { useEffect, useState } from 'react';

export default function Player(props) {
	const [thisPlayer, setThisPlayer] = useState([]);

	useEffect(() => {
		setThisPlayer(props);
	});

	const { data } = thisPlayer;
	console.log(data);

	return (
		<div className='player-card-wrapper'>
			{data
				? data.map((player, index) => (
						<div className='player-card' key={index}>
							<h1>Name: {player.name}</h1>
							<h3>Country: {player.country}</h3>
							<h4>Searches: {player.searches}</h4>
						</div>
				  ))
				: null}
		</div>
	);
}
