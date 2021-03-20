import React from "react";
const Logo = (props) => {
  // console.log (props);
  return (
    <header>
      <h1>Welcome to the {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokemon"
      ></img>
    </header>
  );
};

const BestPokemon = (props) => {
    // console.log(props);
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((ability) => {
          return <li>{ability}</li>;
        })}
      </ul>
    </div>
  );
};

const CaughtPokemon = (props) => {  
  return <p>Caught 0 Pokemon on {props.date}</p>;
};

export { Logo, BestPokemon, CaughtPokemon };
