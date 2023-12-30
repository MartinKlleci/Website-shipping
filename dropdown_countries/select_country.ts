import * as countriesData from './countries_list.json';

document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('countrySelect') as HTMLSelectElement;
  
    const countries: string[] = countriesData;
  
    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    });
});