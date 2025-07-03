
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart();
      setSelectedSize('');
    }
  };

  return (
    <Card 
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 bg-white rounded-3xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 rounded-full px-3 py-1">
          {product.category}
        </Badge>
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            variant="secondary"
            size="lg"
            className="transform transition-transform duration-300 hover:scale-110 bg-white/95 text-gray-900 border-0 rounded-full font-semibold shadow-lg"
          >
            Quick View
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-gray-900 mb-4">
          ${product.price}
        </p>
        
        {/* Size Selection */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Size:</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map(size => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-8 text-xs rounded-full transition-all duration-200 ${
                  selectedSize === size 
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-0' 
                    : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        <Button 
          onClick={handleAddToCart}
          disabled={!selectedSize}
          className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white transition-all duration-300 disabled:bg-gray-300 disabled:from-gray-300 disabled:to-gray-300 rounded-full font-semibold py-3 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
