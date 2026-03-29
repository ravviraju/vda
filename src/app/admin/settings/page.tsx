import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminSettingsPage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Site Settings</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">General Settings</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="siteTitle" className="block text-sm font-medium text-gray-700">Site Title</label>
            <input 
              type="text" 
              id="siteTitle" 
              defaultValue="VDA Next.js" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">Site Description</label>
            <textarea 
              id="siteDescription" 
              rows={3} 
              defaultValue="A Next.js powered platform for VDA." 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="siteFavicon" className="block text-sm font-medium text-gray-700">Favicon Upload</label>
            <input 
              type="file" 
              id="siteFavicon" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
        </form>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Theme Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">Primary Color</label>
            <input type="color" id="primaryColor" defaultValue="#2563eb" className="mt-1 block w-full h-12 p-1 border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="secondaryColor" className="block text-sm font-medium text-gray-700">Secondary Color</label>
            <input type="color" id="secondaryColor" defaultValue="#10b981" className="mt-1 block w-full h-12 p-1 border border-gray-300 rounded-md shadow-sm" />
          </div>
        </div>
      </section>

      <div className="mt-8">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save Settings
        </button>
      </div>
    </AdminLayout>
  );
}
