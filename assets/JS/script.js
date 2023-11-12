


const pokemonList = document.getElementById('pokemonList')
const button = document.getElementById('loadmore')
const limit = 5
let offset = 0

function loadPokemon(offset, limit) {
    function convertPokemonHTML(pokemon) {
        return ` <li class="pokemon ${pokemon.type}" >
                <span class="name">${pokemon.name} </span>
                <span class="number">#${pokemon.number}</span>

                <div class="details">
                    <ol class="types">
                      ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>
                <img src="${pokemon.photo}"
                alt="${pokemon.name}">
            </li>`;

    }

    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonHTML).join('')

    })
}

loadPokemon(offset, limit)

button.addEventListener('click', () => {
    offset += limit
    loadPokemon(offset,limit)

})





