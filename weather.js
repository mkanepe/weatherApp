class Weather {
    constructor(city) {
        this.api_key = '994aa1f5b410b722c46d766a14e0b600';
        this.units = 'metric';
        this.city = city;
    }

    // fetch weather data from API
    async getWeather() {
        const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${this.units}&APPID=${this.api_key}`);

        const weatherData = await apiResponse.json();

        return weatherData
    }

    // change weather location
    changeLocation(city) {
        this.city = city;
    }
}