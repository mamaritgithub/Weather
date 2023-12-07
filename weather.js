const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    if (cityInput) {
        const url = `${apiUrl}?q=${cityInput}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                document.getElementById('weatherInfo').innerHTML = 'Error fetching weather data. Please try again.';
            });
    } else {
        document.getElementById('weatherInfo').innerHTML = 'Please enter a city.';
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');

    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    weatherInfo.innerHTML = `<p>City: ${cityName}</p>
                             <p>Temperature: ${temperature}°C</p>
                             <p>Description: ${weatherDescription}</p>`;
}