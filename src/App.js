import React from 'react';

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Display from './components/Display/Display';

import POKEMON_DATA from './data/data'
/* WARNING: THE FIRST ELEMENT OF ABOVE ARRAY IS EMPTY */


class App extends React.Component {
  state = {
    inputValue: '',
    pokemonData: POKEMON_DATA,
    results: []
  }
  
  componentDidMount = () => {

  }

  getResults = () => {
    if(!this.state.inputValue) {
      return []
    }
    else {
      return this.state.pokemonData.filter(item => {
        return item.us.toLowerCase().includes(this.state.inputValue.toLowerCase())
       })
    }
  }


  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      results: this.getResults(),
    })
  }


 render() {
  return (
    <div className="App"> 
      <Navbar 
        formHandler={this.handleChange}
        submitHandler={this.handleSubmit}
        value={this.state.inputValue}/>  
      <Sidebar/>
      <Display results={this.state.results}/>
    </div>
  );
 }
}

export default App;
