import React, { useEffect, useState } from 'react';

export default function usePlayerDetails(state) {
	const [thisPlayer, setThisPlayer] = useState([]);

	useEffect(() => {
		setThisPlayer(state);
	});

	const { data } = thisPlayer;

	return data;
}
