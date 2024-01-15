// 1.)Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// a. Get all the countries from Asia continent /region using Filter function



var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.onload = function () {
    var responseData = JSON.parse(request.responseText);
    var asianCountries = responseData.filter((x) => x.continents.includes('Asia') || x.region.includes('Asia'));
    console.log(asianCountries);
    
}
request.send();


