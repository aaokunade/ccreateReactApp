import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
  const updateCity = (event) => {
    // console.log(event);
    setCity(event.target.value)
  }

  return (
    <div>
        <input onChange = {updateCity} type="text" value={city}/>
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
