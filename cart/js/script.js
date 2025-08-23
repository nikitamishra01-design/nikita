// Products data
const productsData = [
  { id: 1, name: "Lipstick", price: 250, img: "assets/lipstic.jpg" },
  { id: 2, name: "Foundation", price: 450, img: "assets/facecram.avif" },
  { id: 3, name: "Perfume", price: 700, img: "assets/perfume.webp" },
  { id: 4, name: "Nail Polish", price: 120, img: "assets/nailpolish.webp" },
  { id: 5, name: "Nail Polish", price: 120, img: "assets/muscsara.jpg" },
  { id: 6, name: "Nail Polish", price: 120, img: "assets/new.webp" },



];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productsEl = document.getElementById("products");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");
const itemsCount = document.getElementById("itemsCount");
const subtotalEl = document.getElementById("subtotal");
const drawer = document.getElementById("drawer");
const toast = document.getElementById("toast");

// Render Products
function renderProducts() {
  productsEl.innerHTML = "";
  productsData.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productsEl.appendChild(div);
  });
}

// Render Cart

// Render Cart
function renderCart() {
  cartList.innerHTML = "";
  let items = 0, subtotal = 0;

  cart.forEach((item, i) => {
    items += item.qty;
    subtotal += item.qty * item.price;

    const row = document.createElement("div");
    row.className = "line";
    row.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="cart-img"/>
      <span>${item.name} x${item.qty}</span>
      <span>₹${item.qty * item.price}</span>
      <button onclick="removeItem(${i})">X</button>
    `;

    cartList.appendChild(row);
  });

  cartCount.textContent = items;
  itemsCount.textContent = items;
  subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}


// Add to Cart
function addToCart(id) {
  const prod = productsData.find(p => p.id === id);
  const found = cart.find(i => i.id === id);
  if (found) found.qty++;
  else cart.push({ ...prod, qty: 1 });
  renderCart();
  showToast("Added to cart");
}

// Remove Item
function removeItem(i) {
  cart.splice(i, 1);
  renderCart();
}

// Clear Cart
document.getElementById("clearBtn").onclick = () => { cart = []; renderCart(); };

// Drawer toggle
document.getElementById("openCart").onclick = () => drawer.classList.add("open");
document.getElementById("closeCart").onclick = () => drawer.classList.remove("open");

// Toast
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1500);
}

// Init
renderProducts();
renderCart();
