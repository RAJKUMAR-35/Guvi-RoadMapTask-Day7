// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//c. Print the following details name, capital, flag, using forEach function


var detail = new XMLHttpRequest();
detail.open("GET", "https://restcountries.com/v3.1/all");
detail.onload = function () {
    var result = JSON.parse(detail.response);
    result.forEach((x) => {
        console.log(`Name: ${x.name.common}`);
        console.log(`Capital: ${x.capital}`);
        console.log(`Flag: ${x.flag}`);
    })
}
detail.send();

