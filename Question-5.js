// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// e. Print the country that uses US dollars as currency.


var detailss = new XMLHttpRequest();
detailss.open("GET", "https://restcountries.com/v3.1/all");
detailss.onload = function () {
    var result = JSON.parse(detailss.response) 
    var countriesUsingUSD = result
  .filter(dataset => dataset.currencies && dataset.currencies.USD)
  

// Print the result
console.log("Countries using USD as currency:", countriesUsingUSD);
    
}
detailss.send();