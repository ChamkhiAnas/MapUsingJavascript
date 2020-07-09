var mymap = L.map('mapid').setView([45.4618,9.1592], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    //accessToken: 'your.mapbox.access.token'
    accessToken: 'pk.eyJ1IjoiYW5hc2NoYW1raGkiLCJhIjoiY2tjZXF6a3FsMDN5dzJzbG12eWU4dXR5MiJ9.sKRHfRq8lKU1RoF0q0rp7A' 
}).addTo(mymap);

var marker = L.marker([45.4618,9.1592]).addTo(mymap);

var circle = L.circle([45.4618,9.1592], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [45.4618,9.1592],
    [45.4518,9.1792],
    [45.4518,9.1592]
]).addTo(mymap);