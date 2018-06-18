var PokeApi = {
    get url() {
        return '//dev.treinaweb.com.br/pokeapi/';
    },
    pkmList: [],
    listAll: function(){
        return fetch(`${this.url}pokedex/1`)
            .then(response => response.json())
            .then(result => result.pokemon)
            .then(pkmList => {
                return pkmList.map(pokemon => {
                    pokemon.number = this.getNumberFromURL(pokemon.resource_uri);
                    return pokemon;
                })
                    .filter(pokemon => parseInt(pokemon.number) < 1000)
                    .sort((a, b) => (a.number > b.number ? 1 : -1))
                    .map(pokemon => {
                        pokemon.number = ("000" + pokemon.number).slice(-3);
                        return pokemon;
                    })
            })
            .then(pkmList => {
                this.pkmList = pkmList;
                return pkmList;
            })
    },
    getPkm: function(pkm){
        return fetch(`${this.url}pokemon/${pkm.number}`)
            .then(response => response.json());
    },
    getNumberFromURL: function(url){
        return parseInt(url.replace(/.*\/(\d+)\/$/,'$1'));
    }
}

export default PokeApi;