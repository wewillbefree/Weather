const weatherForm = document.querySelector('.weather__form');
const weatherContainer = document.querySelector('.weather__result');
const weatherInput = weatherForm.querySelector('.weather__input');
const weatherCity = weatherContainer.querySelector('.weather__city');
const weatherTemp = weatherContainer.querySelector('.weather__temp');
const weatherDescription = weatherContainer.querySelector('.weather__description');
const weatherIcon = weatherContainer.querySelector('.weather__icon');
const weatherError = document.querySelector('.weather__error');

export { 
    weatherForm, 
    weatherContainer, 
    weatherInput, 
    weatherCity, 
    weatherTemp, 
    weatherDescription,
    weatherIcon,
    weatherError,
}