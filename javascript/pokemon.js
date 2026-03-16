async function getPokemon() { 
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await response.json();
     console.log(data.name); 
    } 
getPokemon()