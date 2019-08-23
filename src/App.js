import React from 'react';

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Display from './components/Display/Display';

import pokemonSpeciesData from './data/pokemonSpecies.js'
import languagesData from './data/pokemonLanguages'

class App extends React.Component {
  state = {
    pokemonSpecies: pokemonSpeciesData,
    pokemonEnglishNames: [],
    languages: languagesData,
    inputValue: '',
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  componentDidMount() {
    const pokemonActual = [];

    for(let i = 807; i != 0; i--) {
      pokemonActual.push({});
    }

    let counter = 1;
    let lang = "";

    this.state.pokemonSpecies.forEach(element => {
      if(element.pokemon_species_id === counter) {
        this.state.languages.forEach((e) => {
          if(element.local_language_id === e.id) {
            pokemonActual[counter][e.iso3166] = element.name
          }
        })
      }
      else {
        pokemonActual[counter].id = element.pokemon_species_id
        pokemonActual[counter].sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`
        counter = counter + 1
        this.state.languages.forEach((e) => {
          if(element.local_language_id === e.id) {
            pokemonActual[counter][e.iso3166] = element.name
          }
        })
      }
      console.log(pokemonActual)
    })
    
  }

 render() {
  return (
    <div className="App"> 
      <Navbar formHandler={this.handleChange} value={this.state.inputValue}/>  
      <Sidebar/>
      <Display/>
    </div>
  );
 }
}

export default App;
