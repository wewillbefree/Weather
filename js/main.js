import {
    weatherForm,
    weatherInput,
} from './constants.js';


import { getWeather } from './api.js';

weatherForm.addEventListener('submit', (evn) => {
    evn.preventDefault();
    const city = weatherInput.value.trim();
    if (city === '') {
        return
    };
    getWeather(city);
    weatherInput.value = '';
});

getWeather('Moscow');
