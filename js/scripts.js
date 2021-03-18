// pokemon IIFE repository list
let pokemonRepository = (function (){
   let pokemonList = [
        {name: 'bulbasaur', height: '0.7', type: 'grass'},
        {name: 'charmander', height: '0.6', type: 'fire'},
        {name: 'squirtle', height: '0.5', type: 'water'}
    ];

        function add(pokemon) {
            pokemonList.push(pokemon);
        }

        function getAll() {
            return pokemonList;
        }
        return {
            add: add,
            getAll: getAll
        };
})();

console.log(pokemonRepository.getAll());

// forEach() Loop with the declaration moved 
 function showPokemon(pokemon) {
    document.write(pokemon.name + ', is ' + pokemon.height + 'm, ' + pokemon.type + '.' + '<br />');
} 
 
pokemonRepository.getAll().forEach(showPokemon)








/*
//printArrayDetails funcion declaration
function printArrayDetails(){
    // loop to display pokemonList 
    for (let i=0; i < pokemonList.length; i++){
        if(pokemonList[i].height <= 0.6)
    document.write(pokemonList[i].name + " \(height: " + pokemonList[i].height + "m\)\, " + "<br />")
        else{
        document.write(pokemonList[i].name + " \(height: " + pokemonList[i].height + "m\)\ " + "-Wow, that's BIG," + "<br />")
        }
    }
} 
*/