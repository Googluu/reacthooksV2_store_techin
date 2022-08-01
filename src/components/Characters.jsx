import React, { useState, useEffect } from "react";
import "./RickCard.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .then((data) => setCharacters(data.location));
  }, []);
  return (
      <div className="Characters">
        {characters.map((character) => (
          <h2>
            {<img src={character.image} alt={character.name} className />}
            <br />
            <samp>{character.name}</samp>
            <br />
            <samp>{character.status}</samp>
            <br />
            <samp>{character.gender}</samp>
            <br />
            <samp>{character.species}</samp>
            <br />
            <samp>{character.location.name}</samp>
            <br />
          </h2>
        ))}
      </div>
  );
};

export default Characters;
