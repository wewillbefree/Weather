import { fetchWeather } from './api.js';
import { transformWeatherData, renderWeather, showError, hideError } from './render.js';
import * as el from './constants.js';

const getWeather = async (city) => {
    try {
        const data = await fetchWeather(city);
        
        if (data.cod !== 200) {
            showError(`Город не найден: ${data.message}`);
            return;
        }
        
        hideError();
        const weatherData = transformWeatherData(data);
        renderWeather(weatherData);
        
    } catch (err) {
        showError("Не удалось загрузить данные. Проверьте интернет.");
        console.error("Ошибка:", err);
    }
};

el.weatherForm.addEventListener('submit', (evn) => {
    evn.preventDefault();
    const city = el.weatherInput.value.trim();
    if (city === '') return;
    
    getWeather(city);
    el.weatherInput.value = '';
});

getWeather('Moscow');
