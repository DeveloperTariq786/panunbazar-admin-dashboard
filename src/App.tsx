import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './components/layout/MainLayout';
import DashboardLayout from './components/layout/SideBar';
// import Footer from './components/layout/Footer';
// import Header from './components/layout/Header';

// Pages
import HomePage from './pages/home/Home';
import LoginPage from './pages/auth/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Public Routes (Uses Navbar & Footer) */}
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />

        {/* 2. Auth Routes (No Navbar/Footer) */}
        <Route path="/login" element={<LoginPage />} />

        {/* 3. Protected Dashboard Routes (Uses Admin Sidebar Layout) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Default dashboard page */}
          <Route index element={
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              Dashboard Content Coming Soon...
            </div>
          } />
          
          {/* We will add your Order pages here later, e.g., /dashboard/orders */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}