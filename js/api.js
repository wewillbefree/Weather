const API_KEY = '3aa45153f7531c233289dc68e21daf7a';

import { baseUrl } from "./urls.js";
import { renderWeather, dataWeather } from "./render.js";
import { weatherError, weatherContainer } from "./constants.js";

const buildWeatherUrl = (city) => {
   const params = new URLSearchParams({
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'ru'
    });
    return `${baseUrl}?${params}`;
};

const showError = (message) => {
    weatherError.textContent = message;
    weatherError.style.display = 'block'
    weatherContainer.style.display = 'none'
}

const getWeather = async (city) => {
    try {
        const url = buildWeatherUrl(city)
        const response = await fetch(url);  // Ждём ответа (но браузер не зависает!)
        const data = await response.json();
        if (data.cod !== 200) {
            // Город не найден или другая ошибка
            showError(`Ошибка: ${data.message}`);
            return;  // Прерываем выполнение функции
        }
        renderWeather(dataWeather(data));
    } 
    
    catch (err) {
        alert("Не удалось загрузить данные. Проверьте подключение к интернету.");
        console.error("Ошибка:", err);
    }
};

export {
    API_KEY,
    buildWeatherUrl,
    getWeather
};
