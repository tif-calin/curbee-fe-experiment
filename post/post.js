// grab DOM elements
const form = document.querySelector('.add-find-form');
const btnLocation = form.querySelector('.location button');

// define functions
const handlePositionRequest = pos => {
  const inpLat = form.querySelector('.location .lat-input')
  const inpLng = form.querySelector('.location .lng-input')
  
  inpLat.value = pos.coords.latitude;
  inpLng.value = pos.coords.longitude;
};

// add event listeners
btnLocation.addEventListener('click', e => {
  e.preventDefault();

  navigator.geolocation.getCurrentPosition(handlePositionRequest);
});
