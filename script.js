
const API_KEY = 'e8d2138acb049ca209f8d89ba20d66bc'; // e8d2138acb049ca209f8d89ba20d66bc

document.getElementById('getWeatherBtn').addEventListener('click', function () {
    const city = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.style.display = 'block';
            weatherInfo.innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.style.display = 'block';
            weatherInfo.innerHTML = 'City not found. Please try again.';
        });
});
