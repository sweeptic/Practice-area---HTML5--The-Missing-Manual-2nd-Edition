var results;
var map;

function getPos() {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            alert("You were last spotted at (" + position.coords.latitude +
                "," + position.coords.longitude + ")");
        }
    )

}

window.onload = function () {

    results = document.getElementById("results");
    // Set some map options. This example sets the starting zoom level and the
    // map type, but see the Google Maps documentation for all your options.
    var mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // Create the map, with these options.
    map = new google.maps.Map(document.getElementById("mapSurface"), mapOptions);
}

function geolocationSuccess(position) {
    // Turn the geolocation position into a LatLng object.
    location = new google.maps.LatLng(
        position.coords.latitude, position.coords.longitude);
    // Map that point.
    map.setCenter(location);

    // Create the info bubble and set its text content and map coordinates.
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent("You are here, or somewhere thereabouts.");
    infowindow.setPosition(location);
    // Make the info bubble appear.
    infowindow.open(map);
    results.innerHTML = "Now you're on the map.";
}

function goToDefaultLocation() {
    // This is the location of New York.
    var newYork = new google.maps.LatLng(40.69847, -73.95144);
    map.setCenter(newYork);
}