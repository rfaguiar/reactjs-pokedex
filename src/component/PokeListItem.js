import React, {Component} from 'react';

export default class PokeListItem extends Component {

    static defaultProps = {
        pkm: {}
    }

    render() {
        var props = this.props;
        var pkm = props.pkm;

        return (
          <li className="poke-list-item">
              <img src={`//serebii.net/pokedex-xy/icon/${pkm.number}.png`}/>
              <span>{pkm.number} - {pkm.name}</span>
          </li>
        );
    }
}