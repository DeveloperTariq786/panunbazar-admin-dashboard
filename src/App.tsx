import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { APP_ROUTES } from './core/routes/routes';

// Layouts
import DashboardLayout from './components/layout/SideBar';

// Pages
import Home from './pages/home/Home';
import LoginPage from './pages/auth/Login';

// Note: You will import your actual Order and Product components here later
// import Order from './pages/dashboard/orders/Order';
// import AddOrder from './pages/dashboard/orders/Add Orders';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Public Routes */}
        <Route path={APP_ROUTES.PUBLIC.HOME} element={<Home />} />

        {/* 2. Auth Routes */}
        <Route path={APP_ROUTES.AUTH.LOGIN} element={<LoginPage />} />

        {/* 3. Protected Dashboard Routes */}
        <Route path={APP_ROUTES.DASHBOARD.ROOT} element={<DashboardLayout />}>
          
          {/* Default Dashboard View */}
          <Route index element={
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#D5DFCF]/50 text-center">
              <h2 className="text-xl font-bold text-[#020C04]">Dashboard Overview</h2>
              <p className="text-[#132A1A]/70">Analytics coming soon...</p>
            </div>
          } />

          {/* Orders Module */}
          <Route path={APP_ROUTES.DASHBOARD.ORDERS} element={
            <div className="p-8">Orders List Page Placeholder</div>
          } />
          <Route path={APP_ROUTES.DASHBOARD.ADD_ORDER} element={
            <div className="p-8">Add Order Page Placeholder</div>
          } />

          {/* Products Module */}
          <Route path={APP_ROUTES.DASHBOARD.PRODUCTS} element={
            <div className="p-8">Products List Page Placeholder</div>
          } />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}