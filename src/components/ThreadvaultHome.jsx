import React, { useState } from 'react';
import { ShoppingCart, Heart, Search, Menu, X, ChevronDown, Star } from 'lucide-react';

export default function ThreadvaultHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [likedProducts, setLikedProducts] = useState({});

  const categories = ['Oversized Tees', 'Basic Tees', 'Graphic Tees', 'Vintage Wash', 'Premium Cotton', 'Limited Edition'];
  const bestSellers = [
    { id: 1, name: 'Classic Black Oversized', price: '$49.99', image: '🖤', colors: ['black', 'white', 'navy'] },
    { id: 2, name: 'White Essential Tee', price: '$39.99', image: '⚪', colors: ['white', 'black', 'gray'] },
    { id: 3, name: 'Vintage Blue Wash', price: '$54.99', image: '💙', colors: ['blue', 'black'] },
    { id: 4, name: 'Premium Cotton Plain', price: '$44.99', image: '🟤', colors: ['brown', 'black', 'white'] },
  ];

  const features = [
    { icon: '🌾', title: '100% Premium Cotton', desc: 'Highest quality fabric' },
    { icon: '⚖️', title: 'Heavyweight Fabric', desc: '280 GSM comfort' },
    { icon: '✨', title: 'Soft Feel', desc: 'Pre-washed perfection' },
    { icon: '🌍', title: 'Worldwide Shipping', desc: 'Fast delivery' },
    { icon: '↩️', title: 'Easy Returns', desc: '30-day policy' },
  ];

  const toggleWishlist = (id) => {
    setLikedProducts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="w-full bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="font-bebas text-2xl sm:text-3xl font-bold tracking-widest">
            THREADVAULT
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {categories.slice(0, 4).map((cat) => (
              <a key={cat} href="#" className="text-xs tracking-widest uppercase hover:text-[#D4AF37] transition-colors">
                {cat}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="hidden sm:block hover:text-[#D4AF37] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative hover:text-[#D4AF37] transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{cartCount}</span>}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden hover:text-[#D4AF37] transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/98 border-t border-white/10 p-6 space-y-4 animate-fade-up">
            {categories.map((cat) => (
              <a key={cat} href="#" className="block text-sm tracking-widest uppercase hover:text-[#D4AF37] transition-colors">
                {cat}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen bg-gradient-to-br from-black via-[#0B0B0B] to-[#1D1D1D] flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full px-6 sm:px-10 lg:px-16 gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <div className="inline-block mb-4 px-4 py-2 border border-[#D4AF37]/50 rounded-full text-[#D4AF37] text-xs tracking-widest uppercase">
              Premium T-Shirt Collection
            </div>
            <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-wider animate-fade-up-delay-1">
              WEAR WHAT DEFINES YOU
            </h1>
            <p className="text-white/70 text-sm sm:text-base mb-8 leading-relaxed max-w-lg animate-fade-up-delay-2">
              Premium oversized T-shirts crafted for everyday comfort with bold, modern style. Made from 100% premium cotton with heavyweight fabric for lasting quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-delay-3">
              <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-bold tracking-widest uppercase hover:bg-white transition-all hover:scale-105">
                Shop Collection
              </button>
              <button className="border border-[#D4AF37]/50 text-white px-8 py-3 rounded-full font-bold tracking-widest uppercase hover:bg-[#D4AF37]/10 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right - 3D T-Shirt */}
          <div className="flex-1 flex items-center justify-center animate-fade-up-delay-2">
            <div className="relative w-full aspect-square max-w-sm">
              {/* Floating T-Shirt */}
              <div className="absolute inset-0 flex items-center justify-center text-9xl animate-bounce">
                👕
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-[#3A86FF]/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 bg-black border-t border-white/10">
        <h2 className="font-bebas text-4xl sm:text-5xl font-bold mb-12 text-center tracking-wider">
          Featured Collections
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {categories.map((cat, i) => (
            <div
              key={cat}
              className="group bg-[#1D1D1D] border border-white/10 p-6 rounded-lg text-center hover:border-[#D4AF37]/50 transition-all hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-3">{['🖤', '⚪', '💙', '🟤', '✨', '🌟'][i]}</div>
              <h3 className="font-inter font-bold text-sm sm:text-base">{cat}</h3>
              <p className="text-white/50 text-xs mt-2">Explore</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 bg-[#1D1D1D] border-t border-white/10">
        <h2 className="font-bebas text-4xl sm:text-5xl font-bold mb-12 text-center tracking-wider">
          Best Sellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {bestSellers.map((product, i) => (
            <div key={product.id} className="group bg-black rounded-lg overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all hover:-translate-y-4 animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
              {/* Product Image */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-[#1D1D1D] to-black flex items-center justify-center overflow-hidden group-hover:bg-[#D4AF37]/5 transition-colors">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">{product.image}</div>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 p-2 bg-black/80 rounded-full hover:bg-[#D4AF37] transition-all"
                >
                  <Heart
                    className={`w-5 h-5 transition-all ${
                      likedProducts[product.id] ? 'fill-current' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-inter font-bold text-sm mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Color Swatches */}
                <div className="flex gap-2 mb-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="w-5 h-5 rounded-full border border-white/30 hover:border-white transition-all"
                      style={{
                        backgroundColor: color === 'black' ? '#0B0B0B' : color === 'white' ? '#F5F5F5' : color === 'navy' ? '#001a4d' : color === 'gray' ? '#808080' : color === 'blue' ? '#3A86FF' : '#8B4513',
                        borderColor: color === 'white' ? '#333' : 'rgba(255,255,255,0.3)'
                      }}
                    />
                  ))}
                </div>

                {/* Size Selector */}
                <div className="flex gap-1 mb-4">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button key={size} className="flex-1 py-1 text-xs border border-white/20 hover:border-[#D4AF37] rounded transition-all hover:text-[#D4AF37]">
                      {size}
                    </button>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="font-bebas text-lg font-bold">{product.price}</span>
                  <button
                    onClick={() => setCartCount(cartCount + 1)}
                    className="bg-[#D4AF37] text-black p-2 rounded-full hover:bg-white transition-all hover:scale-110"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 bg-black border-t border-white/10">
        <h2 className="font-bebas text-4xl sm:text-5xl font-bold mb-12 text-center tracking-wider">
          Why Choose Threadvault
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-[#1D1D1D] border border-white/10 p-6 rounded-lg text-center hover:border-[#D4AF37]/50 transition-all hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-inter font-bold mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIMITED EDITION BANNER */}
      <section className="py-20 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-[#D4AF37] to-[#3A86FF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-black/30 rounded-full text-black text-xs tracking-widest uppercase font-bold">
            Limited Edition
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-4 tracking-wider">
            Summer Collection 2024
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Exclusive designs available for a limited time only. Once they're gone, they're gone forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="font-bebas text-4xl sm:text-5xl font-bold text-black">05</div>
              <div className="text-black/70 text-sm">Days</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-4xl sm:text-5xl font-bold text-black">12</div>
              <div className="text-black/70 text-sm">Hours</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-4xl sm:text-5xl font-bold text-black">34</div>
              <div className="text-black/70 text-sm">Minutes</div>
            </div>
          </div>
          <button className="bg-black text-[#D4AF37] px-8 py-3 rounded-full font-bebas font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all hover:scale-105">
            Shop Limited Edition
          </button>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 bg-[#1D1D1D] border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-bebas text-4xl sm:text-5xl font-bold mb-4 tracking-wider">
            Join The Vault
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get 15% off your first order + exclusive early access to new collections.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-black border border-white/20 px-4 py-3 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-bold tracking-widest uppercase hover:bg-white transition-all hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-12 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bebas text-lg font-bold mb-4 tracking-wider">THREADVAULT</h3>
            <p className="text-white/50 text-sm">Premium T-shirts for everyday confidence.</p>
          </div>
          <div>
            <h4 className="font-inter font-bold mb-4 text-sm uppercase tracking-widest">Shop</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              {categories.map((cat) => (
                <li key={cat}><a href="#" className="hover:text-[#D4AF37] transition-colors">{cat}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-inter font-bold mb-4 text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-inter font-bold mb-4 text-sm uppercase tracking-widest">Follow</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; 2024 Threadvault. All rights reserved. Premium T-shirts for every day.</p>
        </div>
      </footer>
    </div>
  );
}
