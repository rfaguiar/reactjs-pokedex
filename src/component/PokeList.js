import React, {Component} from 'react';
import PokeListItem from "./PokeListItem";

export default class PokeList extends Component {

    static defaultProps = {
        filter: ''
    }

    state = {
        pkmList: []
    }

    componentWillMount(){
        var pkmList = [
            {name: 'Charmander', number: '004'},
            {name: 'Pikachu', number: '025'},
            {name: 'Chikorita', number: '152'},
            {name: 'celebi', number: '251'},
            {name: 'Kyogre', number: '382'},
            {name: 'Lucario', number: '448'},
        ];

        this.setState({pkmList})
    }

    render(){
        var state = this.state;
        var props = this.props;

        return(
          <ul className={"poke-list"} id={"pokeList"}>
              {
                  state.pkmList
                      .filter(pkm => pkm.name.indexOf(props.filter) !== -1)
                      .map(pkm => <PokeListItem pkm={pkm} key={pkm.number}/>)
              }
          </ul>
        );
    }

}