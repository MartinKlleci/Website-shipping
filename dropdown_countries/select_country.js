"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countriesData = require("./countries_list.json");
document.addEventListener('DOMContentLoaded', function () {
    var countrySelect = document.getElementById('countrySelect');
    var countries = countriesData;
    countries.forEach(function (country) {
        var option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
    console.log('Dropdown populated successfully!');
});
