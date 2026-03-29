import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminJobSelectionsPage() {
  // Placeholder job data
  const jobs = [
    { id: 'dev001', title: 'Frontend Developer', company: 'Tech Solutions Inc.', location: 'Remote', status: 'Active', created_at: '2023-01-15' },
    { id: 'qa002', title: 'Quality Assurance Engineer', company: 'Innovate Systems', location: 'New York, NY', status: 'Active', created_at: '2023-02-20' },
    { id: 'ux003', title: 'UI/UX Designer', company: 'Creative Minds Agency', location: 'San Francisco, CA', status: 'Draft', created_at: '2023-03-10' },
    { id: 'backend004', title: 'Backend Developer', company: 'Data Dynamics', location: 'Austin, TX', status: 'Active', created_at: '2023-04-01' },
  ];

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Manage Job Postings</h1>
      
      <div className="mb-6 flex justify-end">
        <Link href="/admin/jobs/create" legacyBehavior>
          <a className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Post New Job
          </a>
        </Link>
      </div>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Job Listings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.created_at}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link href={`/admin/jobs/edit/${job.id}`} legacyBehavior>
                      <a className="text-blue-600 hover:text-blue-900 mr-2">Edit</a>
                    </Link>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  );
}
