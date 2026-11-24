# ShopSphere – Complete E-Commerce Website

A professional, fully functional e-commerce shopping website built with pure HTML5, CSS3 and vanilla JavaScript. No frameworks, no backend, no paid APIs — just clean, modern front-end code.

---

## 🚀 How to Run Locally

### Method 1 — Open Directly (Simplest)
1. Navigate to the `ShopSphere/` folder.
2. Double-click `index.html`.
3. The website opens in your default browser.

### Method 2 — Live Server (Recommended for Development)
If you have VS Code with the **Live Server** extension:
1. Right-click `index.html` → **Open with Live Server**.
2. The site opens at `http://127.0.0.1:5500`.

### Method 3 — Python HTTP Server
```bash
cd ShopSphere
python -m http.server 8080
# Then open http://localhost:8080
```

---

## 📁 Project Structure

```
ShopSphere/
├── index.html      # Complete website structure (all sections + modals)
├── style.css       # All styles, responsive layout, animations
├── script.js       # All functionality — cart, wishlist, auth, filters, etc.
├── README.md       # This file
└── assets/         # Reserved for future images/icons
```

---

## ✅ Completed Features

### 🏠 Homepage
- Animated hero banner with 3 auto-rotating slides (prev/next controls + dot nav)
- Trust badges (Free Shipping, Easy Returns, Secure Payment, 24/7 Support)
- 6-column category grid
- Featured Products section (4 products)
- Best Sellers section (4 products)
- Special Discount banner
- Newsletter subscription (email saved to LocalStorage)
- Professional footer with links, contact info, social icons, payment methods

### 🛍 Products Page
- All 16 products displayed in a responsive grid
- **Search** — real-time search across name, category, and description
- **Category filter** — All / Electronics / Fashion / Home Appliances / Accessories
- **Sort** — Default / Price Low→High / Price High→Low / Top Rated / Best Discount
- **Price range slider** — dynamically filters by maximum price
- Collapsible sidebar on mobile (Filter toggle button)
- Product count display

### 📦 Product Cards
- Emoji product image (no broken external URLs)
- Badge labels: NEW / HOT / SALE
- Star rating + review count
- Current price, original price, discount percentage
- Add to Cart button with visual confirmation
- Wishlist toggle heart button

### 🔍 Product Detail Modal
- Full description
- Rating, reviews, pricing
- Add to Cart from detail view
- Wishlist toggle

### 🛒 Shopping Cart (Modal)
- Add / remove items
- Increase / decrease quantity
- Line totals and grand total
- Free shipping on orders over $100
- Persisted in LocalStorage — survives page refresh
- Empty state with "Shop Now" CTA

### ❤️ Wishlist
- Toggle from any product card or detail modal
- Dedicated wishlist page (via nav heart icon)
- Persisted in LocalStorage
- Empty state

### 🔐 Login & Registration
- Tab-switching between Login and Register forms
- Full validation with inline error messages
- Password show/hide toggle
- Demo credentials: `demo@shopsphere.com` / `demo123`
- "Fill Demo" button for quick testing
- Registered users saved to LocalStorage
- Session persisted across refreshes
- Clear demo-mode disclaimer

### 💳 Checkout
- Pre-filled with logged-in user's details
- Fields: First Name, Last Name, Email, Phone, Address, City, ZIP
- Phone number validation
- Payment method selection (Card / PayPal / Google Pay)
- Full order summary with item list and totals
- **Order confirmation screen** with order ID and estimated delivery
- Orders saved to LocalStorage
- Cart cleared after successful order
- Clear disclaimer: simulated checkout only

### 📱 Responsive Design
| Breakpoint | Layout |
|---|---|
| ≥ 1280px | Full desktop layout |
| 1024px | Stacked footer, 2-col checkout |
| 900px | Sidebar hidden (toggle), 1-col categories |
| 768px | Hamburger menu, 2-col product grid |
| 480px | 1-col product grid, stacked newsletter |

### ⚡ Performance Optimizations
- Lazy loading via IntersectionObserver
- No external CSS frameworks or icon libraries
- Emoji icons instead of image files (zero HTTP requests for product images)
- Single CSS file, single JS file
- CSS variables for consistency (no redundant values)
- Passive scroll event listeners
- Efficient DOM manipulation (innerHTML batch updates, not per-item appends)
- Minimal repaints — only relevant sections are rendered on demand

### 🌐 Browser Compatibility
- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅ (uses standard CSS & JS, no proprietary features)

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Navy | `#0f172a` |
| Primary Blue | `#0ea5e9` |
| Accent Amber | `#f59e0b` |
| Success Green | `#10b981` |
| Error Red | `#ef4444` |
| Font | Inter (Google Fonts) |
| Border Radius | 12px cards, 50px pills |

---

## 🧪 Testing Checklist

- [ ] Navigation links switch sections correctly
- [ ] Hero slider auto-advances every 5 seconds
- [ ] Search filters products in real time
- [ ] Category filter works from nav/homepage and products page
- [ ] Price range slider filters results
- [ ] Sorting changes product order correctly
- [ ] Add to Cart updates badge count and stores in LocalStorage
- [ ] Cart quantity controls work; totals update correctly
- [ ] Cart persists after page refresh
- [ ] Wishlist toggle adds/removes and persists
- [ ] Login with demo@shopsphere.com / demo123 succeeds
- [ ] Register creates account and logs in automatically
- [ ] Checkout pre-fills user details when logged in
- [ ] Checkout shows order confirmation on submit
- [ ] Cart clears after order is placed
- [ ] Newsletter form validates email and saves to LocalStorage
- [ ] Contact form submits and resets
- [ ] Mobile hamburger menu opens and closes
- [ ] All modals close with ✕ button, Escape key, and outside click
- [ ] No horizontal scroll on any screen width

---

## ⚠️ Disclaimer

ShopSphere is a **frontend demonstration** for educational purposes. No real authentication, payment processing, or order fulfillment occurs. All data is stored in browser LocalStorage only.

---

*Built as a Final Project for Web Development — Task 5: Full Web Application with Performance Optimization.*
