const products = [
  {
    _id: "1",
    name: "Premium Wireless Headphones",
    price: 15999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    description: "High-quality noise-cancelling headphones with 30-hour battery life and premium sound.",
    category: "Electronics",
    rating: 4.8,
    reviews: 256
  },
  {
    _id: "2",
    name: "Flagship Smartphone Max",
    price: 78000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    description: "Latest flagship with 108MP camera, 5G, and premium display.",
    category: "Electronics",
    rating: 4.9,
    reviews: 512
  },
  {
    _id: "3",
    name: "Ultra Slim Laptop",
    price: 95000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    description: "Lightweight laptop with 16GB RAM, 512GB SSD, and 12-hour battery.",
    category: "Electronics",
    rating: 4.7,
    reviews: 189
  },
  {
    _id: "4",
    name: "Smart Watch Pro",
    price: 25000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    description: "Advanced fitness tracking with heart rate monitor and water resistance.",
    category: "Wearables",
    rating: 4.6,
    reviews: 342
  },
  {
    _id: "5",
    name: "4K Action Camera",
    price: 32000,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600",
    description: "Professional 4K action camera with stabilization and underwater mode.",
    category: "Cameras",
    rating: 4.8,
    reviews: 278
  },
  {
    _id: "6",
    name: "Portable Bluetooth Speaker",
    price: 8999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
    description: "Powerful waterproof speaker with 12-hour playback and clear bass.",
    category: "Audio",
    rating: 4.5,
    reviews: 421
  },
  {
    _id: "7",
    name: "Mechanical Gaming Keyboard",
    price: 12000,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600",
    description: "RGB backlit mechanical keyboard with custom switches for gaming.",
    category: "Gaming",
    rating: 4.7,
    reviews: 198
  },
  {
    _id: "8",
    name: "Wireless Gaming Mouse",
    price: 6500,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
    description: "High precision gaming mouse with 7 programmable buttons.",
    category: "Gaming",
    rating: 4.6,
    reviews: 312
  },
  {
    _id: "9",
    name: "4K Webcam",
    price: 18000,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600",
    description: "Professional 4K webcam with auto-focus and noise cancellation.",
    category: "Electronics",
    rating: 4.4,
    reviews: 156
  },
  {
    _id: "10",
    name: "Portable SSD 1TB",
    price: 8500,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600",
    description: "Fast portable SSD with USB-C connectivity and shock resistance.",
    category: "Storage",
    rating: 4.8,
    reviews: 267
  },
  {
    _id: "11",
    name: "Tablet Pro 12.9",
    price: 65000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
    description: "Large display tablet with stylus support and powerful processor.",
    category: "Electronics",
    rating: 4.7,
    reviews: 234
  },
  {
    _id: "12",
    name: "Bluetooth Earphones",
    price: 3999,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600",
    description: "Wireless Bluetooth earphones with deep bass and long battery life.",
    category: "Audio",
    rating: 4.5,
    reviews: 189
  },
  {
    _id: "13",
    name: "USB-C Hub Multi-Port",
    price: 4500,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=600",
    description: "All-in-one USB-C hub with multiple ports for connectivity.",
    category: "Accessories",
    rating: 4.6,
    reviews: 145
  },
  {
    _id: "14",
    name: "Screen Protector Premium",
    price: 1999,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
    description: "Tempered glass screen protector with crystal clear quality.",
    category: "Accessories",
    rating: 4.4,
    reviews: 321
  },
  {
    _id: "15",
    name: "Phone Case Slim Fit",
    price: 899,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600",
    description: "Slim protective phone case available in multiple colors.",
    category: "Accessories",
    rating: 4.5,
    reviews: 456
  },
  {
    _id: "16",
    name: "Smart LED Bulb Set",
    price: 5999,
    image: "https://images.unsplash.com/photo-1550985543-49bee3167284?w=600",
    description: "Smart bulbs with color control and voice activation support.",
    category: "Smart Home",
    rating: 4.6,
    reviews: 278
  },
  {
    _id: "17",
    name: "Wireless Printer Scanner",
    price: 12000,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600",
    description: "All-in-one wireless printer with scanning and copying features.",
    category: "Electronics",
    rating: 4.7,
    reviews: 189
  },
  {
    _id: "18",
    name: "Smart Door Lock",
    price: 15000,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600",
    description: "Keyless smart lock with app control and fingerprint recognition.",
    category: "Smart Home",
    rating: 4.8,
    reviews: 234
  },
  {
    _id: "19",
    name: "Robot Vacuum",
    price: 28000,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600",
    description: "Autonomous vacuum with smart mapping and app control.",
    category: "Home Appliances",
    rating: 4.6,
    reviews: 312
  },
  {
    _id: "20",
    name: "Gaming Headset RGB",
    price: 18000,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=600",
    description: "Professional gaming headset with surround sound and RGB lighting.",
    category: "Electronics",
    rating: 4.7,
    reviews: 267
  }
];

export { products };
