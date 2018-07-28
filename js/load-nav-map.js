mapboxgl.accessToken = 'pk.eyJ1IjoibGVubnltYXJ0aW5lemQiLCJhIjoiY2prMWZqNDJlMDBsMzNrb3h6dXZ1Zm50NyJ9.K_9DxP150GAPZI9CbLsJfQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/lennymartinezd/cjk2v295836sa2sqz7k0xjeu6',
  center: [-99.95223783,  38.24814853],
  zoom: 4
});
var geojson = {
  "type": "FeatureCollection",
  "features": [
    {
    "geometry": {
      "coordinates": [
        -112.074037,
        33.448377
      ],
      "type": "Point"
    },
    "properties": {
      "population": "1,555,324",
      "title": "Phoenix, Arizona",
      "marker": "phoenix"
    },
    "type": "Feature"
    },
    {
    "geometry": {
      "coordinates": [
        -116.054169,
        34.135558
      ],
      "type": "Point"
    },
    "properties": {
      "population": "26,452",
      "title": "Twentynine Palms, California",
      "marker": "twenty-nine-palms"
    },
    "type": "Feature"
    },
    {
    "geometry": {
      "coordinates": [
        -118.006472,
        36.281883
      ],
      "type": "Point"
    },
    "properties": {
      "population": "203",
      "title": "Olancha, California",
      "marker": "manzanar"
    },
    "type": "Feature"
    },
    {
    "geometry": {
      "coordinates": [
        -118.152789,
        36.727229
      ],
    "type": "Point"
    },
    "properties": {
      "population": "---",
      "title": "Manzanar, California",
      "tag:" "manzanar"
    },
    "type": "Feature"
    },
    {
    "geometry": {
      "coordinates": [
        -118.399664,
        37.361424
      ],
    "type": "Point"
    },
    "properties": {
      "population": "3760",
      "title": "Bishop, California",
      "marker": "bishop"
    },
    "type": "Feature"
    },
    {
    "geometry": {
      "coordinates": [
        -119.649979,
        39.309514
      ],
    "type": "Point"
    },
    "properties": {
      "population": "711",
      "title": "Virginia City, Nevada",
      "marker": "virginia-city"
    },
    "type": "Feature"
    },
    {
    "geometry": {
      "coordinates": [
        -119.374057,
        39.373804
      ],
    "type": "Point"
    },
    "properties": {
      "population": "1,703",
      "title": "Stagecoach, Nevada",
      "marker": "stagecoach"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -111.891047,
    40.760779
    ],
    "type": "Point"
    },
    "properties": {
    "population": "191,446",
    "title": "Salt Lake City, Utah",
    "marker": "salt-lake-city"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -109.859034,
    41.543569
    ],
    "type": "Point"
    },
    "properties": {
    "population": "86",
    "title": "Little America, Wyoming",
    "marker": "little-america"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -105.591101,
    41.311367
    ],
    "type": "Point"
    },
    "properties": {
    "population": "32,096",
    "title": "Laramie, Wyoming",
    "marker": "laramie"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -103.418246,
    43.895544
    ],
    "type": "Point"
    },
    "properties": {
    "population": "318",
    "title": "Keystone, South Dakota",
    "marker": "keystone"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -98.029799,
    43.709428
    ],
    "type": "Point"
    },
    "properties": {
    "population": "15,610",
    "title": "Mitchell, South Dakota",
    "marker": "mitchell"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -96.221128,
    41.778322
    ],
    "type": "Point"
    },
    "properties": {
    "population": "1,662",
    "title": "Tekamah, Nebraska",
    "marker": "tekamah"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -94.10718,
    41.838596
    ],
    "type": "Point"
    },
    "properties": {
    "population": "7,876",
    "title": "Perry, Iowa",
    "marker": "perry"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -88.300063,
    41.296976
    ],
    "type": "Point"
    },
    "properties": {
    "population": "380",
    "title": "Carbon Hill, Illinois",
    "marker": "carbon-hill"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -83.121863,
    41.35033
    ],
    "type": "Point"
    },
    "properties": {
    "population": "16,388",
    "title": "Fremont, Ohio",
    "marker": "fremont"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -76.886701,
    40.273191
    ],
    "type": "Point"
    },
    "properties": {
    "population": "49,160",
    "title": "Harrisburg, Pennsylvania",
    "marker": "harrisburg"
        },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -77.231095,
    39.830929
    ],
    "type": "Point"
    },
    "properties": {
    "population": "7,643",
    "title": "Gettysburg, Pennsylvania",
    "marker": "gettysburg"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -77.036871,
    38.907192
    ],
    "type": "Point"
    },
    "properties": {
    "population": "659,009",
    "title": "Washington, D.C."
    "marker": "washington-dc"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -81.188156,
    37.77817
    ],
    "type": "Point"
    },
    "properties": {
    "population": "17,348",
    "title": "Beckley, West Virginia",
    "marker": "beckley"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -82.910524,
    37.274667
    ],
    "type": "Point"
    },
    "properties": {
    "population": "15,884",
    "title": "Mallie, Kentucky",
    "marker": "mallie"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -84.083265,
    37.128977
    ],
    "type": "Point"
    },
    "properties": {
    "population": "8,111",
    "title": "London, Kentucky",
    "marker": "london"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -90.04898,
    35.149534
    ],
    "type": "Point"
    },
    "properties": {
    "population": "655,857",
    "title": "Memphis, Tennessee",
    "marker": "memphis"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -94.348268,
    35.436756
    ],
    "type": "Point"
    },
    "properties": {
    "population": "23,155",
    "title": "Van Buren, Arkansas",
    "marker": "van-buren"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -97.516428,
    35.46756
    ],
    "type": "Point"
    },
    "properties": {
    "population": "620,015",
    "title": "Oklahoma City, Oklahoma",
    "marker": "oklahoma-city"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -99.404259,
    35.411994
    ],
    "type": "Point"
    },
    "properties": {
    "population": "12,426",
    "title": "Elk City, Oklahoma",
    "marker": "elk-city"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -101.831297,
    35.221997
    ],
    "type": "Point"
    },
    "properties": {
    "population": "197,570",
    "title": "Amarillo, Texas",
    "marker": "amarillo"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -106.650422,
    35.084386
    ],
    "type": "Point"
    },
    "properties": {
    "population": "556,859",
    "title": "Albuquerque, New Mexico",
    "marker": "albuquerque"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -107.851447,
    35.14726
    ],
    "type": "Point"
    },
    "properties": {
    "population": "9,263",
    "title": "Grant, New Mexico",
    "marker": "grant"
    },
    "type": "Feature"
    },
    {
    "geometry": {
    "coordinates": [
    -109.328794,
    35.209143
    ],
    "type": "Point"
    },
    "properties": {
      "population": "574",
      "title": "Sanders, Arizona"
      "marker": "sanders"
    },  
    "type": "Feature"
    }
    ]
    };

map.on('load', function() {
getStops();
for(i=0;i<30;i++){
getRouteBetweenStops(i);
}
});

var routes = {type:"LineString", coordinates: [] };
var groupCoords = [];

function getRouteBetweenStops(j) {
var longStart = [-112.074037,-116.054169,-118.006472,-118.152789,-118.399664,-119.649979,-119.374057,-111.891047,-109.859034,-105.591101,-103.418246,-98.029799,-96.221128,-94.10718,-88.300063,-83.121863,-76.886701,-77.231095,-77.036871,-81.188156,-82.910524,-84.083265,-90.04898,-94.348268,-97.516428,-99.404259,-101.831297,-106.650422,-107.851447,-109.328794];
var longEnd = [-116.054169,-118.006472,-118.152789,-118.399664,-119.649979,-119.374057,-111.891047,-109.859034,-105.591101,-103.418246,-98.029799,-96.221128,-94.10718,-88.300063,-83.121863,-76.886701,-77.231095,-77.036871,-81.188156,-82.910524,-84.083265,-90.04898,-94.348268,-97.516428,-99.404259,-101.831297,-106.650422,-107.851447,-109.328794, -112.074037];
var latStart = [33.448377,34.135558,36.281883,36.727229,37.361424,39.309514,39.373804,40.760779,41.543569,41.311367,43.895544,43.709428,41.778322,41.838596,41.296976,41.35033,40.273191,39.830929,38.907192,37.77817,37.274667,37.128977,35.149534,35.436756,35.46756,35.411994,35.221997,35.084386,35.14726,35.209143];
var latEnd = [34.135558,36.281883,36.727229,37.361424,39.309514,39.373804,40.760779,41.543569,41.311367,43.895544,43.709428,41.778322,41.838596,41.296976,41.35033,40.273191,39.830929,38.907192,37.77817,37.274667,37.128977,35.149534,35.436756,35.46756,35.411994,35.221997,35.084386,35.14726,35.209143,33.448377];
var routeID = ["route1","route2","route3","route4","route5","route6","route7","route8","route9","route10","route11","route12","route13","route14","route15","route16","route17","route18","route19","route20","route21","route22","route23","route24","route25","route26","route27","route28","route29","route30"];

var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + longStart[j] + ',' + latStart[j] + ';' + longEnd[j] + ',' + latEnd[j] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
$.ajax({
method:'GET',
url: directionsRequest,
}).done(function(data) {
var route = data.routes[0].geometry;
map.addLayer({
id: routeID[j],
type: 'line',
source: {
type: 'geojson',
data: {
type: 'Feature',
geometry: route
}
},
paint: {
'line-width': 5,
'line-color' : '#FFF'
}
});
});
}

function getRoute() {
var start = [-112.074037,  34.048927];
var end = [-106.675461, 35.226997];
var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
$.ajax({
method: 'GET',
url: directionsRequest,
}).done(function(data) {
var route = data.routes[0].geometry;
map.addLayer({
id: 'route',
type: 'line',
source: {
type: 'geojson',
data: {
type: 'Feature',
geometry: route
}
},
paint: {
'line-width': 5,
'line-color' : "#FFF"
}
});
// this is where the code from the next step will go
});
}    
function getStops() {
geojson.features.forEach(function(marker) {

// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';
el.id = marker.properties.marker;
i++;
// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.addTo(map);
});
}    
