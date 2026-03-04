// Center of NSUT (approx)
var map = L.map('map', {
  zoomControl: false   // this disables Leaflet default + − buttons
}).setView([28.610, 77.037], 16);


// Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Custom Icons
var blueIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var redIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Locations
var APJ_Block = [ 28.611961867266903, 77.03728079795839];
var Block6 = [28.61056789589633, 77.03773140907289];
var library = [ 28.6101911437017, 77.03898668289186];
var admin = [28.609795552443043, 77.03703403472902];
var hostel = [28.612828380686633, 77.03530669212341];
var canteen = [28.611622794852398, 77.03694283962251];
var Block5 = [28.60962601287613, 77.03875064849855];
var Block4 = [28.60940466914083, 77.03767776489259];
// Markers
var apjMarker = L.marker(APJ_Block, {icon: blueIcon}).addTo(map).bindPopup("APJ Block");
var block6Marker = L.marker(Block6, {icon: blueIcon}).addTo(map).bindPopup("Block 6");
var block5Marker = L.marker(Block5, {icon: blueIcon}).addTo(map).bindPopup("Block 5");
var block4Marker = L.marker(Block4, {icon: blueIcon}).addTo(map).bindPopup("Block 4");
var libraryMarker = L.marker(library, {icon: blueIcon}).addTo(map).bindPopup("Library");
var adminMarker = L.marker(admin, {icon: blueIcon}).addTo(map).bindPopup("Admin Block");
var hostelMarker = L.marker(hostel, {icon: blueIcon}).addTo(map).bindPopup("Hostels");
var canteenMarker = L.marker(canteen, {icon: blueIcon}).addTo(map).bindPopup("Canteen");

var allMarkers = [apjMarker, block6Marker, block5Marker, block4Marker, libraryMarker, adminMarker, hostelMarker, canteenMarker];

// Function
function goToLocation(location, marker){
  allMarkers.forEach(m => m.setIcon(blueIcon));
  marker.setIcon(redIcon);
  map.setView(location, 18);
  marker.openPopup();
}

// Toggle Sidebar
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('visible');
  document.querySelector('.toggle-btn').classList.toggle('shifted');
  document.querySelector('.map-container').classList.toggle('sidebar-visible');
  document.querySelector('.map-header').classList.toggle('shifted');
}

// Simple Search
document.getElementById("searchBox").addEventListener("keyup", function(){
  let value = this.value.toLowerCase();

  if(value === "") {
    allMarkers.forEach(m => m.setIcon(blueIcon));
    map.setView([28.610, 77.037], 16);
  }
  else if(value.includes("apj")) goToLocation(APJ_Block, apjMarker);
  else if(value.includes("block 6")) goToLocation(Block6, block6Marker);
  else if(value.includes("block 5")) goToLocation(Block5, block5Marker);
  else if(value.includes("block 4")) goToLocation(Block4, block4Marker);
  else if(value.includes("library")) goToLocation(library, libraryMarker);
  else if(value.includes("admin")) goToLocation(admin, adminMarker);
  else if(value.includes("hostel")) goToLocation(hostel, hostelMarker);
  else if(value.includes("canteen")) goToLocation(canteen, canteenMarker);
});
