'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ShoppingBag, Heart } from 'lucide-react';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartMessage, setCartMessage] = useState('');

  // Calculator product details
  const product = {
    id: 1,
    name: 'ADVANCED CALCULATOR',
    price: 49.99,
    originalPrice: 79.99,
    label: 'NEW',
    description: 'Professional-grade calculator with advanced mathematical functions. Designed for precision, built for performance. Heavy-duty construction with sleek aesthetic.',
    features: [
      'Advanced mathematical functions',
      'Large, clear display',
      'Durable construction',
      'Lightweight and portable',
      'Long battery life',
      'Solar + battery power'
    ],
    inStock: true
  };

  const handleAddToCart = () => {
    setCartMessage('Added to cart!');
    setTimeout(() => setCartMessage(''), 2000);
  };

  const handleBuy = () => {
    // Redirect to checkout
    window.location.href = '/cart';
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] text-[#0F0F0F] overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F8F8F8] border-b-2 sm:border-b-4 border-[#0F0F0F] w-full">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <ArrowLeft size={20} className="group-hover:text-[#5DD62C] transition-colors" />
            <h1 className="font-display text-2xl sm:text-3xl font-black tracking-tighter leading-none group-hover:text-[#5DD62C] transition-colors duration-200 whitespace-nowrap">
              STRATUM
            </h1>
          </Link>
          <Link href="/cart" className="p-1.5 sm:p-2 border-2 border-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-[#F8F8F8] transition-all duration-200 relative">
            <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
            <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-[#5DD62C] text-[#0F0F0F] text-xs font-black w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border-2 border-[#0F0F0F]">0</span>
          </Link>
        </div>
      </nav>

      {/* Product Section */}
      <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="bg-[#5DD62C] aspect-square flex flex-col items-center justify-center relative overflow-hidden border-2 sm:border-4 border-[#0F0F0F] w-full">
            <div className="absolute top-0 left-0 bg-[#0F0F0F] text-[#F8F8F8] px-3 sm:px-4 py-2 sm:py-3 font-display font-black text-xs sm:text-sm tracking-widest z-10">
              {product.label}
            </div>
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <Image
                src="/images/calculator.png"
                alt="Advanced calculator"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) 18rem, 14rem"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between space-y-6 sm:space-y-8 w-full overflow-x-hidden">
            {/* Header */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tight mb-2 sm:mb-4 break-words">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3 sm:gap-4">
                  <p className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#5DD62C]">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="font-body text-sm sm:text-base text-[#606060] line-through">
                    ${product.originalPrice.toFixed(2)}
                  </p>
                </div>
              </div>

              <p className="font-body text-sm sm:text-base md:text-lg text-[#606060] leading-relaxed max-w-lg break-words">
                {product.description}
              </p>

              {/* Status */}
              <div className="inline-block">
                {product.inStock ? (
                  <p className="font-display font-black text-sm tracking-wider text-[#337418] border-2 border-[#337418] px-3 sm:px-4 py-2">
                    IN STOCK
                  </p>
                ) : (
                  <p className="font-display font-black text-sm tracking-wider text-[#D63C3C] border-2 border-[#D63C3C] px-3 sm:px-4 py-2">
                    SOLD OUT
                  </p>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4 border-t-2 border-b-2 border-[#0F0F0F] py-6 sm:py-8 w-full overflow-x-hidden">
              <h3 className="font-display font-black text-sm sm:text-base tracking-wider">FEATURES:</h3>
              <ul className="space-y-2 sm:space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-body text-[#606060] break-words">
                    <span className="text-[#5DD62C] font-black mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4 sm:space-y-6 w-full overflow-x-hidden">
              {/* Quantity Selector */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-display font-black text-sm tracking-wider">QTY:</span>
                <div className="flex items-center border-2 border-[#0F0F0F]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 sm:px-4 py-2 sm:py-3 font-display font-black hover:bg-[#0F0F0F] hover:text-[#F8F8F8] transition-all"
                  >
                    −
                  </button>
                  <span className="px-4 sm:px-6 py-2 sm:py-3 font-display font-black bg-[#F8F8F8]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 sm:px-4 py-2 sm:py-3 font-display font-black hover:bg-[#0F0F0F] hover:text-[#F8F8F8] transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                <button
                  onClick={handleAddToCart}
                  className="bg-[#202020] text-[#F8F8F8] px-4 sm:px-6 py-3 sm:py-4 font-display font-black text-xs sm:text-sm tracking-wider hover:shadow-lg transition-all border-2 border-[#0F0F0F] hover:bg-[#5DD62C] hover:text-[#0F0F0F] flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <ShoppingBag size={18} />
                  ADD TO CART
                </button>
                <button
                  onClick={handleBuy}
                  className="bg-[#5DD62C] text-[#0F0F0F] px-4 sm:px-6 py-3 sm:py-4 font-display font-black text-xs sm:text-sm tracking-wider hover:shadow-lg transition-all border-2 border-[#5DD62C] hover:bg-[#337418] hover:border-[#337418] whitespace-nowrap"
                >
                  BUY NOW
                </button>
              </div>

              {/* Wishlist */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-full py-3 sm:py-4 font-display font-black text-xs sm:text-sm tracking-wider border-2 border-[#0F0F0F] transition-all flex items-center justify-center gap-2 ${
                  isFavorite
                    ? 'bg-[#5DD62C] text-[#0F0F0F]'
                    : 'bg-[#F8F8F8] text-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-[#F8F8F8]'
                }`}
              >
                <Heart size={18} className={isFavorite ? 'fill-current' : ''} />
                {isFavorite ? 'ADDED TO WISHLIST' : 'ADD TO WISHLIST'}
              </button>

              {/* Cart Message */}
              {cartMessage && (
                <div className="bg-[#5DD62C] text-[#0F0F0F] px-4 sm:px-6 py-3 sm:py-4 font-display font-black text-xs sm:text-sm tracking-wider text-center border-2 border-[#0F0F0F] animate-slide">
                  {cartMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 sm:border-t-4 border-[#0F0F0F] bg-[#F8F8F8] w-full overflow-x-hidden">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h3 className="font-display text-lg sm:text-xl font-black tracking-tight mb-3 sm:mb-4">STRATUM</h3>
            <p className="text-xs sm:text-sm font-body text-[#606060]">
              © 2025 STRATUM. Tools and culture for those who demand more.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
