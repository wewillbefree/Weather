const weatherForm = document.querySelector('.weather__form');
const weatherContainer = document.querySelector('.weather__result');
const weatherInput = weatherForm.querySelector('.weather__input');
const weatherCity = weatherContainer.querySelector('.weather__city');
const weatherTemp = weatherContainer.querySelector('.weather__temp');
const weatherDescription = weatherContainer.querySelector('.weather__description');
const weatherIcon = weatherContainer.querySelector('.weather__icon');
const weatherError = document.querySelector('.weather__error');

const API_KEY = '3aa45153f7531c233289dc68e21daf7a';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather'; 
const iconUrl = 'https://openweathermap.org/img/wn/';


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

const capitalizeFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1);
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
        console.log(data)
        renderWeather(dataWeather(data));
    } 
    
    catch (err) {
        alert("Не удалось загрузить данные. Проверьте подключение к интернету.");
        console.error("Ошибка:", err);
    }
};

const dataWeather = ({name, main: {temp}, weather: [{description, icon}]}) => {
    return {
        city: name,
        temp: `${Math.round(temp)}°C`,
        description: capitalizeFirst(description), // description[0].toUpperCase() + data.weather[0].description.slice(1),
        icon: `${iconUrl}${icon}@2x.png`,

    }
}

const renderWeather = ({city, temp, description, icon}) => {
    weatherCity.textContent = city;
    weatherTemp.textContent = temp;
    weatherDescription.textContent = description;
    weatherContainer.style.display = 'block';
    weatherIcon.src = icon;
}

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


