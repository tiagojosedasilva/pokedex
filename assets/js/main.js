
function convertPokemonToHTML(pokemon){
    return`
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
        </div>
    </li>
    `
}

const pokemonsList = document.getElementById('pokemonList')

    pokeApi.getPokemons().then((pokemons = []) => {
        pokemonsList.innerHTML += pokemons.map(convertPokemonToHTML).join('')
    })
