// PART 1: SHOW A FORTUNE

function showFortune() {
  // get the fortune and show it in the fortune-text div

  fetch('/fortune')
  .then(response => response.text())
  .then(getFortune => {
    document.querySelector('#fortune-text').innerHTML = getFortune
  })
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather?zipcode=${zipcode}`;
  // TODO: request weather with that URL and show the forecast in #weather-info
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);
