import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminDashboardPage() {
  // Placeholder data for dashboard widgets/stats
  const stats = [
    { label: 'Total Courses', value: '150', link: '/admin/courses' },
    { label: 'Total Students', value: '2500', link: '/admin/students' }, // Assuming students page might exist
    { label: 'Pending Applications', value: '45', link: '/admin/applications' }, // Assuming applications page might exist
  ];

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat) => (
          <Link href={stat.link} key={stat.label} legacyBehavior>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="text-sm font-medium text-gray-500 truncate">{stat.label}</div>
              <div className="text-4xl font-extrabold text-blue-600">{stat.value}</div>
            </div>
          </Link>
        ))}
      </div>

      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-semibold mb-4">Recent Activity</h2>
        {/* Placeholder for recent activity feed */}
        <div className="text-gray-600">
          <p>Welcome back! Here's a summary of recent activities.</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>New course 'Advanced AI' added.</li>
            <li>5 new student applications received.</li>
            <li>User 'admin_user' logged in.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/admin/courses/create" legacyBehavior>
            <a className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">Add New Course</a>
          </Link>
          <Link href="/admin/settings" legacyBehavior>
            <a className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200">Site Settings</a>
          </Link>
          {/* Add more quick links */}
        </div>
      </section>
    </AdminLayout>
  );
}
