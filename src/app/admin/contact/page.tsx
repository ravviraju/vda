import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminContactPage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Manage Contact Information</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Edit Contact Details</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="contactTitle" className="block text-sm font-medium text-gray-700">Page Title</label>
            <input 
              type="text" 
              id="contactTitle" 
              defaultValue="Contact Us" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="contactAddress" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea 
              id="contactAddress" 
              rows={3} 
              defaultValue="123 Education Lane, University City, UC 12345" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="contactEmail" 
              defaultValue="info@vda.edu" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              id="contactPhone" 
              defaultValue="+1 (123) 456-7890" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="contactFormHeader" className="block text-sm font-medium text-gray-700">Contact Form Header</label>
            <input 
              type="text" 
              id="contactFormHeader" 
              defaultValue="Send us a Message" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
        </form>
      </section>

      <div className="mt-8">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save Contact Information
        </button>
      </div>
    </AdminLayout>
  );
}
