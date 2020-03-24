var map; //<-- This is now available to both event listeners and the initialize() function
var mapCenter; // Declare a variable to store the center of the map
var centerMarker; // declare your marker

var styles = [{
	"featureType": "all",
	"elementType": "labels.text.fill",
	"stylers": [{
		"color": "#ffffff"
	}]
}, {
	"featureType": "all",
	"elementType": "labels.text.stroke",
	"stylers": [{
		"visibility": "on"
	}, {
		"color": "#222222"
	}, {
		"lightness": 0
	}, {
		"weight": 4
	}]
}, {
	"featureType": "all",
	"elementType": "labels.icon",
	"stylers": [{
		"visibility": "off"
	}]
}, {
	"featureType": "administrative",
	"elementType": "geometry.fill",
	"stylers": [{
		"color": "#5c5c5c"
	}, {
		"lightness": 15
	}]
}, {
	"featureType": "administrative",
	"elementType": "geometry.stroke",
	"stylers": [{
		"color": "#5c5c5c"
	}, {
		"lightness": 15
	}, {
		"weight": 1.2
	}]
}, {
	"featureType": "landscape",
	"elementType": "geometry",
	"stylers": [{
		"color": "#5c5c5c"
	}, {
		"lightness": 0
	}]
}, {
	"featureType": "poi",
	"elementType": "geometry",
	"stylers": [{
		"color": "#5c5c5c"
	}, {
		"lightness": 10
	}]
}, {
	"featureType": "road.highway",
	"elementType": "geometry.fill",
	"stylers": [{
		"color": "#333333"
	}]
}, {
	"featureType": "road.highway",
	"elementType": "geometry.stroke",
	"stylers": [{
		"color": "#222222"
	}]
}, {
	"featureType": "road.arterial",
	"elementType": "geometry",
	"stylers": [{
		"color": "#383838"
	}]
}, {
	"featureType": "road.arterial",
	"elementType": "geometry.stroke",
	"stylers": [{
		"color": "#222222"
	}, {
		"lightness": 0
	}]
}, {
	"featureType": "road.local",
	"elementType": "geometry",
	"stylers": [{
		"color": "#222222"
	}, {
		"lightness": 10
	}]
}, {
	"featureType": "transit",
	"elementType": "geometry",
	"stylers": [{
		"color": "#222222"
	}, {
		"lightness": 15
	}]
}, {
	"featureType": "water",
	"elementType": "geometry",
	"stylers": [{
		"color": "#222222"
	}, {
		"lightness": 45
	}]
}];

function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(51.308160, -0.489864),
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_RIGHT
		},
		zoomControl: true,
		zoomControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP
		},
		scaleControl: false,
		streetViewControl: true,
		streetViewControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP
		},
		scrollwheel: false,
		keyboardShortcuts: true,
		disableDefaultUI: false
	};

	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	// Create a new marker and add it to the map
	centerMarker = new google.maps.Marker({
		position: new google.maps.LatLng(51.301160, -0.489864),
		map: map,
		icon: '',
		title: 'We are here',
		animation: google.maps.Animation.DROP
	});

	mapCenter = map.getCenter(); // Assign the center of the loaded map to the valiable
	map.setOptions({
		styles: styles
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.addDomListener(window, "resize", function() {

	// Here you set the center of the map based on your "mapCenter" variable
	map.setCenter(mapCenter);

});