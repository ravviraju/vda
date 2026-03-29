import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminMedicalCounsellingListPage() {
  // Placeholder data for counselling services
  const services = [
    { id: 'counsel001', title: 'Stress Management Workshop', description: 'A workshop designed to help students develop coping mechanisms for stress.', status: 'Active', createdAt: '2023-01-15' },
    { id: 'counsel002', title: 'Individual Counselling', description: 'Confidential one-on-one sessions for mental health support.', status: 'Active', createdAt: '2023-02-20' },
    { id: 'counsel003', title: 'Wellness Seminar Series', description: 'Monthly seminars on various health and wellness topics.', status: 'Draft', createdAt: '2023-03-10' },
  ];

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Manage Counselling Services</h1>
      
      <div className="mb-6 flex justify-end">
        <Link href="/admin/medical-counselling/create" legacyBehavior>
          <a className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Add New Service
          </a>
        </Link>
      </div>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">All Services</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${service.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {service.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link href={`/admin/medical-counselling/edit/${service.id}`} legacyBehavior>
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
