import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Display from './components/Display/Display'

import POKEMON_DATA from './data/data'

class App extends React.Component {
  state = {
    inputValue: '',
    pokemonData: POKEMON_DATA,
    results: [],
    isLoading: false
  }

  getResults = () => {
    if(!this.state.inputValue) {
      this.fakeLoad()
      return []
    }
    else {
      if(+this.state.inputValue) { // Check whether its a number
        this.fakeLoad()
        return this.state.pokemonData.filter(item => {
          return item.id === +this.state.inputValue
        })
      } else {
        this.fakeLoad()
        return this.state.pokemonData.filter(item => {
          return item.us.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })
      }
    }
  }

  fakeLoad = () => {
    this.setState({
      isLoading: true
    })
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    },300)
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
      <Display 
        results={this.state.results}
        isLoading={this.state.isLoading}
      />
    </div>
  );
 }
}

export default App;
