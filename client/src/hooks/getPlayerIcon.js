import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function usePlayerProfileIcon(player) {
	const [thisProfileIcon, setThisProfileIcon] = useState('');

	useEffect(() => {
		axios
			.get('https://api.adorable.io/avatars/200/abott@adorable.png')
			.then(response => {
				console.log(response);
				// setThisProfileIcon(response);
			})
			.catch(error => {
				console.log('ERROR:', error);
			});
	});

	return thisProfileIcon;
}
