// pokemon IIFE repository list
let pokemonRepository = (function (){
   let repository = [
        {name: 'bulbasaur', height: '0.7', type: 'grass'},
        {name: 'charmander', height: '0.6', type: 'fire'},
        {name: 'squirtle', height: '0.5', type: 'water'}
    ];

        function add(pokemon) {
            repository.push(pokemon);
        }

        function getAll() {
            return repository;
        }
        function addListItem(pokemon){
            let pokemonList = document.querySelector(".pokemon-list");
            let listPokemon =  document.createElement("li");
            let button = document.createElement("button");
            //event listener
            button.addEventListener('click', function(){
                showDetails(pokemon);
            }); 
            button.innerText = pokemon.name;
            button.classList.add("button-class");
            listPokemon.appendChild(button);
            pokemonList.appendChild(listPokemon);
        }   
        //manual addition pokemon information
        function showDetails(pokemon){
            console.log(pokemon);
        }
        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem
        };
})();

console.log(pokemonRepository.getAll());


pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
