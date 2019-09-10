// init local storage
const storage = new Storage;
// get stored location data
const weatherLocation = storage.getLocation();
// init weather object
const weather = new Weather(weatherLocation.city);
// init UI
const ui = new UI;


// get location on DOM load
document.addEventListener('DOMContentLoaded', () =>{
    if(weatherLocation.city === undefined) {
        new Weather;
    } else {
        getWeather();
    }
});

// main functionality
document.querySelector('.modal-body').addEventListener('submit', function(e) {
  const cityInput = document.querySelector('.city-input').value

  // choose location
  weather.changeLocation(cityInput);

  // get and display weather
  getWeather();

  //close modal window
  document.querySelector('.modal').style.display = 'none';

  //clear input
  clearInput();

  e.preventDefault();
})

// get weather data and display in UI
function getWeather() {
    weather.getWeather()
        .then(results => {
          if(results.cod === 200) {
            ui.paint(results);            
            ui.showTime();
            
            // set location in local storage
            storage.setLocation(results.name);
          } else {
            // show error if city not found
            errorMsg();
          }
        })
        .catch(err => console.log(err));
}

// clear input
function clearInput() {
    document.querySelector('.city-input').value = '';
}


// update results
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('fa-sync-alt')) {
    // rotate icon
    e.target.classList.add('rotate');
    // take weather location from storage
    weather.changeLocation(localStorage.getItem('city'));

    // rotate icon for 3s and then call and update weather data
    setTimeout(() => {
      getWeather();
    }, 3000);
  }
})


/* Modal window */
// get the modal
const modal = document.querySelector('.modal');
// get error message modal
const errorModal = document.querySelector('.error-modal');
// Get the button that opens the modal
const btn = document.querySelector('.btn');
// Get the <span> element that closes the modal
const span = document.querySelector('.close');
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = 'grid';
  document.querySelector('.city-input').focus();
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  } else if (e.target === errorModal) {
    errorModal.style.display = 'none';
  }
}

/* Error modal window */
function errorMsg() {
  errorModal.style.display = 'grid';
  setTimeout(() => {
    errorModal.style.display = 'none';
  }, 2000);
}