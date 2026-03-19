'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Heart, Menu, X, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] text-[#0F0F0F] overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F8F8F8] border-b-2 sm:border-b-4 border-[#0F0F0F] w-full">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group cursor-pointer">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter leading-none group-hover:text-[#5DD62C] transition-colors duration-200 whitespace-nowrap">
              STRATUM
            </h1>
            <p className="text-xs font-semibold tracking-widest text-[#606060] group-hover:text-[#0F0F0F] transition-colors hidden sm:block">
              RAW • BOLD • REAL
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 lg:gap-12 items-center font-display font-bold text-xs sm:text-sm tracking-wide">
            <Link
              href="/products"
              className="relative hover:text-[#5DD62C] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5DD62C] hover:after:w-full after:transition-all after:duration-300"
            >
              SHOP
            </Link>
            <a
              href="#culture"
              className="relative hover:text-[#5DD62C] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5DD62C] hover:after:w-full after:transition-all after:duration-300"
            >
              CULTURE
            </a>
            <Link
              href="/sign-in"
              className="relative hover:text-[#5DD62C] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5DD62C] hover:after:w-full after:transition-all after:duration-300"
            >
              LOGIN
            </Link>
            <Link
              href="/sign-up"
              className="inline-flex items-center border-2 border-[#0F0F0F] px-3 py-1.5 bg-[#0F0F0F] text-[#F8F8F8] hover:bg-[#5DD62C] hover:text-[#0F0F0F] transition-colors tracking-[0.2em]"
            >
              SIGN UP
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex gap-1 sm:gap-2 md:gap-3 items-center">
            <Link href="/cart" className="p-1.5 sm:p-2 border-2 border-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-[#F8F8F8] transition-all duration-200 hover:shadow-lg relative">
              <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
              <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-[#5DD62C] text-[#0F0F0F] text-xs font-black w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border-2 border-[#0F0F0F]">0</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 sm:p-2 border-2 border-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-[#F8F8F8] transition-all duration-200 ml-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 sm:pb-6 space-y-3 border-t-2 border-[#0F0F0F] pt-3 sm:pt-4 px-3 sm:px-4 md:px-6 animate-slide w-full overflow-x-hidden">
            <Link
              href="/products"
              className="block font-display font-bold text-xs sm:text-sm tracking-wide hover:text-[#5DD62C] transition-colors"
            >
              SHOP
            </Link>
            <a
              href="#culture"
              className="block font-display font-bold text-xs sm:text-sm tracking-wide hover:text-[#5DD62C] transition-colors"
            >
              CULTURE
            </a>
            <Link
              href="/sign-in"
              className="block font-display font-bold text-xs sm:text-sm tracking-wide hover:text-[#5DD62C] transition-colors"
            >
              LOGIN
            </Link>
            <Link
              href="/sign-up"
              className="block font-display font-bold text-xs sm:text-sm tracking-wide hover:text-[#5DD62C] transition-colors"
            >
              SIGN UP
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white border-b-2 sm:border-b-4 lg:border-b-8 border-[#0F0F0F] w-full overflow-x-hidden">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
            {/* Left: Text Block */}
            <div className="bg-[#F8F8F8] flex flex-col justify-between p-4 sm:p-8 md:p-12 lg:p-16 border-r-0 sm:border-r-2 md:border-r-4 border-[#0F0F0F] space-y-6 sm:space-y-8 md:space-y-12">
              <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-slide w-full overflow-x-hidden">
                <div className="space-y-2 sm:space-y-4">
                  <div className="inline-block bg-[#5DD62C] text-[#0F0F0F] px-3 sm:px-4 py-1.5 sm:py-2 font-display font-black text-xs sm:text-sm tracking-wider border-2 border-[#0F0F0F] hover:shadow-lg transition-shadow">
                    SEASON 01
                  </div>
                  <h2 className="hero-title font-display font-black tracking-tighter leading-tight break-words">
                    NO COMPROMISE.
                  </h2>
                  <h3 className="hero-subtitle font-display font-black tracking-tighter leading-tight text-[#5DD62C] break-words">
                    ONLY REAL.
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg font-body leading-relaxed max-w-md text-[#606060] break-words">
                  Unfiltered tools for those who refuse to blend in. Raw functionality, bold design, authentic pieces. This is culture, not consumption.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 w-full">
                  <Link href="/products/1" className="bg-[#0F0F0F] text-[#F8F8F8] px-4 sm:px-6 md:px-8 py-3 sm:py-4 font-display font-black text-xs sm:text-sm tracking-wider hover:shadow-xl transition-all duration-200 border-2 border-[#0F0F0F] hover:bg-[#5DD62C] hover:text-[#0F0F0F] text-center whitespace-nowrap">
                    SHOP NOW
                  </Link>
                  <button className="border-2 sm:border-4 border-[#0F0F0F] px-4 sm:px-6 md:px-8 py-3 sm:py-4 font-display font-black text-xs sm:text-sm tracking-wider hover:bg-[#0F0F0F] hover:text-[#F8F8F8] transition-all duration-200 hover:shadow-xl text-center whitespace-nowrap">
                    OUR STORY
                  </button>
                </div>
              </div>
              <div className="text-xs font-display font-bold tracking-widest text-[#606060] border-t-2 border-[#0F0F0F] pt-6 sm:pt-8 break-words">
                EST. 2025 / DESIGNED FOR REBELLION
              </div>
            </div>

            {/* Right: Visual Block */}
            <div className="hidden sm:flex bg-gradient-to-br from-[#5DD62C] via-[#337418] to-[#5DD62C] relative overflow-hidden items-center justify-center p-6 md:p-8 group">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 md:w-96 sm:h-64 md:h-96 bg-[#0F0F0F] transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 md:w-96 sm:h-64 md:h-96 bg-[#0F0F0F] transform translate-x-1/3 translate-y-1/3"></div>
              </div>
              <div className="relative text-center space-y-3 sm:space-y-4 group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 animate-pulse">
                  <Image
                    src="/images/calculator.png"
                    alt="Advanced calculator"
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 12rem, 10rem"
                    priority
                  />
                </div>
                <p className="font-display font-black text-[#0F0F0F] text-base sm:text-lg md:text-xl tracking-wider">CALCULATOR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-[#F8F8F8] py-12 sm:py-16 md:py-20 lg:py-24 w-full overflow-x-hidden" id="products">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {/* Section Header */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 border-l-4 sm:border-l-6 md:border-l-8 border-[#5DD62C] pl-4 sm:pl-6 md:pl-8 animate-slide">
              <h2 className="section-title font-display font-black tracking-tighter leading-tight break-words">
                FEATURED
                <br />
                PRODUCTS
              </h2>
              <p className="text-xs sm:text-sm md:text-lg font-body text-[#606060] max-w-md break-words">
                Limited items available. Cutting-edge tools for modern minds.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full overflow-x-hidden">
              {/* Calculator - Available Product */}
              <Link href="/products/1" className="group">
                <div className="bg-white border-2 sm:border-4 border-[#0F0F0F] overflow-hidden hover:shadow-xl transition-all duration-300 w-full">
                  {/* Product Image */}
                  <div className="bg-[#5DD62C] aspect-square flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300 w-full">
                    <div className="absolute top-0 left-0 bg-[#0F0F0F] text-[#F8F8F8] px-2 sm:px-3 py-1 sm:py-2 font-display font-black text-xs tracking-widest z-10 group-hover:bg-[#5DD62C] group-hover:text-[#0F0F0F] transition-colors">
                      NEW
                    </div>
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/images/calculator.png"
                        alt="Advanced calculator"
                        fill
                        className="object-contain"
                        sizes="(min-width: 768px) 11rem, 9rem"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4 bg-white w-full overflow-x-hidden">
                    <div>
                      <h3 className="font-display font-black text-sm sm:text-base md:text-lg tracking-tight group-hover:text-[#5DD62C] transition-colors break-words">
                        ADVANCED CALCULATOR
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl font-display font-black text-[#0F0F0F] mt-1 sm:mt-2">
                        $49.99
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-[#606060] font-body break-words">
                      Precision calculating tool with advanced functions and sleek design.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Coming Soon - Featured */}
              <div className="group">
                <div className="bg-white border-2 sm:border-4 border-[#0F0F0F] overflow-hidden hover:shadow-xl transition-all duration-300 w-full">
                  <div className="bg-[#202020] aspect-square flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300 w-full">
                    <div className="absolute top-0 left-0 bg-[#0F0F0F] text-[#F8F8F8] px-2 sm:px-3 py-1 sm:py-2 font-display font-black text-xs tracking-widest z-10">
                      COMING SOON
                    </div>
                    <div className="text-center space-y-2 relative z-10">
                      <div className="text-4xl sm:text-5xl md:text-6xl">⏰</div>
                      <p className="font-display font-black text-[#F8F8F8] text-xs sm:text-sm tracking-wider">MYSTERY ITEM</p>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4 bg-white w-full overflow-x-hidden">
                    <div>
                      <h3 className="font-display font-black text-sm sm:text-base md:text-lg tracking-tight text-[#606060] break-words">
                        CLASSIFIED PROJECT
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl font-display font-black text-[#0F0F0F] mt-1 sm:mt-2">
                        TBA
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-[#606060] font-body break-words">
                      Something extraordinary is being prepared. Check back soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Coming Soon Grid */}
            <div className="mt-8 sm:mt-12 md:mt-16 pt-8 sm:pt-12 md:pt-16 border-t-4 border-[#0F0F0F] w-full overflow-x-hidden">
              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight mb-6 sm:mb-8 md:mb-12 break-words">
                UPCOMING COLLECTION
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full overflow-x-hidden">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="group">
                    <div className="bg-white border-2 sm:border-4 border-[#0F0F0F] overflow-hidden hover:shadow-xl transition-all duration-300 w-full">
                      <div className="bg-[#337418] aspect-square flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300 w-full">
                        <div className="absolute top-0 left-0 bg-[#0F0F0F] text-[#F8F8F8] px-2 sm:px-3 py-1 sm:py-2 font-display font-black text-xs tracking-widest z-10">
                          COMING SOON
                        </div>
                        <div className="text-center space-y-2 relative z-10">
                          <div className="text-4xl sm:text-5xl md:text-6xl">🔒</div>
                          <p className="font-display font-black text-[#F8F8F8] text-xs sm:text-sm tracking-wider">LOCKED</p>
                        </div>
                      </div>

                      <div className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4 bg-white w-full overflow-x-hidden">
                        <div>
                          <h3 className="font-display font-black text-sm sm:text-base md:text-lg tracking-tight text-[#606060] break-words">
                            PROJECT {item}
                          </h3>
                          <p className="text-base sm:text-lg md:text-xl font-display font-black text-[#0F0F0F] mt-1 sm:mt-2">
                            TBA
                          </p>
                        </div>
                        <p className="text-xs sm:text-sm text-[#606060] font-body break-words">
                          Launching soon. Stay tuned for exclusive details.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="bg-[#0F0F0F] text-[#F8F8F8] py-12 sm:py-16 md:py-20 border-t-2 sm:border-t-4 md:border-t-8 border-[#5DD62C] w-full overflow-x-hidden">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <h2 className="section-title font-display font-black tracking-tighter leading-tight animate-slide break-words">
            TOOLS FOR
            <br />
            THE BOLD.
          </h2>
          <p className="text-xs sm:text-sm md:text-lg font-body text-[#C0C0C0] max-w-2xl mx-auto leading-relaxed break-words">
            Join the revolution. Get early access to new tools and exclusive drops.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto pt-3 sm:pt-4 w-full">
            <input
              type="email"
              placeholder="your.email@now.com"
              className="flex-1 px-3 sm:px-6 py-3 sm:py-4 bg-[#F8F8F8] text-[#0F0F0F] placeholder:text-[#606060] border-2 border-[#5DD62C] font-display font-bold text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#5DD62C] focus:ring-inset w-full"
            />
            <button className="bg-[#5DD62C] text-[#0F0F0F] hover:bg-[#337418] transition-all duration-200 px-4 sm:px-8 py-3 sm:py-4 font-display font-black text-xs sm:text-sm tracking-wider border-2 border-[#5DD62C] hover:shadow-lg whitespace-nowrap">
              NOTIFY
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 sm:border-t-4 border-[#0F0F0F] bg-[#F8F8F8] w-full overflow-x-hidden">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12 pb-6 sm:pb-8 md:pb-12 border-b-2 border-[#D0D0D0]">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-black tracking-tight">STRATUM</h3>
                <p className="text-xs font-semibold tracking-widest text-[#606060] mt-1 sm:mt-2 hidden sm:block">RAW • BOLD • REAL</p>
              </div>
              <p className="text-xs sm:text-sm font-body text-[#606060] leading-relaxed break-words">
                Tools and culture for those who demand more.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-display font-black text-xs sm:text-sm tracking-widest">LINKS</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#606060]">
                <li><Link href="/products" className="hover:text-[#5DD62C] transition-colors font-body">Shop</Link></li>
                <li><a href="#culture" className="hover:text-[#5DD62C] transition-colors font-body">Culture</a></li>
                <li><a href="#" className="hover:text-[#5DD62C] transition-colors font-body">About</a></li>
              </ul>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-display font-black text-xs sm:text-sm tracking-widest">CONNECT</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#606060]">
                <li><a href="#" className="hover:text-[#5DD62C] transition-colors font-body">Twitter</a></li>
                <li><a href="#" className="hover:text-[#5DD62C] transition-colors font-body">Instagram</a></li>
                <li><a href="#" className="hover:text-[#5DD62C] transition-colors font-body">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-xs font-body text-[#606060] break-words">
              © 2025 STRATUM. All rights reserved. Crafted for rebellion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
