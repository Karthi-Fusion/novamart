/**
 * NOVAMART - Central Database & Mock State
 * Brand: NOVAMART | Everything You Need. One Smart Store.
 */

const NOVAMART_DATA = {
  categories: [
    { id: "mobiles", name: "Mobiles & Accessories", icon: "📱", startingPrice: 6999, count: 142, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" },
    { id: "laptops", name: "Laptops & Computers", icon: "💻", startingPrice: 28990, count: 98, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80" },
    { id: "electronics", name: "Electronics & Audio", icon: "🎧", startingPrice: 999, count: 210, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" },
    { id: "fashion", name: "Fashion Essentials", icon: "👕", startingPrice: 499, count: 450, image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80" },
    { id: "mens-fashion", name: "Men's Fashion", icon: "👔", startingPrice: 599, count: 180, image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=400&q=80" },
    { id: "womens-fashion", name: "Women's Fashion", icon: "👗", startingPrice: 699, count: 220, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80" },
    { id: "home-kitchen", name: "Home & Kitchen", icon: "🏠", startingPrice: 349, count: 310, image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80" },
    { id: "appliances", name: "Large Appliances", icon: "🔌", startingPrice: 10990, count: 64, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80" },
    { id: "grocery", name: "Daily Grocery", icon: "🛒", startingPrice: 99, count: 520, image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80" },
    { id: "beauty", name: "Beauty & Personal Care", icon: "💄", startingPrice: 199, count: 195, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80" },
    { id: "sports", name: "Sports & Fitness", icon: "⚽", startingPrice: 299, count: 130, image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=400&q=80" },
    { id: "books", name: "Books & Stationeries", icon: "📚", startingPrice: 149, count: 340, image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80" },
    { id: "toys", name: "Toys & Baby Care", icon: "🧸", startingPrice: 249, count: 115, image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=400&q=80" },
    { id: "automotive", name: "Automotive Accessories", icon: "🚗", startingPrice: 399, count: 85, image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=400&q=80" }
  ],

  products: [
    // SPORTS & FITNESS
    {
      id: "prod-120",
      sku: "SKU-SPOR-YOGA",
      name: "Boldfit Anti-Slip Yoga Mat 6mm for Men & Women with Carrying Strap",
      brand: "Boldfit",
      category: "sports",
      price: 899,
      mrp: 1499,
      discount: 40,
      rating: 4.5,
      reviewsCount: 2840,
      inStock: true,
      stockCount: 85,
      deliveryText: "FREE Delivery Tomorrow",
      image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80"],
      badge: "Fitness Essential",
      isDealOfDay: true,
      highlights: ["6mm Extra Thick High-Density TPE Foam", "Double-sided non-slip texture", "Eco-friendly and waterproof"],
      specs: { "Thickness": "6 mm", "Material": "TPE Eco-Friendly", "Includes": "Carry Strap" },
      description: "Provides maximum joint cushioning and non-slip grip during heavy workout and yoga sessions."
    },
    {
      id: "prod-121",
      sku: "SKU-SPOR-FOOT",
      name: "Adidas FIFA World Cup Match Replica Football (Size 5)",
      brand: "Adidas",
      category: "sports",
      price: 1999,
      mrp: 2999,
      discount: 33,
      rating: 4.7,
      reviewsCount: 1650,
      inStock: true,
      stockCount: 40,
      deliveryText: "FREE Delivery Tomorrow",
      image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1614632537197-38a17061c2bd?auto=format&fit=crop&w=600&q=80"],
      badge: "FIFA Approved",
      isDealOfDay: false,
      highlights: ["Seamless TSBE technology for accurate flight", "Butyl bladder for maximum air retention"],
      specs: { "Size": "5", "Construction": "Seamless TSBE", "Surface": "All Weather" },
      description: "Official match replica football with seamless surface technology for predictable flight trajectory."
    },
    {
      id: "prod-125",
      sku: "SKU-SPOR-DUMB",
      name: "Kobo Rubber Encased Hex Dumbbells Set (20 Kg Pair)",
      brand: "Kobo",
      category: "sports",
      price: 3499,
      mrp: 5999,
      discount: 41,
      rating: 4.6,
      reviewsCount: 1210,
      inStock: true,
      stockCount: 30,
      deliveryText: "FREE Delivery in 2 Days",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80"],
      badge: "Home Gym",
      isDealOfDay: true,
      highlights: ["Solid cast iron core with heavy-duty rubber coating", "Anti-roll hex design", "Ergonomic chrome handle"],
      specs: { "Weight": "20 Kg (10kg x 2)", "Material": "Cast Iron & Heavy Duty Rubber" },
      description: "Heavy-duty rubber hex dumbbells for muscle building, toning, and home gym workouts."
    },
    {
      id: "prod-126",
      sku: "SKU-SPOR-BADM",
      name: "Yonex Muscle Power 29 Light Badminton Racket Set with Cover",
      brand: "Yonex",
      category: "sports",
      price: 2490,
      mrp: 3890,
      discount: 36,
      rating: 4.8,
      reviewsCount: 3410,
      inStock: true,
      stockCount: 60,
      deliveryText: "FREE Delivery Tomorrow",
      image: "https://images.unsplash.com/photo-1626225967045-9440882269ab?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1626225967045-9440882269ab?auto=format&fit=crop&w=600&q=80"],
      badge: "Pro Choice",
      isDealOfDay: false,
      highlights: ["Full Graphite Frame & Shaft", "Isometric Head Shape for enlarged sweet spot", "Muscle Power frame for high tension"],
      specs: { "Weight": "4U (80-84g)", "Tension": "Up to 30 lbs", "Frame": "Full Carbon Graphite" },
      description: "Delivers maximum power and sharp control with full carbon graphite isometric frame."
    },

    // MOBILES
    {
      id: "prod-101",
      sku: "SKU-SAMS-S24U",
      name: "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 256GB)",
      brand: "Samsung",
      category: "mobiles",
      price: 129999,
      mrp: 144999,
      discount: 10,
      rating: 4.7,
      reviewsCount: 3842,
      inStock: true,
      stockCount: 45,
      deliveryText: "FREE Delivery Tomorrow",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80"],
      badge: "Best Seller",
      isDealOfDay: true,
      highlights: ["Snapdragon 8 Gen 3 Processor", "200MP Camera with AI Zoom", "6.8\" QHD+ Dynamic AMOLED 2X"],
      specs: { "Display": "6.8 inch QHD+ 120Hz", "RAM": "12 GB", "Storage": "256 GB UFS 4.0" },
      description: "Experience the next level of mobile intelligence with Galaxy AI."
    },
    {
      id: "prod-102",
      sku: "SKU-APPL-IP15P",
      name: "Apple iPhone 15 Pro Max (256 GB - Natural Titanium)",
      brand: "Apple",
      category: "mobiles",
      price: 148900,
      mrp: 159900,
      discount: 7,
      rating: 4.8,
      reviewsCount: 5210,
      inStock: true,
      stockCount: 28,
      deliveryText: "FREE Delivery Tomorrow",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80"],
      badge: "Trending",
      isDealOfDay: false,
      highlights: ["Forged in Titanium", "A17 Pro chip with 6-core GPU"],
      specs: { "Display": "6.7 inch Super Retina XDR", "RAM": "8 GB", "Storage": "256 GB" },
      description: "Forged in titanium featuring the groundbreaking A17 Pro chip."
    },

    // LAPTOPS
    {
      id: "prod-104",
      sku: "SKU-DELL-XPS15",
      name: "Dell XPS 15 Laptop (Intel Core i9 13th Gen, 32GB, 1TB SSD)",
      brand: "Dell",
      category: "laptops",
      price: 214990,
      mrp: 249990,
      discount: 14,
      rating: 4.5,
      reviewsCount: 890,
      inStock: true,
      stockCount: 15,
      deliveryText: "FREE Delivery Tomorrow",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80"],
      badge: "Workstation",
      isDealOfDay: false,
      highlights: ["15.6 inch 3.5K OLED Touch Display", "Intel Core i9-13900H"],
      specs: { "Screen": "15.6\" 3.5K Touch OLED", "RAM": "32 GB DDR5" },
      description: "Unleash ultimate creativity with Dell XPS 15 featuring OLED touchscreen."
    },

    // ELECTRONICS
    {
      id: "prod-103",
      sku: "SKU-SONY-WH1000",
      name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      brand: "Sony",
      category: "electronics",
      price: 26990,
      mrp: 34990,
      discount: 23,
      rating: 4.6,
      reviewsCount: 1840,
      inStock: true,
      stockCount: 62,
      deliveryText: "FREE Delivery by 2 PM",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"],
      badge: "Top Rated",
      isDealOfDay: true,
      highlights: ["Industry-leading Noise Cancellation", "30-hour battery life"],
      specs: { "Type": "Over-Ear Wireless", "Battery": "30 Hours" },
      description: "Immerse yourself in sound with industry-leading noise cancelling."
    },

    // GROCERY
    {
      id: "prod-114",
      sku: "SKU-GROC-OIL",
      name: "Borges Extra Virgin Olive Oil Cold Pressed (1 Litre)",
      brand: "Borges",
      category: "grocery",
      price: 999,
      mrp: 1499,
      discount: 33,
      rating: 4.7,
      reviewsCount: 4210,
      inStock: true,
      stockCount: 150,
      deliveryText: "FREE Delivery Today",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80"],
      badge: "Super Saver",
      isDealOfDay: true,
      highlights: ["First Cold Pressed 100% Spanish Olives", "Heart Healthy Omega-9"],
      specs: { "Volume": "1 Litre", "Type": "Extra Virgin" },
      description: "Extracted from Spanish olives preserving natural flavor and aroma."
    },

    // FASHION / MEN'S FASHION / WOMEN'S FASHION
    {
      id: "prod-105",
      sku: "SKU-NIKE-AIRM",
      name: "Nike Air Max 270 Running Shoes for Men",
      brand: "Nike",
      category: "mens-fashion",
      price: 11495,
      mrp: 14995,
      discount: 23,
      rating: 4.4,
      reviewsCount: 3120,
      inStock: true,
      stockCount: 80,
      deliveryText: "FREE Delivery Tomorrow",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"],
      badge: "Popular",
      isDealOfDay: true,
      highlights: ["Max Air unit for responsive cushioning", "Rubber outsole"],
      specs: { "Gender": "Men", "Closure": "Lace-Up" },
      description: "Nike Air Max 270 delivers visible cushioning under every step."
    },
    {
      id: "prod-112",
      sku: "SKU-ZARA-FLORAL",
      name: "Zara Floral Print Tiered Maxi Summer Dress",
      brand: "Zara",
      category: "womens-fashion",
      price: 3590,
      mrp: 5990,
      discount: 40,
      rating: 4.6,
      reviewsCount: 890,
      inStock: true,
      stockCount: 40,
      deliveryText: "FREE Delivery Tomorrow",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"],
      badge: "Fashion Trending",
      isDealOfDay: false,
      highlights: ["Lightweight breathable viscose fabric", "Tiered flowy silhouette"],
      specs: { "Fabric": "100% Viscose", "Length": "Maxi" },
      description: "Embrace effortless elegance with this vibrant floral maxi dress."
    },

    // BEAUTY
    {
      id: "prod-118",
      sku: "SKU-BEAU-SERU",
      name: "L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Face Serum (30ml)",
      brand: "L'Oreal",
      category: "beauty",
      price: 799,
      mrp: 999,
      discount: 20,
      rating: 4.6,
      reviewsCount: 3890,
      inStock: true,
      stockCount: 140,
      deliveryText: "FREE Delivery Tomorrow",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"],
      badge: "Skincare Top Pick",
      isDealOfDay: true,
      highlights: ["Intense hydration for radiant skin", "Lightweight non-sticky formula"],
      specs: { "Volume": "30 ml", "Skin Type": "All Skin Types" },
      description: "Intensify skin hydration, plump fine lines, and boost radiant glow."
    },

    // BOOKS
    {
      id: "prod-122",
      sku: "SKU-BOOK-ATOM",
      name: "Atomic Habits by James Clear (Hardcover Edition)",
      brand: "Penguin",
      category: "books",
      price: 549,
      mrp: 799,
      discount: 31,
      rating: 4.9,
      reviewsCount: 18420,
      inStock: true,
      stockCount: 300,
      deliveryText: "FREE Delivery Tomorrow",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80"],
      badge: "#1 Global Bestseller",
      isDealOfDay: true,
      highlights: ["Over 15 Million copies sold worldwide", "Tiny changes, remarkable results"],
      specs: { "Author": "James Clear", "Format": "Hardcover" },
      description: "An easy & proven way to build good habits & break bad ones."
    },

    // TOYS
    {
      id: "prod-123",
      sku: "SKU-TOYS-LEGO",
      name: "LEGO Technic Supercar Building Kit (840 Pieces)",
      brand: "LEGO",
      category: "toys",
      price: 4999,
      mrp: 6999,
      discount: 28,
      rating: 4.8,
      reviewsCount: 940,
      inStock: true,
      stockCount: 35,
      deliveryText: "FREE Delivery in 2 Days",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80"],
      badge: "Creative STEM",
      isDealOfDay: true,
      highlights: ["Includes V8 engine with moving pistons", "Ages 10+ STEM learning"],
      specs: { "Pieces": "840 Pcs", "Age Group": "10+ Years" },
      description: "Build an authentic super sports car with working steering and suspension."
    },

    // AUTOMOTIVE
    {
      id: "prod-124",
      sku: "SKU-AUTO-DASH",
      name: "Qubo Smart Car Dash Cam 4K Ultra HD WiFi & GPS Tracking",
      brand: "Qubo",
      category: "automotive",
      price: 5490,
      mrp: 9990,
      discount: 45,
      rating: 4.6,
      reviewsCount: 1420,
      inStock: true,
      stockCount: 45,
      deliveryText: "FREE Delivery Tomorrow",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80"],
      badge: "Smart Auto",
      isDealOfDay: true,
      highlights: ["4K Ultra HD Resolution with Sony STARVIS Sensor", "Emergency G-Sensor"],
      specs: { "Resolution": "4K Ultra HD", "Sensor": "Sony STARVIS" },
      description: "Record crisp 4K road footage day and night with night vision sensor."
    },

    // HOME & KITCHEN / APPLIANCES
    {
      id: "prod-106",
      sku: "SKU-LG-OLED55",
      name: "LG 55 Inch 4K Smart OLED TV (Cinema HDR, Dolby Atmos)",
      brand: "LG",
      category: "appliances",
      price: 119990,
      mrp: 169990,
      discount: 29,
      rating: 4.7,
      reviewsCount: 1450,
      inStock: true,
      stockCount: 12,
      deliveryText: "FREE Installation Included",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"],
      badge: "Super Saver",
      isDealOfDay: true,
      highlights: ["Self-lit OLED Pixels", "120Hz Refresh Rate"],
      specs: { "Screen Size": "55 Inch", "Audio": "40W Dolby Atmos" },
      description: "Infinite contrast and 100% color fidelity powered by LG OLED."
    },
    {
      id: "prod-108",
      sku: "SKU-DYSN-V15",
      name: "Dyson V15 Detect Cordless Vacuum Cleaner",
      brand: "Dyson",
      category: "home-kitchen",
      price: 62900,
      mrp: 68900,
      discount: 9,
      rating: 4.8,
      reviewsCount: 740,
      inStock: true,
      stockCount: 18,
      deliveryText: "FREE Delivery in 2 Days",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
      images: ["https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80"],
      badge: "Premium Home",
      isDealOfDay: false,
      highlights: ["Laser reveals microscopic dust", "60 minutes run time"],
      specs: { "Suction Power": "240 AW", "Bin Volume": "0.77 L" },
      description: "Dyson's most powerful cordless vacuum revealing invisible dust."
    }
  ],

  dealsOfDay: [
    { productId: "prod-101", title: "Wireless Smartphone Flagship", discountText: "10% OFF" },
    { productId: "prod-103", title: "Sony WH-1000XM5 ANC", discountText: "23% OFF" },
    { productId: "prod-105", title: "Nike Air Max 270", discountText: "23% OFF" },
    { productId: "prod-114", title: "Borges Extra Virgin Olive Oil", discountText: "33% OFF" },
    { productId: "prod-120", title: "Boldfit Anti-Slip Yoga Mat", discountText: "40% OFF" },
    { productId: "prod-122", title: "Atomic Habits Hardcover", discountText: "31% OFF" }
  ],

  orders: [
    {
      id: "NV-2026-0814-1024",
      date: "14 Aug 2026",
      customerName: "Karthick",
      customerEmail: "karthick@novamart.io",
      customerPhone: "+91 98765 43210",
      items: [
        { productId: "prod-103", name: "Sony WH-1000XM5 Wireless Headphones", price: 26990, qty: 1, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" }
      ],
      totalAmount: 26990,
      paymentMethod: "Instant UPI",
      status: "Shipped",
      estimatedDelivery: "18 Aug 2026",
      trackingStep: 4,
      address: "142 Nova Heights, Anna Nagar, Chennai, Tamil Nadu - 600040 (Phone: +91 98765 43210)"
    }
  ],

  adminStats: {
    totalSales: "₹12.8L",
    totalOrders: 3842,
    customers: 18420,
    products: 12580,
    lowStock: 38,
    pendingOrders: 126
  },

  inventory: [
    { sku: "SKU-SAMS-S24U", product: "Samsung Galaxy S24 Ultra", stock: 45, reserved: 8, sold: 1420, reorderLevel: 20, status: "In Stock" },
    { sku: "SKU-APPL-IP15P", product: "Apple iPhone 15 Pro Max", stock: 28, reserved: 5, sold: 2150, reorderLevel: 15, status: "In Stock" },
    { sku: "SKU-SPOR-YOGA", product: "Boldfit Anti-Slip Yoga Mat", stock: 85, reserved: 10, sold: 2840, reorderLevel: 20, status: "In Stock" },
    { sku: "SKU-SPOR-FOOT", product: "Adidas FIFA World Cup Football", stock: 40, reserved: 4, sold: 1650, reorderLevel: 15, status: "In Stock" }
  ],

  infraStats: {
    productionStatus: "Operational",
    serversCount: 24,
    uptimeSLA: "99.98%",
    cpuUsage: 42,
    memoryUsage: 61,
    activeDeployments: 8,
    activeIncidents: 2,
    securityScore: 94
  },

  microservices: [
    { id: "srv-user", name: "User Service", category: "Auth & Identity", cpu: "18%", memory: "450 MB", requests: "1,420/s", latency: "14ms", status: "Healthy", logs: ["JWT Token validation ok"] },
    { id: "srv-product", name: "Product Service", category: "Catalog & Search", cpu: "54%", memory: "1.2 GB", requests: "4,890/s", latency: "22ms", status: "Healthy", logs: ["Elasticsearch query hit"] }
  ],

  incidents: [
    { id: "INC-2026-0814", title: "Payment Service High Latency", severity: "P1", status: "Investigating", timestamp: "14 Aug 12:15 PM", resolutionTime: "Active (8 mins)", summary: "Bank API gateway timeout." }
  ]
};

// Global State Engine with User Profile & Saved Addresses Management
class NovaStoreEngine {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('novamart_cart')) || [
      { id: "prod-103", qty: 1 }
    ];
    this.wishlist = JSON.parse(localStorage.getItem('novamart_wishlist')) || ["prod-101", "prod-120"];

    // User Profile & Addresses State
    this.userProfile = JSON.parse(localStorage.getItem('novamart_user_profile')) || {
      fullName: "Karthick",
      email: "karthick@novamart.io",
      phone: "+91 98765 43210",
      addresses: [
        {
          id: "addr-1",
          name: "Karthick (Home)",
          phone: "+91 98765 43210",
          street: "142 Nova Heights, Anna Nagar",
          city: "Chennai",
          state: "Tamil Nadu",
          pincode: "600040",
          type: "Home",
          isDefault: true
        },
        {
          id: "addr-2",
          name: "Karthick (Office)",
          phone: "+91 98765 43210",
          street: "88 Cyber Towers, Hitec City",
          city: "Hyderabad",
          state: "Telangana",
          pincode: "500081",
          type: "Work",
          isDefault: false
        }
      ]
    };
  }

  saveState() {
    localStorage.setItem('novamart_cart', JSON.stringify(this.cart));
    localStorage.setItem('novamart_wishlist', JSON.stringify(this.wishlist));
    localStorage.setItem('novamart_user_profile', JSON.stringify(this.userProfile));
    this.updateBadges();
  }

  updateProfile(fullName, phone) {
    this.userProfile.fullName = fullName;
    this.userProfile.phone = phone;
    this.saveState();
    this.showToast("User profile & mobile number updated!", "success");
  }

  addOrUpdateAddress(addressObj) {
    if (!addressObj.id) {
      addressObj.id = `addr-${Date.now()}`;
    }
    const idx = this.userProfile.addresses.findIndex(a => a.id === addressObj.id);
    if (addressObj.isDefault) {
      this.userProfile.addresses.forEach(a => a.isDefault = false);
    }
    if (idx >= 0) {
      this.userProfile.addresses[idx] = addressObj;
    } else {
      this.userProfile.addresses.push(addressObj);
    }
    this.saveState();
    this.showToast("Delivery address saved successfully!", "success");
  }

  setDefaultAddress(addrId) {
    this.userProfile.addresses.forEach(a => a.isDefault = (a.id === addrId));
    this.saveState();
    this.showToast("Default delivery address updated!", "info");
  }

  deleteAddress(addrId) {
    this.userProfile.addresses = this.userProfile.addresses.filter(a => a.id !== addrId);
    if (this.userProfile.addresses.length > 0 && !this.userProfile.addresses.some(a => a.isDefault)) {
      this.userProfile.addresses[0].isDefault = true;
    }
    this.saveState();
    this.showToast("Address removed.", "info");
  }

  getDefaultAddress() {
    return this.userProfile.addresses.find(a => a.isDefault) || this.userProfile.addresses[0] || {
      name: this.userProfile.fullName,
      phone: this.userProfile.phone,
      street: "142 Nova Heights",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600040"
    };
  }

  addToCart(productId, qty = 1) {
    const existing = this.cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({ id: productId, qty });
    }
    this.saveState();
    const prod = NOVAMART_DATA.products.find(p => p.id === productId);
    const title = prod ? prod.name : 'Product';
    this.showToast(`Added "${title}" to your shopping cart! 🛒`, 'success');
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveState();
    this.showToast('Item removed from cart.', 'info');
  }

  updateCartQty(productId, qty) {
    if (qty <= 0) {
      this.removeFromCart(productId);
      return;
    }
    const item = this.cart.find(i => i.id === productId);
    if (item) {
      item.qty = qty;
      this.saveState();
    }
  }

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    const prod = NOVAMART_DATA.products.find(p => p.id === productId);
    const title = prod ? prod.name : 'Product';
    if (idx >= 0) {
      this.wishlist.splice(idx, 1);
      this.showToast(`Removed "${title}" from Wishlist.`, 'info');
    } else {
      this.wishlist.push(productId);
      this.showToast(`Added "${title}" to Wishlist! ♡`, 'success');
    }
    this.saveState();
  }

  updateBadges() {
    const cartBadges = document.querySelectorAll('.cart-badge-count');
    const wishBadges = document.querySelectorAll('.wish-badge-count');
    
    const cartTotal = this.cart.reduce((sum, i) => sum + i.qty, 0);
    cartBadges.forEach(el => el.textContent = cartTotal);
    wishBadges.forEach(el => el.textContent = this.wishlist.length);
  }

  showToast(message, type = 'info') {
    let container = document.getElementById('nova-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'nova-toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    toast.innerHTML = `
      <div class="toast-icon">${type === 'success' ? '✓' : type === 'warning' ? '⚠️' : 'ℹ️'}</div>
      <div class="toast-content">${message}</div>
      <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }
}

window.novaStore = new NovaStoreEngine();
window.addEventListener('DOMContentLoaded', () => {
  window.novaStore.updateBadges();
});
