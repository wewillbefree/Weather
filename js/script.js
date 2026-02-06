const weatherForm = document.querySelector('.weather__form');
const weatherInput = weatherForm.querySelector('.weather__input');
const weatherCity = document.querySelector('.weather__city');
const weatherTemp = document.querySelector('.weather__temp');
const weatherDescription = document.querySelector('.weather__description');
const weatherContainer = document.querySelector('.weather__result')


const API_KEY = '3aa45153f7531c233289dc68e21daf7a';


const getWeather = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);  // Ждём ответа (но браузер не зависает!)
    const data = await response.json();
    if (data.cod !== 200) {
        // Город не найден или другая ошибка
        alert(`Ошибка: ${data.message}`);
        return;  // Прерываем выполнение функции
    }
    console.log(data)
    addToDom(data.name, data.main.temp, data.weather[0].description);
};

const addToDom = (city, temp, description) => {
    weatherCity.textContent = city;
    weatherTemp.textContent = `${Math.round(temp)}°C`;
    weatherDescription.textContent = `${description[0].toUpperCase()}${description.slice(1)}`;
    weatherContainer.style.display = 'block'
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


