      var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + longStart[0] + ',' + latStart[0] + ';' + longEnd[0] + ',' + latEnd[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
      $.ajax({
      method: 'GET',
      url: directionsRequest,
      }).done(function(data) {
        var route = data.routes[0].geometry;
        map.addLayer({
        id: routeID[0],
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
      });
            var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + longStart[1] + ',' + latStart[1] + ';' + longEnd[1] + ',' + latEnd[1] + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
      $.ajax({
      method: 'GET',
      url: directionsRequest,
      }).done(function(data) {
        var route = data.routes[0].geometry;
        map.addLayer({
        id: routeID[1],
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
      });