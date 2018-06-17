import React, { Component } from 'react';
import './App.css';
import PokeList from './component/PokeList';

class App extends Component {

    state = {
        filter: ''
    }

    setFilter(event){
        this.setState({filter: event.target.value});
    }

  render() {
        var state = this.state;
        return (
          <div className="App">
              <img className="pokeball-back" id="pokeballBack" src="//hanashiro.github.io/pokedex/images/pokeball.svg" alt=""/>
              <input type="text" id="pokeFilter" placeholder="Search" onKeyUp={this.setFilter.bind(this)}/>
              <PokeList filter={state.filter}/>

          </div>
        );
  }
}

export default App;
