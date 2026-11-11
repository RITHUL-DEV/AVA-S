
/* ==========================================
   AVAS PET CENTER — JAVASCRIPT
   ========================================== */

const pets = [
  {
    id: "bruno", name: "Bruno", breed: "Golden Retriever",
    age: "4 months", gender: "Male", category: "Dogs", group: "Puppies",
    size: "Medium (growing)", health: "Demo information — confirm with the care team",
    personality: "Playful, affectionate, and curious",
    activity: "Fetch, gentle walks, and family playtime",
    feeding: "Age-appropriate puppy food",
    description: "Bruno is a cheerful little companion who loves playtime and attention. He may be a wonderful match for a family ready to help a puppy learn and grow.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "bella", name: "Bella", breed: "Labrador",
    age: "1 year", gender: "Female", category: "Dogs", group: "Dogs",
    size: "Medium to large", health: "Please confirm vaccination and health records",
    personality: "Friendly, gentle, and energetic",
    activity: "Walks, outdoor play, and learning games",
    feeding: "Balanced adult dog food",
    description: "Bella is a friendly dog who enjoys company and staying active. She needs a loving home that can offer exercise, attention, and consistent care.",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "milo", name: "Milo", breed: "Persian Cat",
    age: "6 months", gender: "Male", category: "Cats", group: "Kittens",
    size: "Small", health: "Please confirm vaccination and health records",
    personality: "Calm, cuddly, and curious",
    activity: "Cozy naps, toys, and gentle interaction",
    feeding: "Age-appropriate cat food",
    description: "Milo is a sweet kitten who enjoys quiet moments and exploring his surroundings. A safe indoor environment and regular coat care would help him thrive.",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "coco", name: "Coco", breed: "Beagle",
    age: "8 months", gender: "Female", category: "Dogs", group: "Puppies",
    size: "Small to medium", health: "Please confirm vaccination and health records",
    personality: "Curious, lively, and sociable",
    activity: "Sniffing games, walks, and play",
    feeding: "Age-appropriate puppy food",
    description: "Coco is an inquisitive young dog who loves exploring. She would suit a home ready to provide patient training, enrichment, and daily activity.",
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "luna", name: "Luna", breed: "Indie Kitten",
    age: "3 months", gender: "Female", category: "Cats", group: "Kittens",
    size: "Small", health: "Please confirm vaccination and health records",
    personality: "Sweet, playful, and observant",
    activity: "Chasing toys and exploring safe spaces",
    feeding: "Age-appropriate kitten food",
    description: "Luna is an adorable kitten who is discovering the world one little adventure at a time. She needs a safe home, gentle handling, and plenty of play.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "max", name: "Max", breed: "German Shepherd",
    age: "1 year", gender: "Male", category: "Dogs", group: "Dogs",
    size: "Large", health: "Please confirm vaccination and health records",
    personality: "Alert, loyal, and intelligent",
    activity: "Structured walks, training, and enrichment",
    feeding: "Balanced adult dog food",
    description: "Max is an intelligent dog who will benefit from patient training, regular exercise, and a responsible family prepared for a larger breed.",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=85"
  }
];

const products = [
  { id: "food1", name: "NutriPaws Dog Food", category: "Food", price: 599, emoji: "🥣",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80",
    description: "Everyday food for your canine companion." },
  { id: "food2", name: "Kitty Meal", category: "Food", price: 449, emoji: "🐱",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
    description: "A convenient cat-food demo product." },
  { id: "toy1", name: "Playtime Ball", category: "Toys", price: 149, emoji: "🎾",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=600&q=80",
    description: "A fun playtime accessory for active pets." },
  { id: "toy2", name: "Plush Toy", category: "Toys", price: 199, emoji: "🧸",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=600&q=80",
    description: "A cuddly-style toy for supervised play." },
  { id: "acc1", name: "Everyday Collar", category: "Accessories", price: 249, emoji: "🐕",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
    description: "A stylish collar for everyday adventures." },
  { id: "acc2", name: "Cozy Pet Bed", category: "Accessories", price: 899, emoji: "🛏️",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80",
    description: "A comfortable resting place for pets." }
];

/* ---------- Helpers ---------- */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[char]);
}

function money(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency", currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

let toastTimeout;

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2800);
}

function safeImageFallback(img, emoji = "🐾") {
  img.addEventListener("error", () => {
    const placeholder = document.createElement("div");
    placeholder.className = "image-fallback";
    placeholder.textContent = emoji;
    placeholder.style.cssText =
      "height:100%;min-height:180px;display:grid;place-items:center;" +
      "background:#e5f5e9;font-size:4rem;";
    img.replaceWith(placeholder);
  }, { once: true });
}

function setUpImages(root = document) {
  $$("img[data-fallback]", root).forEach(img => {
    safeImageFallback(img, img.dataset.fallback);
  });
}

/* ---------- Pet adoption cards ---------- */

function petCard(pet) {
  return `
    <article class="pet-card">
      <img src="${escapeHTML(pet.image)}" alt="${escapeHTML(pet.name)}, ${escapeHTML(pet.breed)}"
           data-fallback="🐾" loading="lazy">
      <div class="pet-card-body">
        <div class="pet-card-top">
          <h3>${escapeHTML(pet.name)}</h3>
          <span class="pet-tag">Meet me</span>
        </div>
        <p>${escapeHTML(pet.breed)}</p>
        <div class="pet-meta">
          <span>🎂 ${escapeHTML(pet.age)}</span>
          <span>🐾 ${escapeHTML(pet.gender)}</span>
        </div>
        <p>${escapeHTML(pet.personality)}.</p>
        <a class="btn primary" href="details.html?pet=${encodeURIComponent(pet.id)}">
          Visit Now →
        </a>
      </div>
    </article>`;
}

function renderPets(filter = "All", target = $("#petGrid")) {
  if (!target) return;

  const filtered = pets.filter(pet =>
    filter === "All" ||
    pet.category === filter ||
    pet.group === filter
  );

  target.innerHTML = filtered.length
    ? filtered.map(petCard).join("")
    : "<p>No pets found in this category.</p>";

  setUpImages(target);
}

function setupPetFilters() {
  const container = $("#petFilters");
  if (!container) return;

  container.addEventListener("click", event => {
    const button = event.target.closest("[data-pet-filter]");
    if (!button) return;

    $$(".filter-btn", container).forEach(item =>
      item.classList.toggle("active", item === button)
    );

    renderPets(button.dataset.petFilter);
  });
}

/* ---------- Product shop ---------- */

function productCard(product) {
  return `
    <article class="product-card">
      <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}"
           data-fallback="${product.emoji}" loading="lazy">
      <div class="product-card-body">
        <span class="pet-tag">${escapeHTML(product.category)}</span>
        <h3>${escapeHTML(product.name)}</h3>
        <p>${escapeHTML(product.description)}</p>
        <div class="price">${money(product.price)}</div>
        <button class="btn primary add-cart" data-product-id="${escapeHTML(product.id)}">
          Add to Cart +
        </button>
      </div>
    </article>`;
}

function renderProducts(filter = "All") {
  const grid = $("#productGrid");
  if (!grid) return;

  const filtered = products.filter(product =>
    filter === "All" || product.category === filter
  );

  grid.innerHTML = filtered.map(productCard).join("");
  setUpImages(grid);
}

function setupProductFilters() {
  const container = $("#productFilters");
  if (!container) return;

  container.addEventListener("click", event => {
    const button = event.target.closest("[data-product-filter]");
    if (!button) return;

    $$(".filter-btn", container).forEach(item =>
      item.classList.toggle("active", item === button)
    );

    renderProducts(button.dataset.productFilter);
  });
}

/* ---------- Demo shopping cart ---------- */

const CART_KEY = "avasPetCenterCart";

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    if (!Array.isArray(saved)) return [];

    return saved.filter(item =>
      products.some(product => product.id === item.id) &&
      Number.isInteger(item.qty) && item.qty > 0 && item.qty <= 99
    );
  } catch {
    return [];
  }
}

let cart = readCart();

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    showToast("Cart storage unavailable in this browser.");
  }
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    if (existing.qty >= 99) {
      showToast("Maximum demo quantity reached.");
      return;
    }
    existing.qty++;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  saveCart();
  renderCart();
  showToast(`${product.name} added to your cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

function renderCart() {
  const count = cart.reduce((total, item) => total + item.qty, 0);
  const countElement = $("#cartCount");
  if (countElement) countElement.textContent = count;

  const itemsElement = $("#cartItems");
  const totalElement = $("#cartTotal");
  if (!itemsElement || !totalElement) return;

  let total = 0;

  itemsElement.innerHTML = cart.map(item => {
    const product = products.find(product => product.id === item.id);
    if (!product) return "";

    total += product.price * item.qty;

    return `
      <div class="cart-row">
        <div><strong>${escapeHTML(product.name)}</strong>
          <br><small>${item.qty} × ${money(product.price)}</small></div>
        <strong>${money(product.price * item.qty)}</strong>
        <button type="button" data-remove-id="${escapeHTML(product.id)}">Remove</button>
      </div>`;
  }).join("");

  if (!cart.length) {
    itemsElement.innerHTML = "<p>Your cart is empty. Find something your pet will love!</p>";
  }

  totalElement.textContent = money(total);
}

function setupCart() {
  const grid = $("#productGrid");

  grid?.addEventListener("click", event => {
    const button = event.target.closest("[data-product-id]");
    if (button) addToCart(button.dataset.productId);
  });

  $("#openCart")?.addEventListener("click", () => {
    renderCart();
    $("#cartDialog")?.showModal();
  });

  $("#cartItems")?.addEventListener("click", event => {
    const button = event.target.closest("[data-remove-id]");
    if (button) removeFromCart(button.dataset.removeId);
  });

  $("#checkoutBtn")?.addEventListener("click", () => {
    if (!cart.length) {
      showToast("Your cart is empty.");
      return;
    }
    showToast("Demo checkout only. No payment has been taken.");
  });
}

/* ---------- Modal controls ---------- */

function setupModals() {
  $$("[data-close]").forEach(button => {
    button.addEventListener("click", () => {
      document.getElementById(button.dataset.close)?.close();
    });
  });

  $$("dialog").forEach(dialog => {
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
  });
}

/* ---------- Grooming appointment requests ---------- */

function setupGrooming() {
  const dialog = $("#groomingDialog");
  if (!dialog) return;

  const dateInput = $("#groomingDate");
  if (dateInput) {
    const now = new Date();
    const localDate = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0")
    ].join("-");
    dateInput.min = localDate;
  }

  $$(".book-service").forEach(button => {
    button.addEventListener("click", () => {
      $("#groomingService").value = button.dataset.service;
      $("#groomingForm").reset();
      $("#groomingService").value = button.dataset.service;
      dialog.showModal();
    });
  });

  $("#groomingForm")?.addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const selectedDate = $("#groomingDate").value;
    if (dateInput && selectedDate < dateInput.min) {
      showToast("Please choose today or a future date.");
      return;
    }

    form.reset();
    dialog.close();
    showToast("Demo booking request completed! Connect a backend for real bookings.");
  });
}

/* ---------- Pet details page ---------- */

function renderPetDetails() {
  const content = $("#petDetailContent");
  if (!content) return;

  const params = new URLSearchParams(window.location.search);
  const petId = params.get("pet");
  const pet = pets.find(item => item.id === petId);

  if (!pet) {
    content.innerHTML = `
      <div class="loading-card">
        <h2>Pet not found 🐾</h2>
        <p>Please choose a pet from our adoption page.</p>
        <a class="btn primary" href="index.html#adoption">Browse All Pets</a>
      </div>`;
    $("#interest")?.setAttribute("hidden", "");
    $(".related-section")?.setAttribute("hidden", "");
    return;
  }

  document.title = `${pet.name} | AVAS Pet Center`;
  $("#breadcrumbPet").textContent = pet.name;
  $("#formPetName").textContent = pet.name;
  $("#formPetId").value = pet.id;

  content.innerHTML = `
    <section class="pet-detail-layout">
      <div>
        <img class="detail-photo" src="${escapeHTML(pet.image)}"
             alt="${escapeHTML(pet.name)}, ${escapeHTML(pet.breed)}"
             data-fallback="🐾">
      </div>
      <div class="details-copy">
        <span class="eyebrow">Your future best friend 🐾</span>
        <h1>Meet <span>${escapeHTML(pet.name)}</span></h1>
        <p class="detail-description">${escapeHTML(pet.description)}</p>
        <div class="detail-facts">
          <div><small>Breed</small><strong>${escapeHTML(pet.breed)}</strong></div>
          <div><small>Age</small><strong>${escapeHTML(pet.age)}</strong></div>
          <div><small>Gender</small><strong>${escapeHTML(pet.gender)}</strong></div>
          <div><small>Size</small><strong>${escapeHTML(pet.size)}</strong></div>
        </div>
        <h3>💚 Personality</h3>
        <p>${escapeHTML(pet.personality)}</p>
        <h3>🎾 Favorite activities</h3>
        <p>${escapeHTML(pet.activity)}</p>
        <h3>🥣 Feeding information</h3>
        <p>${escapeHTML(pet.feeding)}</p>
        <h3>🩺 Health information</h3>
        <p>${escapeHTML(pet.health)}</p>
        <p class="section-note">Demo pet profile. Confirm availability, medical records, and care requirements with AVAS.</p>
        <div class="detail-actions">
          <a href="#interest" class="btn primary">I'm Interested ❤️</a>
          <a href="index.html#adoption" class="btn secondary">← All Pets</a>
        </div>
      </div>
    </section>`;

  setUpImages(content);

  const related = pets.filter(item => item.id !== pet.id).slice(0, 3);
  const relatedGrid = $("#relatedPets");
  if (relatedGrid) {
    relatedGrid.innerHTML = related.map(petCard).join("");
    setUpImages(relatedGrid);
  }
}

function setupAdoptionForm() {
  const form = $("#adoptionForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const reason = String(data.get("reason") || "").trim();

    if (reason.length < 10) {
      $("#adoptionMessage").textContent =
        "Please tell us a little more about why you would like to adopt.";
      return;
    }

    const pet = pets.find(item => item.id === data.get("petId"));
    $("#adoptionMessage").textContent =
      `Thank you for your interest in ${pet ? pet.name : "adoption"}! ` +
      "This demo does not send or store your details. Connect a secure backend to receive real applications.";

    form.reset();

    // Restore the selected pet ID after resetting the form.
    $("#formPetId").value = pet ? pet.id : "";
  });
}

/* ---------- Newsletter ---------- */

function setupNewsletter() {
  $("#newsletterForm")?.addEventListener("submit", event => {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) return;

    event.currentTarget.reset();
    showToast("Thanks for joining the AVAS demo newsletter!");
  });
}

/* ---------- Mobile menu and page setup ---------- */

function setupNavigation() {
  const toggle = $("#menuToggle");
  const nav = $("#navLinks");

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "✕" : "☰";
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
      if (toggle) toggle.textContent = "☰";
    });
  });
}

function initialize() {
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  setupNavigation();
  setupModals();
  setupPetFilters();
  setupProductFilters();
  setupCart();
  setupGrooming();
  setupAdoptionForm();
  setupNewsletter();

  renderPets();
  renderProducts();
  renderCart();
  renderPetDetails();
}

document.addEventListener("DOMContentLoaded", initialize);