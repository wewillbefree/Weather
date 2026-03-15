import { capitalizeFirst } from './helpers.js';
import { iconUrl } from './urls.js'; 
import * as el from './constants.js';

export const transformWeatherData = ({name, main: {temp}, weather: [{description, icon}]}) => {
    return {
        city: name,
        temp: `${Math.round(temp)}°C`,
        description: capitalizeFirst(description), // description[0].toUpperCase() + data.weather[0].description.slice(1),
        icon: `${iconUrl}${icon}@2x.png`,
    };
};

export const renderWeather = ({ city, temp, description, icon }) => {
    el.weatherCity.textContent = city;
    el.weatherTemp.textContent = temp;
    el.weatherDescription.textContent = description;
    el.weatherIcon.src = icon;
    el.weatherContainer.style.display = 'block';
};

export const showError = (message) => {
    el.weatherError.textContent = message;
    el.weatherError.style.display = 'block';
    el.weatherContainer.style.display = 'none';
};

export const hideError = () => {
    el.weatherError.style.display = 'none';
};