var map = L.map('mapid').setView([32.25522796327514,-9.252945184707642], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'SmartZoneApplicationWeb',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    //accessToken: 'your.mapbox.access.token'
    accessToken: 'pk.eyJ1IjoiYW5hc2NoYW1raGkiLCJhIjoiY2tjZXF6a3FsMDN5dzJzbG12eWU4dXR5MiJ9.sKRHfRq8lKU1RoF0q0rp7A' 
}).addTo(map);


L.marker([32.25522796327514,-9.252945184707642]).addTo(map).bindPopup("The Marker is working").openPopup();








// var lat=51.5
// var lng=-0.09



// var marker = L.marker([32.25522796327514,-9.252945184707642],{draggable:true},{autoPan:true}).addTo(mymap);

// var circle = L.circle([32.25522796327514,-9.252945184707642], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// var polygon = L.polygon([
//     [32.25875735108123, -9.246196746826174],
//     [32.25650726879637 ,-9.237184524536135],
//     [32.249175968714944, -9.245338439941408]
// ]).addTo(mymap);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");






// function onMapClick(e) {
//     lat=e.latlng.lat
//     lng=e.latlng.lng
//     console.log("langitude",lat)
//     console.log("langitude",lng)

// }

// mymap.on('click', onMapClick);

