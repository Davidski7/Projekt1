// Forklar min kode så den giver mere mening og havd de forskellige ting gøre og deres betydning

// Jeg opretter et URLSearchParams-objekt for at hente parametrene fra URL'en
const urlParams = new URLSearchParams(window.location.search);
// Jeg henter 'name'parameteren fra URL'en som jeg bruger til at hente data for den valgte Pokémon
const pokemonName = urlParams.get('name'); 

// Jeg fetcher data fra Pokémon API'et for den specifikke Pokémon baseret på navnet
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(function (response) {
        // Det her ændre svaret til JSON-format så jeg nemmer kan arbejde med det
        return response.json();
    })
    .then(function (data) {
        // Jeg tager fat i min div med idet 'pokemon-detail' hvor vi vil vise Pokémon-detaljerne
        const pokemonDetail = document.getElementById('pokemon-detail');
        
        // Hvis elementet 'pokemon-detail' eksisterer opdaterer jeg dets indhold
        if (pokemonDetail) {
            // Jeg opdaterer min HTML i 'pokemon-detail' med Pokémonens detaljer:
            // - Navn
            // - Billede(vidste ikke hvad jeg skulle putte ind der så det fandt jeg ud af)
            // - Højde, vægt, base experience og typer
            pokemonDetail.innerHTML = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Højde: ${data.height}</p>
                <p>Vægt: ${data.weight}</p>
                <p>Base Experience: ${data.base_experience}</p>
                <p>Typer: ${data.types.map(type => type.type.name).join(', ')}</p>
            `;
        }
    });

       










