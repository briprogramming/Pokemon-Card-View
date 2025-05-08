document.addEventListener("DOMContentLoaded", () => {
fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("pokemon-container");
        data.results.forEach((pokemon, index) => {
            
            const col = document.createElement("div");
            col.className = "col-md-4 mb-4";

            
            const card = document.createElement("div");
            card.className = "card text-center";

            
            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            
            const title = document.createElement("h5");
            title.className = "card-title";
            title.textContent = `${index + 1}. ${pokemon.name}`;

            
            const link = document.createElement("a");
            link.href = pokemon.url;
            link.className = "btn btn-primary";
            link.textContent = "View Details";

            
            cardBody.appendChild(title);
            cardBody.appendChild(link);
            card.appendChild(cardBody);
            col.appendChild(card);

           
            container.appendChild(col);
        });
    })
})
