console.log("I'm running!");

const mapboxgl = require('mapbox-gl');
const {buildMarker} = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFyeWxjIiwiYSI6ImNqaW00aHd5ajAwOXczbHJ5bWMyYnJ6bGwifQ.fTnufBU7LtWD8r64wo295A'

const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.009, 40.705],
    zoom: 12,
    style: 'mapbox://styles/mapbox/streets-v10'
});


const marker = buildMarker("activities", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);


// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
