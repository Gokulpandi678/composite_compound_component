import React from 'react'
import ProductCard from '../components/Products/ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones with Noise Cancellation',
      price: 99.99,
      discount: 20,
      rating: 5,
      reviewCount: 234,
      image: 'https://via.placeholder.com/300x200?text=Headphones'
    },
    {
      id: 2,
      name: 'Smart Watch Pro - Fitness Tracker',
      price: 199.99,
      discount: 0,
      rating: 4,
      reviewCount: 156,
      image: 'https://via.placeholder.com/300x200?text=Watch'
    },
    {
      id: 3,
      name: 'Adjustable Laptop Stand - Aluminum',
      price: 49.99,
      discount: 15,
      rating: 5,
      reviewCount: 89,
      image: 'https://via.placeholder.com/300x200?text=Stand'
    },
    {
      id: 4,
      name: 'USB-C Hub 7-in-1 Adapter',
      price: 39.99,
      discount: 25,
      rating: 4,
      reviewCount: 412,
      image: 'https://via.placeholder.com/300x200?text=Hub'
    },
    {
      id: 5,
      name: 'Wireless Keyboard and Mouse Combo',
      price: 59.99,
      discount: 10,
      rating: 5,
      reviewCount: 321,
      image: 'https://via.placeholder.com/300x200?text=Keyboard'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products