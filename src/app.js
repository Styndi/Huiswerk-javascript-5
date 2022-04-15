import axios from "axios";

console.log('doet mijn Javascript het?');

//GET request https://restcountries.com/v2/all

// 1. installeer de dependency axios (npm install axios) !
// 2. schrijf een asynchrone functie !
// 3. maken een GET request met axios (await) !
// 4. Try/catch blok om de errors af te vangen !
// 5. Maak een element in de HTML die referentie opslaat vanuit de JS !
// 6. De data injecteren via (map-Methode) !
// 7.


// )};
/*const countryList = document.getElementById('countries');
const errorMessage = document.getElementById('error');*/

const errormessage = document.getElementById('error')
async function fetchCountries() {
    try {
        //het request maken
        const resultWorld = await axios.get('https://restcountries.com/v2/all');
        const countries = resultWorld.data;
        //const populations = resultWorld.data;

        countries.sort((a, b) => {
            return a.population - b.population;
        });


        createList(countries);
        //populationList(populations)
        console.log(resultWorld);



        //console.log('voorbeeld resultworld data', resultWorld.data)
        //console.log(resultWorld.data.population)


        //countriesList.innerHTML = `<li> dit zijn de landen : ${resultWorld.data[0].name} </li>`;
        //countryPopulation.innerHTML = `<li>heeft een populatie van ${resultWorld.data[0].population} mensen</li>`;


    } catch(error) {

        //errors afvangen
        console.error(error);

        console.log(error.response);
        // errors communiceren in de UI
        if (e.response.status === 500){

            errorMessage.textContent = "Er ging iets mis in de server!";

        } else if (e.response.status === 404) {

            errorMessage.textContent = "Het verzoek is mislukt";

        }

    }

}
fetchCountries();


function createList(countries) {
    const countriesList = document.getElementById('countriesList');

    countriesList.innerHTML = countries.map((country) => {
        return `
<img src="${country.flag}" alt="${country.name}"/>
<span class="${switchFunction(country.region)} ">${country.name}  

        </span>
<p>has a population of: ${country.population} </p>`



    })
}
/*function populationList(populations) {
    const popList = document.getElementById('countryPopulation');

    popList.innerHTML = populations.map((population) => {
        return `<span> ${population.sort()}</span>`
    })
}*/

/*function populationList(population) {


    countriespopulations.innerHTML = population.sort(a, b)
}*/
function switchFunction(countryRegion) {
    switch (countryRegion) {
        case 'Africa':
            return 'africa';
        case 'Americas':
            return 'americas';
        case 'Asia':
            return 'asia';
        case 'Europe':
            return 'europe'
        case 'Oceania':
            return 'oceania';
        case 'Antarctic':
            return 'antarctic';
        case 'Antarctic Ocean':
            return 'antarcticOcean';
        case 'Polar':
            return 'polar'
    }
}
