var map = L.map('mapid').setView([32.25527332902743,-369.2534065246582], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'SmartZoneApplicationWeb',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    //accessToken: 'your.mapbox.access.token'
    accessToken: 'pk.eyJ1IjoiYW5hc2NoYW1raGkiLCJhIjoiY2tjZXF6a3FsMDN5dzJzbG12eWU4dXR5MiJ9.sKRHfRq8lKU1RoF0q0rp7A' 
}).addTo(map);


// L.marker([32.25522796327514,-9.252945184707642],{draggable:true}).addTo(map).bindPopup("The Marker is working").openPopup();



var aa = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -369.2534065246582,
            32.25527332902743
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -369.25166845321655,
            32.25511001221306
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -369.2532777786255,
            32.256398392432544
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -369.25437211990356,
            32.25420269122789
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -369.2539429664612,
            32.25732383736298
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -369.2469906806946,
                32.25843072969367
              ],
              [
                -369.24696922302246,
                32.25843072969367
              ],
              [
                -369.24696922302246,
                32.258448875357146
              ],
              [
                -369.2469906806946,
                32.258448875357146
              ],
              [
                -369.2469906806946,
                32.25843072969367
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -369.25076723098755,
                32.2535312678614
              ],
              [
                -369.24684047698975,
                32.2535312678614
              ],
              [
                -369.24684047698975,
                32.25806781566251
              ],
              [
                -369.25076723098755,
                32.25806781566251
              ],
              [
                -369.25076723098755,
                32.2535312678614
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -369.2473340034485,
                32.25971906278678
              ],
              [
                -369.24694776535034,
                32.258448875357146
              ],
              [
                -369.245080947876,
                32.26002753419455
              ],
              [
                -369.2468619346618,
                32.26039044039102
              ],
              [
                -369.2473340034485,
                32.25971906278678
              ]
            ]
          ]
        }
      }
    ]
  }

new L.GeoJSON(aa).addTo(map);












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

