import { API_KEY } from './helpers.js';
import { baseUrl } from './urls.js';

export const buildWeatherUrl = (city) => {
    const params = new URLSearchParams({
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'ru'
    });
    return `${baseUrl}?${params}`;
};

export const fetchWeather = async (city) => {
    const url = buildWeatherUrl(city);
    const response = await fetch(url);
    return await response.json();
};

