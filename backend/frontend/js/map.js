// Center of NSUT (approx)
var map = L.map('map').setView([28.6097, 77.0375], 16);

// Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Locations
var apj = [28.6105, 77.0380];
var lt = [28.6090, 77.0368];
var library = [28.6085, 77.0376];
var admin = [28.6098, 77.0392];
var hostel = [28.6112, 77.0359];
var canteen = [28.6089, 77.0387];

// Markers
L.marker(apj).addTo(map).bindPopup("APJ Block");
L.marker(lt).addTo(map).bindPopup("Lecture Theatre");
L.marker(library).addTo(map).bindPopup("Library");
L.marker(admin).addTo(map).bindPopup("Admin Block");
L.marker(hostel).addTo(map).bindPopup("Hostels");
L.marker(canteen).addTo(map).bindPopup("Canteen");

// Function
function goToLocation(location){
  map.setView(location, 18);
}

// Simple Search
document.getElementById("searchBox").addEventListener("keyup", function(){
  let value = this.value.toLowerCase();

  if(value.includes("apj")) goToLocation(apj);
  else if(value.includes("lt")) goToLocation(lt);
  else if(value.includes("library")) goToLocation(library);
  else if(value.includes("admin")) goToLocation(admin);
  else if(value.includes("hostel")) goToLocation(hostel);
  else if(value.includes("canteen")) goToLocation(canteen);
});
