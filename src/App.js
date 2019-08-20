import React from 'react';

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Display from './components/Display/Display';

class App extends React.Component {
  state = {
    pokemonSpecies: {},
  }

  componentDidMount() {
    
  }

 render() {
  return (
    <div className="App"> 
      <Navbar/>  
      <Sidebar/>
      <Display/>
    </div>
  );
 }
}

export default App;
