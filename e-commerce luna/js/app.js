/**
 * NOVAMART - Central Interactive Controller & Shared UI Components
 * Brand: NOVAMART | Everything You Need. One Smart Store.
 */

class NovamartApp {
  constructor() {
    this.currentMode = 'customer';
    this.initGlobalEvents();
  }

  // Render Platform Top Banner with World Switcher & Demo Mode Button
  renderTopBanner(activePlatform = 'customer') {
    let topBanner = document.getElementById('platform-top-banner');
    if (!topBanner) {
      topBanner = document.createElement('div');
      topBanner.id = 'platform-top-banner';
      topBanner.className = 'platform-top-banner';
      document.body.prepend(topBanner);
    }

    topBanner.innerHTML = `
      <div class="platform-switcher-links">
        <span style="font-weight:700; color:#94a3b8; font-size:0.75rem; letter-spacing:0.5px;">PLATFORMS:</span>
        <a href="index.html" class="platform-link ${activePlatform === 'customer' ? 'active' : ''}">
          🛒 Customer Store
        </a>
        <a href="admin.html" class="platform-link ${activePlatform === 'admin' ? 'active' : ''}">
          📊 Admin Operations
        </a>
        <a href="infrastructure.html" class="platform-link ${activePlatform === 'infra' ? 'active' : ''}">
          ⚡ Infrastructure Control Center
        </a>
      </div>
      <div>
        <button class="btn-demo-mode" onclick="window.novaApp.openDemoModal()">
          🎬 PROJECT DEMO MODE (VIVA)
        </button>
      </div>
    `;
  }

  // Render Customer Header with Live Instant Search Autocomplete
  renderCustomerHeader() {
    const headerEl = document.getElementById('nova-header');
    if (!headerEl) return;

    headerEl.className = 'nova-header';
    headerEl.innerHTML = `
      <div class="header-main-row">
        <a href="index.html" class="nova-brand">
          <div class="brand-icon-box">N</div>
          <div class="brand-text-group">
            <span class="brand-title">NOVAMART</span>
            <span class="brand-tagline">Everything You Need. One Smart Store.</span>
          </div>
        </a>

        <div class="header-search-container" style="position:relative;">
          <form class="header-search-box" onsubmit="window.novaApp.handleSearchSubmit(event)" autocomplete="off">
            <select class="search-category-select" id="header-search-cat">
              <option value="all">All Categories</option>
              ${NOVAMART_DATA.categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
            </select>
            <input type="text" id="header-search-input" class="header-search-input" placeholder="Search for products, brands and more... (e.g. laptop, phone, shoes)" oninput="window.novaApp.handleLiveSearch(this.value)" onfocus="window.novaApp.handleLiveSearch(this.value)" />
            <button type="submit" class="header-search-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Search
            </button>
          </form>

          <!-- Instant Live Search Dropdown -->
          <div id="header-search-dropdown" style="display:none; position:absolute; top:100%; left:0; right:0; background:white; border-radius:0 0 10px 10px; box-shadow:0 10px 25px rgba(0,0,0,0.15); border:1px solid var(--border-store); z-index:2000; max-height:380px; overflow-y:auto; margin-top:4px;">
          </div>
        </div>

        <div class="header-actions">
          <a href="profile.html" class="action-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <div>
              <div style="font-size:0.7rem; color:var(--text-muted); font-weight:normal;">Hello, Karthick</div>
              <div>Account & Lists</div>
            </div>
          </a>

          <a href="orders.html" class="action-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8-2 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            <span>Orders</span>
          </a>

          <a href="wishlist.html" class="action-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span>Wishlist</span>
            <span class="action-badge wish-badge-count">0</span>
          </a>

          <a href="cart.html" class="action-item" style="background:var(--brand-indigo); color:white; border-radius:var(--radius-md);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span>Cart</span>
            <span class="action-badge cart-badge-count" style="background:white; color:var(--brand-indigo);">0</span>
          </a>
        </div>
      </div>

      <nav class="top-nav-bar">
        <div class="top-nav-container">
          <a href="categories.html" class="top-nav-item">☰ Categories</a>
          <a href="products.html?deal=true" class="top-nav-item deals-btn">⚡ Today's Deals</a>
          <a href="products.html?cat=mobiles" class="top-nav-item">Mobiles</a>
          <a href="products.html?cat=electronics" class="top-nav-item">Electronics</a>
          <a href="products.html?cat=fashion" class="top-nav-item">Fashion</a>
          <a href="products.html?cat=home-kitchen" class="top-nav-item">Home</a>
          <a href="products.html?cat=appliances" class="top-nav-item">Appliances</a>
          <a href="products.html?cat=beauty" class="top-nav-item">Beauty</a>
          <a href="products.html?cat=grocery" class="top-nav-item">Grocery</a>
          <a href="products.html?cat=sports" class="top-nav-item">Sports</a>
          <a href="products.html?cat=books" class="top-nav-item">Books</a>
          <a href="products.html?sort=newest" class="top-nav-item">New Arrivals</a>
        </div>
      </nav>
    `;

    // Hide search dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const container = document.querySelector('.header-search-container');
      const dropdown = document.getElementById('header-search-dropdown');
      if (container && dropdown && !container.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
  }

  // Live Instant Search Dropdown Handler
  handleLiveSearch(query) {
    const dropdown = document.getElementById('header-search-dropdown');
    if (!dropdown) return;

    const q = (query || '').toLowerCase().trim();
    if (!q) {
      dropdown.style.display = 'none';
      return;
    }

    const catSelect = document.getElementById('header-search-cat');
    const selectedCat = catSelect ? catSelect.value : 'all';

    let matches = NOVAMART_DATA.products.filter(p => {
      const textMatch = p.name.toLowerCase().includes(q) ||
                        p.brand.toLowerCase().includes(q) ||
                        p.category.toLowerCase().includes(q) ||
                        (p.description && p.description.toLowerCase().includes(q));
      if (selectedCat !== 'all') {
        return textMatch && p.category === selectedCat;
      }
      return textMatch;
    });

    if (matches.length === 0) {
      dropdown.style.display = 'block';
      dropdown.innerHTML = `
        <div style="padding:16px; text-align:center; color:var(--text-muted); font-size:0.88rem;">
          No matching products found for "${query}".
        </div>
      `;
      return;
    }

    dropdown.style.display = 'block';
    dropdown.innerHTML = `
      <div style="padding:8px 16px; background:#f8fafc; font-size:0.75rem; font-weight:700; color:var(--text-muted); border-bottom:1px solid var(--border-store);">
        MATCHING PRODUCTS (${matches.length})
      </div>
      ${matches.slice(0, 6).map(p => `
        <a href="product-details.html?id=${p.id}" style="display:flex; align-items:center; gap:12px; padding:10px 16px; border-bottom:1px solid #f1f5f9; text-decoration:none; color:var(--brand-navy); transition:background 0.2s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
          <img src="${p.image}" alt="${p.name}" style="width:40px; height:40px; object-fit:contain; border-radius:4px;" />
          <div style="flex:1;">
            <div style="font-weight:700; font-size:0.88rem; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden;">${p.name}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${p.brand} • <span style="color:var(--brand-emerald); font-weight:700;">₹${p.price.toLocaleString('en-IN')}</span> (${p.discount}% OFF)</div>
          </div>
          <span style="font-size:0.75rem; color:var(--brand-indigo); font-weight:700;">View →</span>
        </a>
      `).join('')}
      <a href="search.html?q=${encodeURIComponent(query)}&cat=${selectedCat}" style="display:block; padding:12px; text-align:center; background:var(--brand-indigo); color:white; font-weight:700; font-size:0.85rem; text-decoration:none;">
        See All Results for "${query}" →
      </a>
    `;
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    const query = document.getElementById('header-search-input').value.trim();
    const cat = document.getElementById('header-search-cat').value;
    window.location.href = `search.html?q=${encodeURIComponent(query)}&cat=${cat}`;
  }

  // Render Footer
  renderFooter() {
    let footerEl = document.getElementById('nova-footer');
    if (!footerEl) {
      footerEl = document.createElement('footer');
      footerEl.id = 'nova-footer';
      document.body.appendChild(footerEl);
    }
    footerEl.style.cssText = "background:#0f172a; color:#cbd5e1; padding:40px 24px 20px 24px; margin-top:60px; border-top:1px solid #1e293b;";
    footerEl.innerHTML = `
      <div style="max-width:1400px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:32px; margin-bottom:30px;">
        <div>
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
            <div class="brand-icon-box" style="width:34px; height:34px; font-size:1.1rem;">N</div>
            <span style="font-size:1.3rem; font-weight:800; color:white;">NOVAMART</span>
          </div>
          <p style="font-size:0.85rem; color:#94a3b8; line-height:1.6;">
            NOVAMART is an enterprise e-commerce ecosystem powered by an automated DevOps microservices infrastructure.
          </p>
        </div>
        <div>
          <h4 style="color:white; margin-bottom:12px; font-size:0.95rem;">Customer World</h4>
          <ul style="list-style:none; font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
            <li><a href="products.html" style="color:#cbd5e1;">All Products Catalog</a></li>
            <li><a href="cart.html" style="color:#cbd5e1;">Shopping Cart & Checkout</a></li>
            <li><a href="orders.html" style="color:#cbd5e1;">Order Tracking & History</a></li>
            <li><a href="wishlist.html" style="color:#cbd5e1;">Saved Wishlist Items</a></li>
          </ul>
        </div>
        <div>
          <h4 style="color:white; margin-bottom:12px; font-size:0.95rem;">Operations World</h4>
          <ul style="list-style:none; font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
            <li><a href="admin.html" style="color:#cbd5e1;">Admin Analytics Dashboard</a></li>
            <li><a href="inventory-admin.html" style="color:#cbd5e1;">Inventory SKU Management</a></li>
            <li><a href="orders-admin.html" style="color:#cbd5e1;">Customer Fulfillment</a></li>
          </ul>
        </div>
        <div>
          <h4 style="color:white; margin-bottom:12px; font-size:0.95rem;">Engineer World</h4>
          <ul style="list-style:none; font-size:0.85rem; display:flex; flex-direction:column; gap:8px;">
            <li><a href="infrastructure.html" style="color:#cbd5e1;">Infrastructure Control Center</a></li>
            <li><a href="deployments.html" style="color:#cbd5e1;">Production Deploy Simulator</a></li>
            <li><a href="cicd.html" style="color:#cbd5e1;">CI/CD Automated Pipeline</a></li>
            <li><a href="monitoring.html" style="color:#cbd5e1;">Live System Monitoring</a></li>
          </ul>
        </div>
      </div>
      <div style="max-width:1400px; margin:0 auto; padding-top:20px; border-top:1px solid #1e293b; text-align:center; font-size:0.8rem; color:#64748b;">
        © 2026 NOVAMART Inc. — Everything You Need. One Smart Store. Built for Enterprise DevOps & E-Commerce Operations.
      </div>
    `;
  }

  initGlobalEvents() {
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.openGlobalSearchModal();
      }
    });
  }

  // Ctrl + K Global Search Modal
  openGlobalSearchModal() {
    let modal = document.getElementById('global-search-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'global-search-modal';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-content" style="max-width:650px; background:#0f172a; color:white; border:1px solid rgba(255,255,255,0.1);">
          <span class="modal-close-btn" onclick="document.getElementById('global-search-modal').classList.remove('active')">&times;</span>
          <div style="display:flex; align-items:center; gap:10px; border-bottom:1px solid #1e293b; padding-bottom:12px; margin-bottom:16px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-cyan)" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="ctrl-k-input" placeholder="Type to search products, orders, servers, deployments, incidents..." style="background:transparent; border:none; outline:none; color:white; font-size:1.1rem; width:100%;" oninput="window.novaApp.handleCtrlKSearch(this.value)" />
          </div>
          <div id="ctrl-k-results" style="max-height:360px; overflow-y:auto; display:flex; flex-direction:column; gap:8px;">
            <div style="color:#64748b; font-size:0.85rem;">Try searching "laptop", "NV-2026", "Product Service", "P1 incident", or "v2.8.3"</div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
    modal.classList.add('active');
    setTimeout(() => {
      const input = document.getElementById('ctrl-k-input');
      if (input) input.focus();
    }, 100);
  }

  handleCtrlKSearch(query) {
    const container = document.getElementById('ctrl-k-results');
    if (!container) return;
    if (!query.trim()) {
      container.innerHTML = `<div style="color:#64748b; font-size:0.85rem;">Type to search across Products, Orders, Microservices & Infrastructure...</div>`;
      return;
    }

    const q = query.toLowerCase();
    const results = [];

    // Search Products
    NOVAMART_DATA.products.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)).forEach(p => {
      results.push({ type: 'Product 🛒', title: p.name, desc: `${p.brand} • ₹${p.price.toLocaleString('en-IN')}`, url: `product-details.html?id=${p.id}` });
    });

    // Search Orders
    NOVAMART_DATA.orders.filter(o => o.id.toLowerCase().includes(q) || o.customerName.toLowerCase().includes(q)).forEach(o => {
      results.push({ type: 'Order 📦', title: o.id, desc: `${o.customerName} • Status: ${o.status}`, url: `orders.html` });
    });

    // Search Microservices
    NOVAMART_DATA.microservices.filter(s => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)).forEach(s => {
      results.push({ type: 'Infrastructure ⚡', title: s.name, desc: `Latency: ${s.latency} • CPU: ${s.cpu} • Status: ${s.status}`, url: `infrastructure.html` });
    });

    // Search Incidents
    NOVAMART_DATA.incidents.filter(i => i.title.toLowerCase().includes(q) || i.id.toLowerCase().includes(q)).forEach(i => {
      results.push({ type: 'Incident ⚠️', title: `${i.id}: ${i.title}`, desc: `Severity: ${i.severity} • ${i.status}`, url: `incidents.html` });
    });

    if (results.length === 0) {
      container.innerHTML = `<div style="color:#94a3b8; padding:12px; text-align:center;">No matching entities found for "${query}".</div>`;
      return;
    }

    container.innerHTML = results.map(r => `
      <a href="${r.url}" style="background:#1e293b; padding:10px 14px; border-radius:6px; display:flex; justify-content:space-between; align-items:center; text-decoration:none; color:white;" onclick="document.getElementById('global-search-modal').classList.remove('active')">
        <div>
          <div style="font-weight:700; font-size:0.9rem;">${r.title}</div>
          <div style="font-size:0.78rem; color:#94a3b8;">${r.desc}</div>
        </div>
        <span style="font-size:0.75rem; background:rgba(6,182,212,0.2); color:var(--brand-cyan); padding:2px 8px; border-radius:4px;">${r.type}</span>
      </a>
    `).join('');
  }

  // Viva Demo Presentation Overlay Modal
  openDemoModal() {
    let modal = document.getElementById('viva-demo-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'viva-demo-modal';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-content" style="max-width:850px; background:#0f172a; color:white; border:1px solid var(--brand-indigo); padding:32px;">
          <span class="modal-close-btn" onclick="document.getElementById('viva-demo-modal').classList.remove('active')">&times;</span>
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
            <div class="brand-icon-box" style="width:40px; height:40px;">N</div>
            <div>
              <h2 style="color:white; font-size:1.5rem;">NOVAMART — PROJECT VIVA DEMO MODE</h2>
              <div style="color:var(--brand-cyan); font-size:0.85rem; font-weight:600;">Full-Stack Product & DevOps Infrastructure Presentation</div>
            </div>
          </div>

          <div style="background:#1e293b; border-radius:10px; padding:20px; margin-bottom:24px;" id="demo-slide-content">
            <!-- Dynamic Slide Content -->
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center;">
            <button class="btn-add-cart" style="width:auto; padding:8px 20px; background:#334155; color:white;" onclick="window.novaApp.prevDemoSlide()">← Previous</button>
            <span style="font-size:0.85rem; color:#94a3b8;" id="demo-slide-indicator">Slide 1 of 10</span>
            <button class="btn-hero" style="padding:8px 20px;" onclick="window.novaApp.nextDemoSlide()">Next Slide →</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      this.currentDemoSlide = 0;
      this.demoSlides = [
        { title: "1. Executive Overview & Brand Concept", content: "NOVAMART ('Everything You Need. One Smart Store.') represents a complete e-commerce marketplace powered by a live, microservices-driven DevOps infrastructure control center." },
        { title: "2. Customer Shopping Experience (World 1)", content: "Includes complete catalog browsing, category filtering, search suggestions, interactive product details with image zoom, cart, wishlist, and multi-step simulated checkout." },
        { title: "3. Order SAGAs & Automated Tracking", content: "Orders placed by customers dynamically flow into the Order Service saga, updates database state, and animates tracking through Placed → Confirmed → Packed → Shipped → Delivered." },
        { title: "4. Microservices Topology (World 2)", content: "The Deploy & Management Engineer monitors 8 isolated microservices (User, Product, Search, Cart, Order, Payment, Inventory, Notification) backed by PostgreSQL, Redis, and Message Queues." },
        { title: "5. Automated CI/CD Pipeline Visualizer", content: "Demonstrates 10 automated stages: Git Push → Build → Unit Tests → Code Quality → Security Scan → Docker Build → Staging → Approval → Production → Health Check." },
        { title: "6. Production Zero-Downtime Deployment", content: "Simulates live production deployment from v2.8.3 to v2.8.4 with automated pre-checks, backup verification, container rollouts, and traffic validation." },
        { title: "7. Real-Time Telemetry & Monitoring", content: "Live canvas telemetry charts capturing Orders/min, CPU/Memory load, Payment API latency, Cart service health, and checkout conversion success rates." },
        { title: "8. Security Center & Compliance Audit", content: "Real-time security score (94/100) auditing SSL/TLS 1.3, WAF firewall rules, brute-force mitigation, and RBAC token authentication." },
        { title: "9. Incident Management & Remediation", content: "Interactive resolution workflow for P1 incidents (e.g. Payment Service latency) demonstrating alert detection, engineer notification, mitigation, and post-mortem logs." },
        { title: "10. Hybrid Data Center & Disaster Recovery", content: "Server rack monitoring with real-time RPO (15 mins), RTO (30 mins), automated snapshot replication, and DR failover simulation." }
      ];
    }
    modal.classList.add('active');
    this.updateDemoSlide();
  }

  updateDemoSlide() {
    const slide = this.demoSlides[this.currentDemoSlide];
    const container = document.getElementById('demo-slide-content');
    const indicator = document.getElementById('demo-slide-indicator');
    if (!container || !slide) return;

    container.innerHTML = `
      <h3 style="color:var(--brand-cyan); font-size:1.2rem; margin-bottom:12px;">${slide.title}</h3>
      <p style="color:#e2e8f0; font-size:1rem; line-height:1.6;">${slide.content}</p>
    `;
    indicator.textContent = `Slide ${this.currentDemoSlide + 1} of ${this.demoSlides.length}`;
  }

  nextDemoSlide() {
    if (this.currentDemoSlide < this.demoSlides.length - 1) {
      this.currentDemoSlide++;
      this.updateDemoSlide();
    }
  }

  prevDemoSlide() {
    if (this.currentDemoSlide > 0) {
      this.currentDemoSlide--;
      this.updateDemoSlide();
    }
  }
}

window.novaApp = new NovamartApp();
