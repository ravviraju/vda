import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

// Placeholder for editing medical counselling service content
export default function AdminEditMedicalCounsellingServicePage() {
  // Placeholder data - would typically be fetched based on ID
  const serviceId = 'counsel001';
  const serviceTitle = 'Stress Management Workshop';
  const serviceCategory = 'workshops';
  const serviceDescription = 'A workshop designed to help students develop coping mechanisms for stress.';
  const serviceDetails = 'Sessions are held weekly on Wednesdays from 2 PM to 4 PM in Room 301 of the Student Center. Duration: 2 hours.';
  const accessInfo = 'Register by emailing counselling@vda.edu or by visiting the Student Support Office.';
  const contactPerson = 'Jane Doe (counselling@vda.edu)';

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Edit Counselling Service</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Service Details</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="serviceTitle" className="block text-sm font-medium text-gray-700">Service Title</label>
            <input 
              type="text" 
              id="serviceTitle" 
              defaultValue={serviceTitle} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-700">Service Category</label>
            <select 
              id="serviceCategory" 
              defaultValue={serviceCategory} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Category</option>
              <option value="individual-counselling">Individual Counselling</option>
              <option value="workshops">Workshops</option>
              <option value="seminars">Seminars</option>
              <option value="support-groups">Support Groups</option>
            </select>
          </div>
          <div>
            <label htmlFor="serviceDescription" className="block text-sm font-medium text-gray-700">Service Description</label>
            <textarea 
              id="serviceDescription" 
              rows={5} 
              defaultValue={serviceDescription} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="serviceDetails" className="block text-sm font-medium text-gray-700">Service Details</label>
            <textarea 
              id="serviceDetails" 
              rows={4} 
              defaultValue={serviceDetails} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="serviceAccess" className="block text-sm font-medium text-gray-700">How to Access</label>
            <textarea 
              id="serviceAccess" 
              rows={4} 
              defaultValue={accessInfo} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="serviceImage" className="block text-sm font-medium text-gray-700">Service Image</label>
            <input 
              type="file" 
              id="serviceImage" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
            <div className="mt-2">
              <p className="text-sm text-gray-500">Current image: stress_workshop.jpg</p>
            </div>
          </div>
          <div>
            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">Contact Person/Email</label>
            <input 
              type="text" 
              id="contactPerson" 
              defaultValue={contactPerson} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
        </form>
      </section>

      <div className="mt-8">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-4">
          Update Service
        </button>
        <Link href="/admin/medical-counselling" legacyBehavior>
          <button className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Cancel
          </button>
        </Link>
      </div>
    </AdminLayout>
  );
}
