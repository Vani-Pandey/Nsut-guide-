const form = document.getElementById("itemForm");
const container = document.getElementById("itemsContainer");

let items = JSON.parse(localStorage.getItem("lf_items")) || [];
let currentTab = "Lost";

showTab("Lost");

form.addEventListener("submit", function(e){
e.preventDefault();

const item = {
type: document.getElementById("type").value,
title: document.getElementById("title").value,
place: document.getElementById("place").value,
desc: document.getElementById("description").value,
image: "",
time: new Date().toLocaleString()
};

const img = document.getElementById("image").files[0];

if(img){
const reader = new FileReader();
reader.onload = () => {
item.image = reader.result;
saveItem(item);
};
reader.readAsDataURL(img);
}else{
saveItem(item);
}
});

function saveItem(item){
items.push(item);
localStorage.setItem("lf_items", JSON.stringify(items));
form.reset();
displayItems();
}

function displayItems(){
container.innerHTML = "";

items
.filter(i => i.type === currentTab)
.reverse()
.forEach(item=>{
container.innerHTML += `
<div class="card">
<img src="${item.image || 'https://via.placeholder.com/400x200'}">
<div class="card-content">
<span class="badge ${item.type==='Lost'?'lost':'found'}">${item.type}</span>
<h3>${item.title}</h3>
<p class="place"><i class="fas fa-location-dot"></i> ${item.place}</p>
<p>${item.desc}</p>
</div>
</div>
`;
});
}

function showTab(tab){
currentTab = tab;
document.querySelectorAll(".tab-btn").forEach(btn=>btn.classList.remove("active"));
event.target.classList.add("active");
displayItems();
}
