// Forklar min kode så den giver mere mening og havd de forskellige ting gøre og deres betydning

// Jeg fetcher data fra Pokémon API'et
fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(function (response) {
        // Det her ændre svaret til JSON-format så jeg nemmer kan arbejde med det
        return response.json();
    })
    .then(function (data) { 
        // Jeg tager fat i min div med idet 'pokemon-list' hvor jeg vil vise listen af Pokémoner
        const pokemonList = document.getElementById('pokemon-list');
        
        // Jeg gennemgår hver Pokémon i results-listen som jeg har hentet fra API'et
        data.results.forEach(function (pokemon) {
            // Jeg opretter et link-element til hver Pokémon
            const pokemonLink = document.createElement('a');
            // Jeg sætter href-attributten til en detalje-side med Pokémonens navn som query-parameter
            pokemonLink.href = `detail.html?name=${pokemon.name}`;
            // Jeg viser Pokémonens navn som link-tekst
            pokemonLink.textContent = pokemon.name;

            // Jeg tilføjer linket til 'pokemon-list'-elementet
            pokemonList.appendChild(pokemonLink);
            pokemonList.appendChild(document.createElement('br'));
        });
    });

  
