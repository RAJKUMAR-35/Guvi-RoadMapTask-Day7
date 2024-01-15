// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//Print the total population of countries using reduce function

var detailss = new XMLHttpRequest();
detailss.open("GET", "https://restcountries.com/v3.1/all");
detailss.onload = function () {
    var result = JSON.parse(detailss.response) 
    var totalPopulation = result.reduce((accumulator, country) => {
  return accumulator + country.population;
    }, 0);
    console.log(`The total population of all countries is ${totalPopulation}`);
}
detailss.send();

// Output : The total population of all countries is 7777721563