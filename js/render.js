const renderWeather = ({city, temp, description, icon}) => {
    weatherCity.textContent = city;
    weatherTemp.textContent = temp;
    weatherDescription.textContent = description;
    weatherContainer.style.display = 'block';
    weatherIcon.src = icon;
};

const dataWeather = ({name, main: {temp}, weather: [{description, icon}]}) => {
    return {
        city: name,
        temp: `${Math.round(temp)}°C`,
        description: capitalizeFirst(description), // description[0].toUpperCase() + data.weather[0].description.slice(1),
        icon: `${iconUrl}${icon}@2x.png`,

    };
};

export {
    renderWeather,
    dataWeather
};
