import React from "react";
import usePlayerDetails from "./hooks/usePlayerDetails";

export default function Player(props) {
  const data = usePlayerDetails(props);

  return (
    <div className="player-card-wrapper">
      {data
        ? data.map((player, index) => (
            <div className="player-card" key={index}>
              <h1>Name: {player.name}</h1>
              <h3>Country: {player.country}</h3>
              <h4>Searches: {player.searches}</h4>
            </div>
          ))
        : null}
    </div>
  );
}
