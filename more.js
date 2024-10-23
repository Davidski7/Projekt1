// Forklar min kode så den giver mere mening for mig selv og havd de forskellige ting gøre og deres betydning

let offset = 0;  // Her laver jeg en Variabel til at holde styr på hvor jeg starter med at hente Pokémon-data fra API'et.
const limit = 20;  // Her siger jeg hvor mange Pokémoner vi henter per gang.

// Vi går ind og tager fat i vores kanpper fra HTML
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", () => {
    if (offset >= limit) {  // Her sørg jeg for at kun gå tilbage hvis offset er større end eller lig med limit.
        offset -= limit;  // Her trækker jeg 20 fra offset for at hente den forrige side af Pokémoner.
        loadPokemons();  // Her opdater jeg listen ved at hente Pokémonerne igen.
    }
});

nextBtn.addEventListener("click", () => {
    offset += limit;  // Her lægger jeg 20 til offset for at gå til næste side af Pokémoner.
    loadPokemons();  // Her opdater jeg listen ved at hente Pokémonerne igen.
});

loadPokemons();  // Her indlæser den det første sæt Pokémoner når siden åbnes.
// Her laver vi en function med navnet loadPokemons
function loadPokemons() {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)  // Her henter jeg Pokémon-data fra API'et ved hjælp af min offset og limit.
        .then(response => response.json())  // Det her ændre svaret til JSON-format.
        .then(data => {
            const pokemonList = document.getElementById('pokemon-list');  // Her går jeg ind og finder elementet hvor Pokémon-listen skal vises.
            pokemonList.innerHTML = '';  // Tømmer listen før den opdateres.
            
            data.results.forEach(pokemon => {  // Her søger jeg får den går igennem hver Pokémon i den hentede data.
                const pokemonLink = document.createElement('a');  // Her opretter jeg et link til hver Pokémon til den nye side.
                pokemonLink.href = `detail.html?name=${pokemon.name}`;  // Her laver jeg et link til min detalje side som viser den valgte Pokémon.
                pokemonLink.textContent = pokemon.name;  // Her får jeg den til at vise navnet på Pokémonen.

                pokemonList.appendChild(pokemonLink);  // Her tilføjer jeg et link til listen.
                pokemonList.appendChild(document.createElement('br'));
            });

            document.getElementById("prev-btn").disabled = offset === 0;  // Her deaktiverer jeg forrige-knappen hvis jeg er på side 1.
            document.getElementById("next-btn").disabled = !data.next;  // Her deaktiverer jeg næste-knappen hvis der ikke er flere Pokémoner at hente.
        });
}
