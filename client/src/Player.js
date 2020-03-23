import React from 'react';
import usePlayerDetails from './hooks/usePlayerDetails';
// import getPlayerIcon from './hooks/getPlayerIcon';
import styled from 'styled-components';

export default function Player(props) {
	const data = usePlayerDetails(props);
	// const icon = getPlayerIcon(props);
	// console.log(icon);

	const PlayerCardContainer = styled.div`
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		align-content: center;
	`;

	const PlayerCardWrapper = styled.div`
		flex-basis: 20%;
		text-align: center;
		border: 1px solid lightgrey;
		margin: 1rem 0;
		border-radius: 1rem;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	`;

	const PlayerImage = styled.img`
		margin-top: 1rem;
		border-radius: 1rem;
	`;

	const PlayerCardName = styled.h1`
		margin: 0.5rem 0;
		width: 100%;
	`;

	const PlayerCardCountry = styled.h3`
		margin: 0.5rem 0;
	`;

	const PlayerCardSearches = styled.h4`
		margin: 1rem 0;
	`;

	return (
		<PlayerCardContainer>
			{data
				? data.map((player, index) => (
						<PlayerCardWrapper key={index}>
							<PlayerImage src={player.profileImage} />
							<PlayerCardName>{player.name}</PlayerCardName>
							<PlayerCardCountry>{player.country}</PlayerCardCountry>
							<PlayerCardSearches>
								Searches: {player.searches}
							</PlayerCardSearches>
						</PlayerCardWrapper>
				  ))
				: null}
		</PlayerCardContainer>
	);
}
