import React from 'react';
import Navbar from './Header';
import Footer from './Footer';
import Header from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen font-sans text-[#132A1A] bg-[#F8FAF8]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}