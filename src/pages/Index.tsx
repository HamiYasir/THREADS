import { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import DesignShowcase from '../components/DesignShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const sampleProducts = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "T-Shirts"
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    category: "Jackets"
  },
  {
    id: 3,
    name: "Black Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    category: "Hoodies"
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Dresses"
  },
  {
    id: 5,
    name: "Casual Jeans",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    sizes: ["28", "30", "32", "34", "36", "38"],
    category: "Jeans"
  },
  {
    id: 6,
    name: "Elegant Blouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Blouses"
  }
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);

  const categories = ['All', 'T-Shirts', 'Jackets', 'Hoodies', 'Dresses', 'Jeans', 'Blouses'];

  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center justify-between h-16">
              <img src="favicon.ico" alt="Threads" className="w-14 h-14 mr-2 rounded-lg" />
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  THREADS
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
              <a href="#shop" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Shop</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
              <a href="/admin" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Admin</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 border-gray-200 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <Button variant="ghost" size="sm" className="hover:bg-emerald-50 hover:text-emerald-600">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-emerald-50 hover:text-emerald-600">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-emerald-50 hover:text-emerald-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              <nav className="space-y-2">
                <a href="#" className="block text-gray-700 hover:text-black transition-colors">Home</a>
                <a href="#shop" className="block text-gray-700 hover:text-black transition-colors">Shop</a>
                <a href="#contact" className="block text-gray-700 hover:text-black transition-colors">Contact</a>
                <a href="/admin" className="block text-gray-700 hover:text-black transition-colors">Admin</a>
              </nav>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="sm">
                  <User className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-4 animate-fade-in">We Print Best Designs You Want</h2>
          <p className="text-xl mb-8 animate-fade-in opacity-90">Premium clothing for the modern wardrobe</p>
          <Button onClick={() => window.location.href = '#shop'} size="lg" className="bg-pink-500 hover:bg-pink-600 text-white border-0 animate-fade-in rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            SHOP NOW
          </Button>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-300/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-yellow-300/40 rounded-full"></div>
      </section>

      {/* Design Showcase Section */}
      <DesignShowcase />

      {/* Products Section */}
      <section id="shop">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center mb-1">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">OUR COLLECTION</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Featured Products</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-0">
            {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">Shop by Category</h3> */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-200 hover:scale-105 rounded-full px-6 py-2 ${
                    selectedCategory === category 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg' 
                      : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

          {/* Results count */}
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              Showing {filteredProducts.length} of {sampleProducts.length} products
              {selectedCategory !== 'All' && (
                <span className="ml-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                  {selectedCategory}
                </span>
              )}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
              {filteredProducts.map(product => (
                <div key={product.id} className="flex justify-center">
                  <ProductCard
                    product={product}
                    onAddToCart={addToCart}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter</p>
            </div>
          )}

          {/* Load More Button (placeholder for future pagination) */}
          {filteredProducts.length > 0 && filteredProducts.length >= 6 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 rounded-full px-8"
              >
                Load More Products
              </Button>
            </div>
          )}
        </section>
      </section>

      {/* Footer */}
      <section id="contact">
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-4">StyleStore</h4>
                <p className="text-gray-300">Premium clothing for the modern lifestyle.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-emerald-400">Shop</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Best Sellers</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Sale</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-emerald-400">Support</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Size Guide</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Returns</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-emerald-400">Connect</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 StyleStore. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Index;
