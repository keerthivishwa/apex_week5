/* =====================================================
   ShopSphere – script.js
   Complete e-commerce functionality
   ===================================================== */

'use strict';

/* ============================================================
   PRODUCT DATA  (16 products across 4 categories)
   ============================================================ */
const PRODUCTS = [
  /* --- Electronics --- */
  {
    id: 1, name: 'Sony WH-1000XM5 Headphones', category: 'Electronics',
    price: 299.00, originalPrice: 399.00, discount: 25,
    rating: 4.8, reviews: 1248, emoji: '🎧', badge: 'hot',
    featured: true, bestSeller: true,
    desc: 'Industry-leading noise cancelling headphones with 30-hour battery life, multipoint connection and crystal-clear call quality.'
  },
  {
    id: 2, name: 'Apple iPhone 15 Pro Max', category: 'Electronics',
    price: 1099.00, originalPrice: 1199.00, discount: 8,
    rating: 4.9, reviews: 3421, emoji: '📱', badge: 'new',
    featured: true, bestSeller: false,
    desc: 'Titanium design, A17 Pro chip, 48MP camera system, USB-C, and an always-on display for the ultimate smartphone experience.'
  },
  {
    id: 3, name: 'MacBook Air M2 13"', category: 'Electronics',
    price: 1099.00, originalPrice: 1299.00, discount: 15,
    rating: 4.9, reviews: 876, emoji: '💻', badge: 'sale',
    featured: false, bestSeller: true,
    desc: 'Supercharged by the Apple M2 chip, with up to 18 hours battery life, fanless design, and an immersive Liquid Retina display.'
  },
  {
    id: 4, name: 'Samsung 4K Smart TV 55"', category: 'Electronics',
    price: 649.00, originalPrice: 899.00, discount: 28,
    rating: 4.6, reviews: 542, emoji: '📺', badge: 'sale',
    featured: false, bestSeller: true,
    desc: '4K QLED display with Quantum HDR, built-in Alexa, and smart home hub capabilities for a connected entertainment experience.'
  },

  /* --- Fashion --- */
  {
    id: 5, name: 'Nike Air Max 270', category: 'Fashion',
    price: 144.00, originalPrice: 169.99, discount: 15,
    rating: 4.7, reviews: 2103, emoji: '👟', badge: 'hot',
    featured: true, bestSeller: true,
    desc: 'Iconic Air Max unit delivers all-day cushioning. Lightweight mesh upper and heritage design lines create a bold, modern look.'
  },
  {
    id: 6, name: 'Levi\'s 501 Original Jeans', category: 'Fashion',
    price: 69.50, originalPrice: 89.50, discount: 22,
    rating: 4.5, reviews: 1876, emoji: '👖', badge: 'sale',
    featured: false, bestSeller: true,
    desc: 'The original straight fit jean. Sits at the waist with a straight leg from hip to hem. 100% cotton denim, button fly.'
  },
  {
    id: 7, name: 'Adidas Ultraboost 23', category: 'Fashion',
    price: 179.00, originalPrice: 210.00, discount: 15,
    rating: 4.8, reviews: 965, emoji: '🏃', badge: 'new',
    featured: true, bestSeller: false,
    desc: 'Premium running shoe with BOOST midsole for ultimate energy return, Primeknit+ upper, and Continental rubber outsole.'
  },
  {
    id: 8, name: 'Classic Wool Overcoat', category: 'Fashion',
    price: 219.00, originalPrice: 320.00, discount: 32,
    rating: 4.6, reviews: 388, emoji: '🧥', badge: 'sale',
    featured: false, bestSeller: false,
    desc: 'Premium wool blend overcoat with a tailored silhouette, notched lapels, and a full lining for warmth and style.'
  },

  /* --- Home Appliances --- */
  {
    id: 9, name: 'Dyson V15 Cordless Vacuum', category: 'Home Appliances',
    price: 549.00, originalPrice: 699.00, discount: 21,
    rating: 4.8, reviews: 1456, emoji: '🧹', badge: 'hot',
    featured: true, bestSeller: true,
    desc: 'Dyson\'s most powerful cordless vacuum with laser dust detection, HEPA filtration, and up to 60 minutes of run time.'
  },
  {
    id: 10, name: 'Nespresso Vertuo Next Coffee', category: 'Home Appliances',
    price: 149.00, originalPrice: 199.00, discount: 25,
    rating: 4.7, reviews: 2234, emoji: '☕', badge: 'new',
    featured: false, bestSeller: true,
    desc: 'Smart coffee machine with centrifusion technology that brews five cup sizes at the touch of a button with Bluetooth connectivity.'
  },
  {
    id: 11, name: 'Instant Pot Duo 7-in-1', category: 'Home Appliances',
    price: 89.00, originalPrice: 129.00, discount: 31,
    rating: 4.9, reviews: 5621, emoji: '🍲', badge: 'hot',
    featured: false, bestSeller: true,
    desc: 'Pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, and warmer all in one. 6-quart capacity.'
  },
  {
    id: 12, name: 'LG Front Load Washing Machine', category: 'Home Appliances',
    price: 749.00, originalPrice: 999.00, discount: 25,
    rating: 4.5, reviews: 678, emoji: '🫧', badge: 'sale',
    featured: false, bestSeller: false,
    desc: '5.0 cu. ft. front load washer with TurboWash 360°, AI DD technology that detects fabric type, and built-in WiFi.'
  },

  /* --- Accessories --- */
  {
    id: 13, name: 'Fossil Gen 6 Smartwatch', category: 'Accessories',
    price: 189.00, originalPrice: 249.00, discount: 24,
    rating: 4.5, reviews: 743, emoji: '⌚', badge: 'new',
    featured: true, bestSeller: false,
    desc: 'Wear OS smartwatch with Snapdragon Wear 4100+ chip, heart rate tracking, GPS, NFC payments, and 24-hour battery.'
  },
  {
    id: 14, name: 'Ray-Ban Aviator Classic', category: 'Accessories',
    price: 154.00, originalPrice: 185.00, discount: 17,
    rating: 4.8, reviews: 2109, emoji: '🕶️', badge: 'hot',
    featured: true, bestSeller: true,
    desc: 'Iconic metal aviator frames with crystal lenses and 100% UV protection. Available in multiple lens and frame colors.'
  },
  {
    id: 15, name: 'Coach Tabby Shoulder Bag', category: 'Accessories',
    price: 395.00, originalPrice: 495.00, discount: 20,
    rating: 4.7, reviews: 512, emoji: '👜', badge: 'new',
    featured: false, bestSeller: false,
    desc: 'Refined pebble leather shoulder bag with a distinctive pillow tab closure, interior zip pocket, and adjustable strap.'
  },
  {
    id: 16, name: 'Apple AirPods Pro (2nd Gen)', category: 'Accessories',
    price: 229.00, originalPrice: 249.00, discount: 8,
    rating: 4.9, reviews: 4312, emoji: '🎵', badge: 'new',
    featured: true, bestSeller: true,
    desc: 'Active noise cancellation, Transparency mode, Personalized Spatial Audio, and up to 30 hours battery with the case.'
  }
];

/* ============================================================
   STATE
   ============================================================ */
let cart = [];
let wishlist = [];
let currentUser = null;
let searchQuery = '';
let currentSlide = 0;
let slideInterval = null;
let filteredProducts = [...PRODUCTS];

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  renderFeaturedProducts();
  renderBestSellers();
  renderAllProducts();
  updateCartUI();
  updateWishlistUI();
  updateUserDisplay();
  startHeroSlider();
  lazyLoadImages();
});

/* ============================================================
   LOCAL STORAGE
   ============================================================ */
function saveToStorage() {
  try {
    localStorage.setItem('shopsphere_cart', JSON.stringify(cart));
    localStorage.setItem('shopsphere_wishlist', JSON.stringify(wishlist));
    if (currentUser) localStorage.setItem('shopsphere_user', JSON.stringify(currentUser));
  } catch (e) { /* storage quota exceeded – silently ignore */ }
}

function loadFromStorage() {
  try {
    const savedCart = localStorage.getItem('shopsphere_cart');
    const savedWishlist = localStorage.getItem('shopsphere_wishlist');
    const savedUser = localStorage.getItem('shopsphere_user');
    if (savedCart) cart = JSON.parse(savedCart);
    if (savedWishlist) wishlist = JSON.parse(savedWishlist);
    if (savedUser) currentUser = JSON.parse(savedUser);
  } catch (e) {
    cart = []; wishlist = []; currentUser = null;
  }
}

/* ============================================================
   SECTION NAVIGATION
   ============================================================ */
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(name + 'Section');
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (name === 'wishlist') renderWishlist();
  if (name === 'products') renderAllProducts();
  closeMobileMenu();
}

function setActive(el) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}

/* ============================================================
   PRODUCT RENDERING
   ============================================================ */
function createProductCard(product, showQuickView = true) {
  const isInWishlist = wishlist.includes(product.id);
  const badgeHTML = product.badge
    ? `<span class="badge-${product.badge === 'new' ? 'new' : product.badge === 'hot' ? 'hot' : 'sale'}">${product.badge.toUpperCase()}</span>`
    : '';
  const stars = generateStars(product.rating);

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-img-wrap" onclick="openProductDetail(${product.id})">
        <div class="product-emoji">${product.emoji}</div>
        <div class="product-badges">${badgeHTML}</div>
        <button class="wishlist-btn ${isInWishlist ? 'active' : ''}"
          onclick="toggleWishlist(event, ${product.id})"
          title="${isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}">
          ${isInWishlist ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-info">
        <span class="product-category-tag">${product.category}</span>
        <div class="product-name" onclick="openProductDetail(${product.id})">${product.name}</div>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="rating-count">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-pricing">
          <span class="current-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice > product.price
            ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>
               <span class="discount-pct">-${product.discount}%</span>`
            : ''}
        </div>
      </div>
      <div class="product-actions">
        <button class="add-to-cart-btn" id="addBtn${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>
        ${showQuickView ? `<button class="view-btn" onclick="openProductDetail(${product.id})">👁</button>` : ''}
      </div>
    </div>`;
}

function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '★'.repeat(full);
  if (half) s += '½';
  s += '☆'.repeat(5 - full - (half ? 1 : 0));
  return s;
}

function renderFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4);
  container.innerHTML = featured.map(p => createProductCard(p)).join('');
}

function renderBestSellers() {
  const container = document.getElementById('bestSellerProducts');
  if (!container) return;
  const bestsellers = PRODUCTS.filter(p => p.bestSeller).slice(0, 4);
  container.innerHTML = bestsellers.map(p => createProductCard(p)).join('');
}

function renderAllProducts(products = null) {
  const container = document.getElementById('allProductsGrid');
  const countEl = document.getElementById('productsCount');
  if (!container) return;

  const list = products !== null ? products : filteredProducts;
  container.innerHTML = list.length > 0
    ? list.map(p => createProductCard(p)).join('')
    : `<div class="empty-state" style="grid-column:1/-1">
         <div class="empty-icon">🔍</div>
         <h3>No products found</h3>
         <p>Try adjusting your filters or search term.</p>
         <button class="btn-primary" onclick="clearFilters()">Clear Filters</button>
       </div>`;

  if (countEl) countEl.textContent = `Showing ${list.length} of ${PRODUCTS.length} products`;
}

/* ============================================================
   SEARCH
   ============================================================ */
function handleSearch(value) {
  searchQuery = value.trim().toLowerCase();
  // Sync both search inputs
  const inputs = [document.getElementById('searchInput'), document.getElementById('productsSearch')];
  inputs.forEach(inp => { if (inp && inp.value !== value) inp.value = value; });

  if (searchQuery) {
    showSection('products');
  }
  applyFilters();
}

function triggerSearch() {
  const val = document.getElementById('searchInput').value;
  if (val.trim()) {
    handleSearch(val);
    showSection('products');
  }
}

/* ============================================================
   FILTERS
   ============================================================ */
function applyFilters() {
  const catEl = document.querySelector('input[name="catFilter"]:checked');
  const sortEl = document.querySelector('input[name="sortFilter"]:checked');
  const maxPrice = parseFloat(document.getElementById('maxPriceRange')?.value || 2000);

  const cat = catEl ? catEl.value : 'all';
  const sort = sortEl ? sortEl.value : 'default';

  let result = [...PRODUCTS];

  // Search filter
  if (searchQuery) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery) ||
      p.desc.toLowerCase().includes(searchQuery)
    );
  }

  // Category filter
  if (cat !== 'all') {
    result = result.filter(p => p.category === cat);
  }

  // Price filter
  result = result.filter(p => p.price <= maxPrice);

  // Sort
  switch (sort) {
    case 'price-asc':  result.sort((a, b) => a.price - b.price); break;
    case 'price-desc': result.sort((a, b) => b.price - a.price); break;
    case 'rating':     result.sort((a, b) => b.rating - a.rating); break;
    case 'discount':   result.sort((a, b) => b.discount - a.discount); break;
    default: break;
  }

  filteredProducts = result;
  renderAllProducts();
}

function clearFilters() {
  const allCat = document.querySelector('input[name="catFilter"][value="all"]');
  const defSort = document.querySelector('input[name="sortFilter"][value="default"]');
  const priceRange = document.getElementById('maxPriceRange');
  const priceLabel = document.getElementById('maxPriceLabel');
  if (allCat) allCat.checked = true;
  if (defSort) defSort.checked = true;
  if (priceRange) priceRange.value = 2000;
  if (priceLabel) priceLabel.textContent = '$2000';
  searchQuery = '';
  const si = document.getElementById('searchInput');
  const ps = document.getElementById('productsSearch');
  if (si) si.value = '';
  if (ps) ps.value = '';
  filteredProducts = [...PRODUCTS];
  renderAllProducts();
}

function filterByCategory(cat) {
  showSection('products');
  setTimeout(() => {
    const radio = document.querySelector(`input[name="catFilter"][value="${cat}"]`);
    if (radio) { radio.checked = true; applyFilters(); }
  }, 100);
}

function updatePriceDisplay(val) {
  const el = document.getElementById('maxPriceLabel');
  if (el) el.textContent = '$' + parseInt(val).toLocaleString();
}

function toggleFilters() {
  const sidebar = document.getElementById('filtersSidebar');
  if (sidebar) sidebar.classList.toggle('open');
}

/* ============================================================
   CART
   ============================================================ */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
    showToast(`Updated quantity: ${product.name}`, 'info');
  } else {
    cart.push({ id: productId, qty: 1 });
    showToast(`Added to cart: ${product.name}`, 'success');
  }

  // Button feedback
  const btn = document.getElementById(`addBtn${productId}`);
  if (btn) {
    btn.classList.add('added');
    btn.textContent = '✓ Added';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.textContent = 'Add to Cart';
    }, 1500);
  }

  saveToStorage();
  updateCartUI();
  renderCartItems();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveToStorage();
  updateCartUI();
  renderCartItems();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveToStorage();
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.textContent = totalItems;
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    if (footerEl) footerEl.style.display = 'none';
    if (countEl) countEl.textContent = '(0 items)';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    const lineTotal = p.price * item.qty;
    subtotal += lineTotal;
    return `
      <div class="cart-item">
        <div class="cart-item-img">${p.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">$${p.price.toFixed(2)} each</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
            <span style="margin-left:.5rem;font-weight:600;color:#0f172a">$${lineTotal.toFixed(2)}</span>
          </div>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart(${p.id})">🗑 Remove</button>
      </div>`;
  }).join('');

  const delivery = subtotal >= 100 ? 'Free' : '$9.99';
  const total = subtotal + (subtotal >= 100 ? 0 : 9.99);
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cartDelivery').textContent = delivery;
  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
  if (countEl) countEl.textContent = `(${totalItems} ${totalItems === 1 ? 'item' : 'items'})`;
}

/* ============================================================
   WISHLIST
   ============================================================ */
function toggleWishlist(event, productId) {
  event.stopPropagation();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
    showToast(`Removed from wishlist: ${product.name}`, 'info');
  } else {
    wishlist.push(productId);
    showToast(`Added to wishlist: ${product.name} ❤️`, 'success');
  }

  saveToStorage();
  updateWishlistUI();

  // Update all wishlist buttons on the page
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const card = btn.closest('[data-id]');
    if (card && parseInt(card.dataset.id) === productId) {
      btn.classList.toggle('active', wishlist.includes(productId));
      btn.textContent = wishlist.includes(productId) ? '❤️' : '🤍';
    }
  });
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlistBadge');
  if (badge) badge.textContent = wishlist.length;
}

function renderWishlist() {
  const grid = document.getElementById('wishlistGrid');
  const empty = document.getElementById('wishlistEmpty');
  if (!grid) return;

  if (wishlist.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }

  if (empty) empty.style.display = 'none';
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  grid.innerHTML = items.map(p => createProductCard(p)).join('');
}

/* ============================================================
   PRODUCT DETAIL MODAL
   ============================================================ */
function openProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const isWishlisted = wishlist.includes(productId);
  const stars = generateStars(product.rating);
  const content = document.getElementById('productDetailContent');
  if (!content) return;

  content.innerHTML = `
    <div class="product-detail-layout">
      <div class="product-detail-img">${product.emoji}</div>
      <div class="product-detail-info">
        <span class="product-category-tag">${product.category}</span>
        <h2>${product.name}</h2>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="rating-count">${product.rating} (${product.reviews.toLocaleString()} reviews)</span>
        </div>
        <p class="product-detail-desc">${product.desc}</p>
        <div class="product-detail-pricing">
          <span class="current-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice > product.price
            ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>
               <span class="discount-pct">-${product.discount}% OFF</span>`
            : ''}
        </div>
        <div class="detail-actions">
          <button class="btn-primary detail-add-cart" id="detailAddBtn${productId}"
            onclick="addToCart(${productId});document.getElementById('detailAddBtn${productId}').textContent='✓ Added to Cart'">
            Add to Cart
          </button>
          <button class="detail-wishlist-btn" onclick="toggleWishlist(event,${productId});this.textContent=wishlist.includes(${productId})?'❤️ Wishlisted':'🤍 Add to Wishlist'">
            ${isWishlisted ? '❤️ Wishlisted' : '🤍 Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>`;

  openModal('productModal');
}

/* ============================================================
   CHECKOUT
   ============================================================ */
function populateCheckout() {
  const container = document.getElementById('checkoutItems');
  const subtotalEl = document.getElementById('coSubtotal');
  const totalEl = document.getElementById('coTotal');
  if (!container) return;

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    const lineTotal = p.price * item.qty;
    subtotal += lineTotal;
    return `
      <div class="checkout-item">
        <div class="checkout-item-img">${p.emoji}</div>
        <div class="checkout-item-name">${p.name}</div>
        <span class="checkout-item-qty">×${item.qty}</span>
        <span class="checkout-item-price">$${lineTotal.toFixed(2)}</span>
      </div>`;
  }).join('');

  const total = subtotal + (subtotal >= 100 ? 0 : 9.99);
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

  // Pre-fill with logged-in user info
  if (currentUser) {
    const fn = document.getElementById('coFirstName');
    const em = document.getElementById('coEmail');
    if (fn && currentUser.name) fn.value = currentUser.name.split(' ')[0];
    if (em && currentUser.email) em.value = currentUser.email;
  }
}

function placeOrder(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }

  // Validation
  const phone = document.getElementById('coPhone').value;
  const phoneError = document.getElementById('coPhoneError');
  if (!/^[\+]?[\d\s\-\(\)]{7,15}$/.test(phone)) {
    if (phoneError) phoneError.textContent = 'Please enter a valid phone number.';
    return;
  }
  if (phoneError) phoneError.textContent = '';

  const orderId = 'SS' + Date.now().toString().slice(-8).toUpperCase();
  const email = document.getElementById('coEmail').value;
  const firstName = document.getElementById('coFirstName').value;
  const lastName = document.getElementById('coLastName').value;
  const address = document.getElementById('coAddress').value;
  const city = document.getElementById('coCity').value;
  const zip = document.getElementById('coZip').value;
  const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || 'card';

  const paymentLabels = { card: '💳 Credit / Debit Card', paypal: '🅿️ PayPal', gpay: '📱 Google Pay' };

  // Show confirmation
  document.getElementById('checkoutContent').style.display = 'none';
  const confirm = document.getElementById('orderConfirmation');
  confirm.classList.remove('hidden');

  document.getElementById('orderId').textContent = orderId;
  document.getElementById('confirmEmail').textContent = email;
  document.getElementById('confirmDetails').innerHTML = `
    <strong>Customer:</strong> ${firstName} ${lastName}<br/>
    <strong>Delivery Address:</strong> ${address}, ${city} ${zip}<br/>
    <strong>Payment:</strong> ${paymentLabels[paymentMethod]}<br/>
    <strong>Items:</strong> ${cart.reduce((s, i) => s + i.qty, 0)} item(s)<br/>
    <strong>Estimated Delivery:</strong> 3–5 business days`;

  // Save order to localStorage
  const orders = JSON.parse(localStorage.getItem('shopsphere_orders') || '[]');
  orders.push({ orderId, email, firstName, lastName, items: [...cart], date: new Date().toISOString() });
  localStorage.setItem('shopsphere_orders', JSON.stringify(orders));

  // Clear cart
  cart = [];
  saveToStorage();
  updateCartUI();

  showToast(`Order #${orderId} placed successfully! 🎉`, 'success');
}

/* ============================================================
   AUTH – LOGIN & REGISTER
   ============================================================ */
function switchAuthTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');

  if (tab === 'login') {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
  } else {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
  }
}

function handleLogin(event) {
  event.preventDefault();
  clearAuthErrors();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  let valid = true;

  if (!isValidEmail(email)) {
    document.getElementById('loginEmailError').textContent = 'Please enter a valid email address.';
    valid = false;
  }
  if (password.length < 6) {
    document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters.';
    valid = false;
  }
  if (!valid) return;

  // Check saved users or demo account
  const savedUsers = JSON.parse(localStorage.getItem('shopsphere_users') || '[]');
  const matchedUser = savedUsers.find(u => u.email === email && u.password === password);
  const isDemoLogin = email === 'demo@shopsphere.com' && password === 'demo123';

  if (matchedUser || isDemoLogin) {
    currentUser = matchedUser || { name: 'Demo User', email };
    saveToStorage();
    updateUserDisplay();
    closeModal('loginModal');
    showToast(`Welcome back, ${currentUser.name.split(' ')[0]}! 👋`, 'success');
  } else {
    document.getElementById('loginEmailError').textContent = 'Invalid email or password.';
  }
}

function handleRegister(event) {
  event.preventDefault();
  clearAuthErrors();

  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirmPassword').value;
  let valid = true;

  if (name.length < 2) {
    document.getElementById('regNameError').textContent = 'Name must be at least 2 characters.';
    valid = false;
  }
  if (!isValidEmail(email)) {
    document.getElementById('regEmailError').textContent = 'Please enter a valid email address.';
    valid = false;
  }
  if (password.length < 6) {
    document.getElementById('regPasswordError').textContent = 'Password must be at least 6 characters.';
    valid = false;
  }
  if (password !== confirm) {
    document.getElementById('regConfirmError').textContent = 'Passwords do not match.';
    valid = false;
  }
  if (!valid) return;

  // Check if email already exists
  const savedUsers = JSON.parse(localStorage.getItem('shopsphere_users') || '[]');
  if (savedUsers.find(u => u.email === email)) {
    document.getElementById('regEmailError').textContent = 'An account with this email already exists.';
    return;
  }

  savedUsers.push({ name, email, password });
  localStorage.setItem('shopsphere_users', JSON.stringify(savedUsers));

  currentUser = { name, email };
  saveToStorage();
  updateUserDisplay();
  closeModal('loginModal');
  showToast(`Account created! Welcome, ${name.split(' ')[0]}! 🎉`, 'success');
}

function clearAuthErrors() {
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function updateUserDisplay() {
  const display = document.getElementById('userNameDisplay');
  if (display) {
    display.textContent = currentUser ? currentUser.name.split(' ')[0] : '';
  }
}

function fillDemoLogin() {
  document.getElementById('loginEmail').value = 'demo@shopsphere.com';
  document.getElementById('loginPassword').value = 'demo123';
}

function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
}

/* ============================================================
   MODALS
   ============================================================ */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  if (modalId === 'cartModal') renderCartItems();
  if (modalId === 'checkoutModal') {
    if (cart.length === 0) {
      showToast('Your cart is empty. Add some products first!', 'error');
      return;
    }
    // Reset checkout state
    const content = document.getElementById('checkoutContent');
    const confirm = document.getElementById('orderConfirmation');
    if (content) content.style.display = 'block';
    if (confirm) confirm.classList.add('hidden');
    document.getElementById('checkoutForm')?.reset();
    clearAuthErrors();
    populateCheckout();
  }
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(event, modalId) {
  if (event.target === event.currentTarget) closeModal(modalId);
}

// Close modals on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

/* ============================================================
   MOBILE MENU
   ============================================================ */
function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  const btn = document.getElementById('hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}

function closeMobileMenu() {
  const nav = document.getElementById('mobileNav');
  const btn = document.getElementById('hamburger');
  if (nav) nav.classList.remove('open');
  if (btn) btn.classList.remove('open');
}

/* ============================================================
   HERO SLIDER
   ============================================================ */
function startHeroSlider() {
  slideInterval = setInterval(() => changeSlide(1), 5000);
}

function changeSlide(dir) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;

  slides[currentSlide].classList.remove('active');
  dots[currentSlide]?.classList.remove('active');

  currentSlide = (currentSlide + dir + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide]?.classList.add('active');

  resetSliderInterval();
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;

  slides[currentSlide].classList.remove('active');
  dots[currentSlide]?.classList.remove('active');

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  dots[currentSlide]?.classList.add('active');

  resetSliderInterval();
}

function resetSliderInterval() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => changeSlide(1), 5000);
}

/* ============================================================
   NEWSLETTER
   ============================================================ */
function subscribeNewsletter(event) {
  event.preventDefault();
  const input = event.target.querySelector('input[type="email"]');
  const email = input.value.trim();
  if (!isValidEmail(email)) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }

  const subs = JSON.parse(localStorage.getItem('shopsphere_newsletter') || '[]');
  if (subs.includes(email)) {
    showToast('You\'re already subscribed! 📧', 'info');
  } else {
    subs.push(email);
    localStorage.setItem('shopsphere_newsletter', JSON.stringify(subs));
    showToast('Successfully subscribed to our newsletter! 🎉', 'success');
  }
  input.value = '';
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function submitContact(event) {
  event.preventDefault();
  showToast('Message sent! We\'ll get back to you within 24 hours. 📬', 'success');
  event.target.reset();
}

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
let toastTimer = null;
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  if (toastTimer) clearTimeout(toastTimer);
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ============================================================
   LAZY LOADING (Performance Optimization)
   ============================================================ */
function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '100px' });

    document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
  }
}

/* ============================================================
   HEADER SCROLL EFFECT
   ============================================================ */
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (!header) return;
  if (window.scrollY > 60) {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,.12)';
  } else {
    header.style.boxShadow = '0 1px 0 #e2e8f0';
  }
}, { passive: true });

/* ============================================================
   CLOSE MOBILE NAV ON OUTSIDE CLICK
   ============================================================ */
document.addEventListener('click', e => {
  const nav = document.getElementById('mobileNav');
  const btn = document.getElementById('hamburger');
  if (nav && nav.classList.contains('open')) {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      closeMobileMenu();
    }
  }
});
