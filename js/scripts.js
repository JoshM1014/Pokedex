// Pokemon Repository List
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  function getAll() {
      return pokemonList;
  }
  // insert pokemonList into Html
  function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listPokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listPokemon.appendChild(button);
      pokemonList.appendChild(listPokemon);
      button.addEventListener("click", function(event) {
        console.log(event)
        showDetails(pokemon);
      });
    }

  //loadList function
  function loadList() {
    return fetch(apiUrl).then(function (pok) {
      return pok.json();
    }).then(function (json) {
      //json list includes 'result' as the whole array
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  // Load Details function
  function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

   function  showDetails(item){
      pokemonRepository.loadDetails(item).then(function(){
          console.log(item);
      });
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

// Modal Function to appear
function showModal(){
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.add('is-visible')
}

document.querySelector('#show-modal').addEventListener('click', () =>{
  showModal();
})

// defining modalContainer
let modalContainer = document.querySelector('#modal-container');

  function showModal(title, text) {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.innerHTML = '';
  let modal = document.createElement('div');
  modal.classList.add('modal');
  modalContainer.classList.add('is-visible');
  
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText='close';
  closeButtonElement.addEventListener('click', hideModal)

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    //close modal with escape button
    window.addEventListener('keydown', (e) =>{
      let modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && modalContainer.ClassList.contains('is-visible')){
        hideModal();
      }
    }); 
    modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});
}

function hideModal(){
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal ('This is the Modal Title', 'This is the modal content!');
});

