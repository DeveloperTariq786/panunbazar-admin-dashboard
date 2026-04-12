import React from 'react';
import { Outlet } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Placeholder */}
      <aside className="w-64 bg-[#132A1A] text-white p-6 hidden md:block">
        <div className="text-xl font-bold mb-8">Admin Panel</div>
        <nav className="space-y-4">
          <div>Dashboard</div>
          <div>Orders</div>
          <div>Products</div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <header className="bg-white p-4 rounded-xl shadow-sm mb-8 flex justify-between items-center">
          <h2 className="text-xl font-bold">Dashboard Overview</h2>
          <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium">Logout</button>
        </header>
        
        {/* This is where your nested dashboard pages will render */}
        <Outlet /> 
      </main>
    </div>
  );
}