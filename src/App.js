import React, {Component} from 'react';
import './App.css';
import PokeList from './component/PokeList';
import {Route} from "react-router-dom";
import PokeInfo from "./component/PokeInfo";

class App extends Component {

    state = {
        filter: ''
    }

    setFilter(event){
        this.setState({filter: event.target.value});
    }

    componentDidMount(){
        var pokeballElement = document.getElementById('pokeballBack');

        window.onscroll = function(){
            var rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;
            pokeballElement.style.transform = rotation;
        }
    }

  render() {
        var state = this.state;
        return (
          <div className="App">
              <img className="pokeball-back" id="pokeballBack" src="//hanashiro.github.io/pokedex/images/pokeball.svg" alt=""/>
              <input type="text" id="pokeFilter" placeholder="Search" onKeyUp={this.setFilter.bind(this)}/>
              <Route exact path={"/"} render={() => <PokeList filter={state.filter}/>}/>
              <Route exact path={"/:pokeNumber"} component={PokeInfo}/>
          </div>
        );
  }
}

export default App;
