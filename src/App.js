import React from "react";
import {Logo, BestPokemon,CaughtPokemon} from "./Pokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity.js";
const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();
const logWhenClicked = () => {
  console.log("hi from logo");
}


function App(){
    return  (<div>
    <Logo appName = "Aaishah's Pokedex" handleClick={logWhenClicked}/>
    <BestPokemon abilities = {abilities}/>
    <CaughtPokemon date = {date}/>
    <PokemonMovesSelector/>
    <PokemonCity/>
  </div>)  
}

export default App;