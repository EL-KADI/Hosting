'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import { Menu, X, LogIn } from 'lucide-react';
import '@/styles/index.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm direction-ltr">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-6">
              <div className="text-4xl font-semibold">
                <Link href="/" onClick={closeMobileMenu}>
                  Logo
                </Link>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full mt-0.5"></div>
                <span className="text-sm">EN</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
                Demos
              </Link>
              <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
                Hosting
              </Link>
              <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
                ProHosting
              </Link>
              <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
                Domains
              </Link>
              <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
                Need Help?
              </Link>
              <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
                Pages
              </Link>
              <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
              <div className="space-x-2"></div>
              <Button className="bg-purple-900 hover:bg-purple-800 text-white px-4 text-sm font-[300] py-2 rounded-lg transition-colors">
                client login
                <LogIn className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-300 rounded-full mt-0.5"></div>
                <span className="text-sm">EN</span>
              </div>

              <Button
                size="small"
                onClick={toggleMobileMenu}
                className="p-2 bg-purple-900 hover:bg-purple-800 border-0 outline-none focus:ring-0 focus:border-0 focus:outline-none focus:ring-offset-0"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          <div
            className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMobileMenuOpen ? ' opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-4 border-t">
              <Link
                href="/"
                className="block text-sm hover:text-blue-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Demos
              </Link>
              <Link
                href="/"
                className="block text-sm hover:text-blue-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Hosting
              </Link>
              <Link
                href="/"
                className="block text-sm hover:text-blue-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                ProHosting
              </Link>
              <Link
                href="/"
                className="block text-sm hover:text-blue-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Domains
              </Link>
              <Link
                href="/"
                className="block text-sm hover:text-blue-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Need Help?
              </Link>
              <Link
                href="/"
                className="block text-sm hover:text-blue-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Pages
              </Link>
              <Link
                href="/"
                className="block text-sm hover:text-blue-600 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>

              <Button
                className="w-full bg-purple-900 hover:bg-purple-800 text-white px-4 py-2 rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Client Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
