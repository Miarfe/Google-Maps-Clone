mapboxgl.accessToken =
'pk.eyJ1IjoibWlhcmZlIiwiYSI6ImNraHdkcjVlZTAxMjMyemw2YzdqOW04OWYifQ.lF8nbQJbRxV6uijzI1mJeA';

navigator.geolocation.getCurrentPosition(successLocation, erroLocation, { enableHighAccuracy: true })

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function erroLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })
  
  map.addControl(directions, 'top-left')
}