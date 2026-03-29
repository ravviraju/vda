import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminAboutPage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Manage About Us Page</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Edit About Us Content</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="aboutTitle" className="block text-sm font-medium text-gray-700">Page Title</label>
            <input 
              type="text" 
              id="aboutTitle" 
              defaultValue="About VDA" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="aboutMission" className="block text-sm font-medium text-gray-700">Mission Statement</label>
            <textarea 
              id="aboutMission" 
              rows={4} 
              defaultValue="To provide high-quality education and empower individuals with the knowledge and skills they need to succeed." 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="aboutVision" className="block text-sm font-medium text-gray-700">Vision Statement</label>
            <textarea 
              id="aboutVision" 
              rows={4} 
              defaultValue="To be a leading institution recognized for academic excellence, innovation, and community impact." 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Values</label>
            <div className="mt-1 space-y-2">
              {/* Placeholder for managing values */}
              <div className="flex items-center">
                <input type="checkbox" id="value-integrity" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="value-integrity" className="ml-3 block text-sm text-gray-600">Integrity</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="value-excellence" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="value-excellence" className="ml-3 block text-sm text-gray-600">Excellence</label>
              </div>
              {/* Add more values or a way to add/remove them */}
            </div>
          </div>
          <div>
            <label htmlFor="aboutImage" className="block text-sm font-medium text-gray-700">About Us Image</label>
            <input 
              type="file" 
              id="aboutImage" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
        </form>
      </section>

      <div className="mt-8">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save About Page
        </button>
      </div>
    </AdminLayout>
  );
}
