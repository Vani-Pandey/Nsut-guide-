const lostContainer = document.getElementById("lostItems");
const foundContainer = document.getElementById("foundItems");

async function loadItems() {
  const res = await fetch("/api/items");
  const items = await res.json();

  lostContainer.innerHTML = "";
  foundContainer.innerHTML = "";

  items.forEach(item => {

    const card = `
      <div class="item-card">
        <h3>${item.title}</h3>
        <p><b>Place:</b> ${item.place}</p>
        <p>${item.desc}</p>
        <p><b>Contact:</b> ${item.phone}</p>
        ${item.image ? `<img src="${item.image}">` : ""}
      </div>
    `;

    if (item.type === "Lost") {
      lostContainer.innerHTML += card;
    } else if (item.type === "Found") {
      foundContainer.innerHTML += card;
    }

  });
}

loadItems();
const toggle = document.getElementById("pageToggle");

// Set slider to right
toggle.classList.add("active");

toggle.addEventListener("click", () => {
  toggle.classList.remove("active");
  setTimeout(() => {
    window.location.href = "/lostfound";
  }, 200);
});
