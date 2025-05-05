fetch('https://api.sampleapis.com/countries/countries')
    .then(response => response.json())
    .then(data => {
        const countries = {};
        data.forEach((country, index) => {
            countries[`country_${country.id}`] = country;
        });

        console.log(countries);
    })
    .catch(error => console.log('Hiba: ', error));