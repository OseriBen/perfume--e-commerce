import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Brands from './components/Brands';
import PopularProducts from './components/PopularProducts';
import EditorialGrid from './components/EditorialGrid';
import NewProducts from './components/NewProducts';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Collections from './pages/Collections';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Products from './pages/Products';
// Helper to reset scroll position on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Resets scroll so user starts at the top of ProductDetail */}
      <ScrollToTop />
      
      {/* Global Navigation - Now connected to CartContext */}
      <Navbar />

      <Routes>
        {/* LANDING PAGE ROUTE */}
        <Route 
          path="/" 
          element={
            <>
              <Header /> 
              <main>
                <Brands />
                <PopularProducts />
                <EditorialGrid />
                <NewProducts />
              </main>
            </>
          } 
        />

        {/* SHOP & AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        {/* The :id allows ProductDetail to pull data using useParams */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;