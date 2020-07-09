var mymap = L.map('mapid').setView([51.5, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'SmartZoneApplicationWeb',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    //accessToken: 'your.mapbox.access.token'
    accessToken: 'pk.eyJ1IjoiYW5hc2NoYW1raGkiLCJhIjoiY2tjZXF6a3FsMDN5dzJzbG12eWU4dXR5MiJ9.sKRHfRq8lKU1RoF0q0rp7A' 
}).addTo(mymap);

var lat=51.5
var lng=-0.09



var marker = L.marker([lat,lng]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");




function onMapClick(e) {
    lat=e.latlng.lat
    lng=e.latlng.lng
    console.log("langitude",lat)
    console.log("langitude",lng)
}

mymap.on('click', onMapClick);






// var popup = L.popup()
//     .setLatLng([51.5, -0.09])
//     .setContent("Here i'am")
//     .openOn(mymap);
