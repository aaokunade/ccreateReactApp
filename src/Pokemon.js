import react from "react";
import React, {useState} from "react";
const PokemonArray = ["Elmo", "Ellie", "Cookie","Fred","Harry","George","Hagrid","Hermoine","Ron",]
function GetRandomPokemon(){
return PokemonArray[Math.floor(Math.random()*PokemonArray.length)]
}


const Logo = (props) => {
  // console.log (props);
  return (
    <header>
      <h1>Welcome to the {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokemon" onClick = {props.handleClick}
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
        {props.abilities.map((ability, i) => {
          return <li key = {i}>{ability}</li>;
        })}
      </ul>
    </div>
  );
};

const CaughtPokemon = (props) => {  
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("")
  
  
  function catchPokemon() {
    setCaught ((caught) => caught.concat(pokemonNameInput))
    setPokemonNameInput((caught) => "")
  }

  const handleInputChange = (event) => {
    const InputValue = event.target.value
    if(InputValue){
    setPokemonNameInput(InputValue)
    } else {}
  }
  return <div>
    <p>Caught {caught.length} Pokemon on {props.date}</p>
    <input onChange = {handleInputChange} type="text" value = {pokemonNameInput} />
  <button onClick = {catchPokemon}>Catch</button>
  <ul>
    {caught.map(element => <li>{element}</li>)}
  </ul>
  </div>
};

export { Logo, BestPokemon, CaughtPokemon };
