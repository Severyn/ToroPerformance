function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(23.1, 72.57),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}