// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//b. Get all the countries with a population of less than 2 lakhs using Filter function


var details = new XMLHttpRequest();
details.open("GET", "https://restcountries.com/v3.1/all");
details.onload = function () {
    var result = JSON.parse(details.response);
    var population = result.filter((x) => x.population < 200000);
    console.log(population);
}
details.send();
