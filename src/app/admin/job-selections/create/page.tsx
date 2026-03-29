import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminCreateJobPage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Post New Job</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Job Details</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input 
              type="text" 
              id="jobTitle" 
              placeholder="e.g., Frontend Developer" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <input 
              type="text" 
              id="company" 
              placeholder="e.g., Tech Solutions Inc." 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700">Company Website</label>
            <input 
              type="url" 
              id="companyWebsite" 
              placeholder="e.g., https://techsolutions.com" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input 
              type="text" 
              id="location" 
              placeholder="e.g., Remote or City, State" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">Employment Type</label>
            <select 
              id="employmentType" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div>
            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea 
              id="description" 
              rows={5} 
              placeholder="Describe the role and responsibilities." 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700">Responsibilities</label>
            <textarea 
              id="responsibilities" 
              rows={4} 
              placeholder="List responsibilities, separated by newlines." 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">Qualifications</label>
            <textarea 
              id="qualifications" 
              rows={4} 
              placeholder="List qualifications, separated by newlines." 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">Benefits</label>
            <textarea 
              id="benefits" 
              rows={3} 
              placeholder="List benefits, separated by newlines." 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <select 
              id="status" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </form>
      </section>

      <div className="mt-8">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-4">
          Post Job
        </button>
        <Link href="/admin/job-selections" legacyBehavior>
          <button className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Cancel
          </button>
        </Link>
      </div>
    </AdminLayout>
  );
}
