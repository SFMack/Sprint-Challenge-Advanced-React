import React from 'react';
import usePlayerDetails from './hooks/usePlayerDetails';
import styled from 'styled-components';

export default function Player(props) {
	const data = usePlayerDetails(props);

	const PlayerCardContainer = styled.div`
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		align-content: center;
	`;

	const PlayerCardWrapper = styled.div`
		flex-basis: 25%;
		text-align: center;
		border: 1px solid grey
		margin: 1rem 0.1rem;
		border-radius: 1rem;
	`;

	const PlayerImage = styled.img``;

	return (
		<PlayerCardContainer>
			{data
				? data.map((player, index) => (
						<PlayerCardWrapper key={index}>
							<PlayerImage src={player.profileImage} />
							<h1>{player.name}</h1>
							<h3>{player.country}</h3>
							<h4>Searches: {player.searches}</h4>
						</PlayerCardWrapper>
				  ))
				: null}
		</PlayerCardContainer>
	);
}
