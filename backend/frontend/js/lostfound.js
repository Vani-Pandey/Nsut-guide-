const form = document.getElementById("itemForm");
const container = document.getElementById("itemsContainer");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("type", document.getElementById("type").value);
  formData.append("title", document.getElementById("title").value);
  formData.append("place", document.getElementById("place").value);
  formData.append("desc", document.getElementById("description").value);

  const imageFile = document.getElementById("image").files[0];
  if (imageFile) {
    formData.append("image", imageFile);
  }

  const res = await fetch("/api/items", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  console.log(data);

  alert("Item saved successfully!");
  form.reset();
  loadItems();
});


// LOAD ITEMS FROM DATABASE
async function loadItems() {
  const res = await fetch("/api/items");
  const items = await res.json();

  container.innerHTML = "";

  items.forEach(item => {
    container.innerHTML += `
      <div class="item-card">
        <h3>${item.title}</h3>
        <p><b>Type:</b> ${item.type}</p>
        <p><b>Place:</b> ${item.place}</p>
        <p>${item.desc}</p>
        ${item.image ? `<img src="${item.image}" width="150"/>` : ""}
      </div>
    `;
  });
}

loadItems();
