import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminPartialsPage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Manage Admin Partials</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Reusable Components</h2>
        <p className="text-gray-600 mb-4">
          This section is for managing reusable components or partials used across the admin interface.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder for partial management */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-semibold mb-3">Admin Header</h3>
            <p className="text-gray-600 mb-3">Manage the content and links for the admin header.</p>
            <Link href="/admin/partials/header" legacyBehavior>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
                Edit Header
              </button>
            </Link>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-semibold mb-3">Admin Footer</h3>
            <p className="text-gray-600 mb-3">Manage the content for the admin footer.</p>
            <Link href="/admin/partials/footer" legacyBehavior>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
                Edit Footer
              </button>
            </Link>
          </div>

          {/* Add more partials like sidebar configuration, notification templates, etc. */}
        </div>
      </section>
    </AdminLayout>
  );
}
