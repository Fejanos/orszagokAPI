fetch('https://api.sampleapis.com/countries/countries')
    .then(response => response.json())
    .then(data => {
        const countries = {};
        data.forEach((country, index) => {
            countries[`country_${country.id}`] = country;
        });

        console.log(countries);
        // betöltés függvény hívás
        loadCards(countries);
    })
    .catch(error => console.log('Hiba: ', error));


function loadCards(countries){
    const cardContainer = document.getElementById('card-container');

    // Hiba esetén visszatér
    if(!countries || Object.keys(countries).length === 0){
        console.error('Hiba: Nincsenek országok!');
        return;
    }

    // Végig lépkedünk az országokon
    for(const key in countries){
        // új kártya létrehozása minden iterációban
        const card = document.createElement('div'); // új div létrehozása
        card.classList.add('card'); // .card osztály hozzárendelése az új div-hez
        card.innerHTML = `
        <h2>${countries[key].name}</h2>
        <img src="${countries[key].media.flag}" alt="${countries[key].name}_zaszlo">
        <p><strong>Főváros:</strong> ${countries[key].capital}</p>
        <p><strong>Pénznem:</strong> ${countries[key].currency}</p>
        <p><strong>Rövidítés:</strong> ${countries[key].abbreviation}</p>`;

        // kártya hozzáadása a container-hez
        cardContainer.appendChild(card);
    }
    
    /* Házi feladat:
    - embléma
    - telefon
    - populáció
    rákattintva az adott ország kártyára POPUP ablakként - bezárható legyen
    */

}