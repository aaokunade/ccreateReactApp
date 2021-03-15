import React from "react";
import {Logo, BestPokemon,CaughtPokemon} from "./Pokemon";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();
function App(){
    return  (<div>
    <Logo appName = "Aaishah's Pokedex"/>
    <BestPokemon abilities = {abilities}/>
    <CaughtPokemon date = {date}/>
  </div>)  
}

export default App;