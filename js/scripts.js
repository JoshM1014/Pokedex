/* console.log() & document.write() */
// pokemon object 
let pokemonList = [
    {name: 'bulbasaur', height: '0.7', type: 'grass'},
    {name: 'charmander', height: '0.6', type: 'fire'},
    {name: 'squirtle', height: '0.5', type: 'water'}
];
    //printArrayDetails funcion declaration
function printArrayDetails(){
    // loop to display pokemonList */
    for (let i=0; i < pokemonList.length; i++){
        if(pokemonList[i].height <= 0.6)
    document.write(pokemonList[i].name + " \(height: " + pokemonList[i].height + "m\)\, " + "<br />")
        else{
        document.write(pokemonList[i].name + " \(height: " + pokemonList[i].height + "m\)\ " + "-Wow, that's BIG," + "<br />")
        }
    }
}