import React from 'react';
import Link from 'next/link';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 text-xl font-bold text-center">
          <Link href="/admin/dashboard" legacyBehavior>
            <a>Admin Panel</a>
          </Link>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          <Link href="/admin/dashboard" legacyBehavior>
            <a className="block px-4 py-2 rounded-md hover:bg-gray-700">Dashboard</a>
          </Link>
          <Link href="/admin/courses" legacyBehavior>
            <a className="block px-4 py-2 rounded-md hover:bg-gray-700">Courses</a>
          </Link>
          <Link href="/admin/settings" legacyBehavior>
            <a className="block px-4 py-2 rounded-md hover:bg-gray-700">Settings</a>
          </Link>
          {/* Add more admin navigation links here */}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Admin Header (optional, could include user info, logout) */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-700">Admin Dashboard</h1>
          <div>
            {/* User info or logout button could go here */}
            <span>Welcome, Admin!</span>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
