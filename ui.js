class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.description = document.getElementById('description');
    this.temp = document.getElementById('temp');
    this.icon = document.getElementById('icon');
    this.humidity = document.getElementById('humidity');
    this.dewpoint = document.getElementById('dewpoint');
    this.feelslike = document.getElementById('feelslike');
    this.wind = document.getElementById('wind');
    this.winddirection = document.getElementById('winddirection');
    this.update = document.getElementById('update');
    this.updateIcon = document.querySelector('.fa-sync-alt');
  }

  // display weather data in HTML
  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.description.textContent = weather.weather[0].description;
    this.temp.textContent = `${(weather.main.temp).toFixed(1)}\xB0 C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
    this.dewpoint.textContent = `Athmospheric pressure: ${weather.main.pressure} hPA`;
    this.feelslike.textContent = `Clouds: ${weather.clouds.all}%`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed} m/s`;
    this.winddirection.textContent = `Wind direction: ${degToCard(weather.wind.deg)}`;
  }

  // display last update time
  showTime() {
    const currentTime = new Date();
    let dd = currentTime.getDate();
    let mm = currentTime.getMonth() + 1;
    let hh = currentTime.getHours();
    let min = currentTime.getMinutes();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    if (min < 10) {
      min = '0' + min;
    }

    const dateTime = 'Updated ' + dd + '/' + mm + ' ' + hh + ':' + min + ' ';

    this.update.textContent = ''
    this.update.insertAdjacentHTML('beforeend', `
        <span id="time">${dateTime}</span><i class="fas fa-sync-alt"></i>
      `)
  }
}

// wind direction based in degree information
const degToCard = function(deg) {
  if (deg > 11.25 && deg <= 33.75) {
    return "N NE";
  } else if (deg > 33.75 && deg <= 56.25) {
    return "E NE";
  } else if (deg > 56.25 && deg <= 78.75) {
    return "E";
  } else if (deg > 78.75 && deg <= 101.25) {
    return "E SE";
  } else if (deg > 101.25 && deg <= 123.75) {
    return "E SE";
  } else if (deg > 123.75 && deg <= 146.25) {
    return "SE";
  } else if (deg > 146.25 && deg <= 168.75) {
    return "S SE";
  } else if (deg > 168.75 && deg <= 191.25) {
    return "S";
  } else if (deg > 191.25 && deg <= 213.75) {
    return "S SW";
  } else if (deg > 213.75 && deg <= 236.25) {
    return "SW";
  } else if (deg > 236.25 && deg <= 258.75) {
    return "W SW";
  } else if (deg > 258.75 && deg <= 281.25) {
    return "W";
  } else if (deg > 281.25 && deg <= 303.75) {
    return "W NW";
  } else if (deg > 303.75 && deg <= 326.25) {
    return "NW";
  } else if (deg > 326.25 && deg <= 348.75) {
    return "N NW";
  } else {
    return "N";
  }
}