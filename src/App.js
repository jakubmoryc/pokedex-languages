import React from 'react';

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Display from './components/Display/Display';

import POKEMON_DATA from './data/data'
{/* WARNING: THE FIRST ELEMENT OF ABOVE ARRAY IS EMPTY */}


class App extends React.Component {
  state = {
    inputValue: '',
    pokemonData: POKEMON_DATA 
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  componentDidMount = () => {

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
