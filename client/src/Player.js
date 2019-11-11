import React, { useEffect, useState } from 'react';

export default function Player(props) {
	const [thisPlayer, setThisPlayer] = useState([]);

	useEffect(() => {
		setThisPlayer(props);
	});

	const { data } = thisPlayer;

	return (
		<div className='player-card-wrapper'>
			{data
				? data.map((player, index) => (
						<div className='player-card' key={index}>
							<h1>{player.name}</h1>
						</div>
				  ))
				: null}
		</div>
	);
}
