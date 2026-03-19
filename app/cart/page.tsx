'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ShoppingBag, Trash2 } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'ADVANCED CALCULATOR',
      price: 49.99,
      quantity: 1,
    }
  ]);

  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + tax + shipping;

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleConfirmOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
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
          <div className="font-display font-black text-sm sm:text-base tracking-wider">YOUR CART</div>
        </div>
      </nav>

      {/* Cart Section */}
      <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {!orderPlaced ? (
          <div className="max-w-6xl mx-auto">
            {cartItems.length > 0 ? (
              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4 sm:space-y-6 w-full overflow-x-hidden">
                  <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-6 sm:mb-8">
                    ITEMS ({cartItems.length})
                  </h2>

                  <div className="space-y-4 sm:space-y-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border-2 sm:border-4 border-[#0F0F0F] p-4 sm:p-6 flex gap-4 sm:gap-6 items-center w-full overflow-x-hidden"
                      >
                        {/* Product Image */}
                        <div className="bg-[#5DD62C] w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center flex-shrink-0 border-2 border-[#0F0F0F]">
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                            <Image
                              src="/images/calculator.png"
                              alt="Advanced calculator"
                              fill
                              className="object-contain"
                              sizes="(min-width: 768px) 6rem, 5rem"
                            />
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 space-y-3 sm:space-y-4 min-w-0">
                          <h3 className="font-display font-black text-sm sm:text-base md:text-lg tracking-tight break-words">
                            {item.name}
                          </h3>
                          <p className="font-display font-black text-base sm:text-lg md:text-xl text-[#5DD62C]">
                            ${item.price.toFixed(2)}
                          </p>

                          {/* Quantity Control */}
                          <div className="flex items-center gap-2 sm:gap-3 border-2 border-[#0F0F0F] w-fit">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 sm:px-3 py-1 sm:py-2 font-display font-black text-sm hover:bg-[#0F0F0F] hover:text-[#F8F8F8] transition-all"
                            >
                              −
                            </button>
                            <span className="px-3 sm:px-4 py-1 sm:py-2 font-display font-black bg-[#F8F8F8]">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 sm:px-3 py-1 sm:py-2 font-display font-black text-sm hover:bg-[#0F0F0F] hover:text-[#F8F8F8] transition-all"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Price & Delete */}
                        <div className="flex flex-col items-end gap-3 sm:gap-4 flex-shrink-0">
                          <p className="font-display font-black text-base sm:text-lg md:text-xl">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 sm:p-3 border-2 border-[#0F0F0F] hover:bg-[#D63C3C] hover:text-[#F8F8F8] hover:border-[#D63C3C] transition-all"
                          >
                            <Trash2 size={18} className="sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Continue Shopping */}
                  <Link
                    href="/products"
                    className="inline-block mt-6 sm:mt-8 font-display font-black text-xs sm:text-sm tracking-wider text-[#5DD62C] hover:text-[#337418] transition-colors border-b-2 border-[#5DD62C] pb-1"
                  >
                    ← CONTINUE SHOPPING
                  </Link>
                </div>

                {/* Order Summary */}
                <div className="bg-white border-2 sm:border-4 border-[#0F0F0F] p-4 sm:p-6 md:p-8 h-fit sticky top-20 space-y-4 sm:space-y-6 w-full overflow-x-hidden">
                  <h3 className="font-display font-black text-lg sm:text-xl tracking-tight">ORDER SUMMARY</h3>

                  <div className="space-y-3 sm:space-y-4 border-t-2 border-b-2 border-[#0F0F0F] py-4 sm:py-6">
                    <div className="flex justify-between text-sm sm:text-base font-body break-words">
                      <span>Subtotal</span>
                      <span className="font-black">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base font-body break-words">
                      <span>Tax (10%)</span>
                      <span className="font-black">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base font-body break-words">
                      <span>Shipping</span>
                      <span className="font-black">
                        {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-display font-black text-lg sm:text-xl tracking-wider">TOTAL</span>
                    <span className="font-display font-black text-2xl sm:text-3xl text-[#5DD62C]">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={handleConfirmOrder}
                    className="w-full bg-[#5DD62C] text-[#0F0F0F] px-4 sm:px-6 py-3 sm:py-4 font-display font-black text-xs sm:text-sm tracking-wider hover:shadow-lg transition-all border-2 border-[#5DD62C] hover:bg-[#337418] hover:border-[#337418] whitespace-nowrap"
                  >
                    CONFIRM ORDER
                  </button>

                  {subtotal < 100 && (
                    <p className="text-xs sm:text-sm font-body text-[#606060] text-center break-words">
                      Free shipping on orders over $100
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6 sm:space-y-8 py-12 sm:py-16 md:py-20">
                <ShoppingBag size={64} className="mx-auto text-[#606060] opacity-50" />
                <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight">YOUR CART IS EMPTY</h2>
                <p className="text-sm sm:text-base font-body text-[#606060] max-w-md mx-auto break-words">
                  Add some products to get started. We have amazing tools waiting for you.
                </p>
                <Link
                  href="/products"
                  className="inline-block bg-[#0F0F0F] text-[#F8F8F8] px-6 sm:px-8 py-3 sm:py-4 font-display font-black text-xs sm:text-sm tracking-wider hover:shadow-lg transition-all border-2 border-[#0F0F0F] hover:bg-[#5DD62C] hover:text-[#0F0F0F]"
                >
                  SHOP NOW
                </Link>
              </div>
            )}
          </div>
        ) : (
          // Order Confirmation
          <div className="text-center space-y-6 sm:space-y-8 py-12 sm:py-16 md:py-20 max-w-2xl mx-auto">
            <div className="text-6xl sm:text-7xl md:text-8xl animate-pulse">✓</div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight break-words">
              ORDER CONFIRMED
            </h2>
            <p className="text-sm sm:text-base font-body text-[#606060] leading-relaxed break-words">
              Thank you for your order! We're preparing your items for shipment. You'll receive a confirmation email shortly.
            </p>
            <div className="border-2 sm:border-4 border-[#5DD62C] p-6 sm:p-8 space-y-3 sm:space-y-4 bg-[#F8F8F8] break-words">
              <p className="font-display font-black text-lg sm:text-xl tracking-wider">ORDER TOTAL</p>
              <p className="font-display font-black text-4xl sm:text-5xl text-[#5DD62C]">
                ${total.toFixed(2)}
              </p>
            </div>
            <p className="text-xs sm:text-sm font-body text-[#606060] break-words">
              Redirecting to home in 3 seconds...
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t-2 sm:border-t-4 border-[#0F0F0F] bg-[#F8F8F8] w-full overflow-x-hidden mt-12 sm:mt-16 md:mt-20">
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
