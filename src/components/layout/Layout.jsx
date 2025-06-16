import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ThreeScene from '../three/ThreeScene';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 3D Background */}
      <ThreeScene />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="content-container flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

