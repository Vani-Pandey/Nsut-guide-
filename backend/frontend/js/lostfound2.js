const lostContainer = document.getElementById("lostItems");
const foundContainer = document.getElementById("foundItems");

async function loadItems() {
  const res = await fetch("/api/items");
  const items = await res.json();

  lostContainer.innerHTML = "";
  foundContainer.innerHTML = "";

  items.forEach(item => {

// Card 1: LOST (Red Tag - Top Right)
    const card1 = `
      <div class="item-card" style="position: relative; padding-top: 25px;">
        <span style="position: absolute; top: 10px; right: 10px; background-color: #ff4d4d; color: white; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 0.75rem;">LOST</span>
        <div class="content_lostfound">
        <h3>${item.title}</h3>
        <p><b>Place:</b> ${item.place}</p>
        <p>${item.desc}</p>
        <p><h4><b>Contact:</b></h4> ${item.phone}</p>
        </div>
        ${item.image ? `<img src="${item.image}">` : ""}
      </div>
    `;

    // Card 2: FOUND (Green Tag - Top Right)
    const card2 = `
      <div class="item-card" style="position: relative; padding-top: 25px;">
        <span style="position: absolute; top: 10px; right: 10px; background-color: #2ecc71; color: white; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 0.75rem;">FOUND</span>
        <div class="content_lostfound">
        <h3>${item.title}</h3>
        <p><b>Place:</b> ${item.place}</p>
        <p>${item.desc}</p>
        <p><h4><b>Contact:</b></h4> ${item.phone}</p>
        </div>
        ${item.image ? `<img src="${item.image}">` : ""}
      </div>
    `;

    if (item.type === "Lost") {
      lostContainer.innerHTML += card1;
    } else if (item.type === "Found") {
      foundContainer.innerHTML += card2;
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
