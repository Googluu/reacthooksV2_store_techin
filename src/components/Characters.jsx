import React, { useState, useEffect, useReducer } from "react";
import "./RickCard.css";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .then((data) => setCharacters(data.location));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  return (
    <>
      <div>
        {favorites.favorites.map((favorite) => (
            <li key={favorite.id}>{favorite.name}</li>
        ))}
      </div>
      <div className="Characters">
        {characters.map((character) => (
          <div className="item" key={character.id}>
            <h2>
              {<img src={character.image} alt={character.name} className />}
              <br />
              <h3>{character.name}</h3>
              <p>{character.status}</p>
              <p>{character.gender}</p>
              <p>{character.species}</p>
              <p>{character.location.name}</p>
            </h2>
            <button type="button" onClick={() => handleClick(character)}>
              Agregar a Favoritos
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
