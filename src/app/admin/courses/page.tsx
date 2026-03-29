import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminCoursesPage() {
  // Placeholder course data
  const courses = [
    { id: 'cs101', title: 'Introduction to Computer Science', status: 'Published', created_at: '2023-01-15' },
    { id: 'bio201', title: 'Cell Biology', status: 'Published', created_at: '2023-02-20' },
    { id: 'eng301', title: 'Advanced English Literature', status: 'Draft', created_at: '2023-03-10' },
    { id: 'math401', title: 'Calculus II', status: 'Published', created_at: '2023-04-01' },
  ];

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Manage Courses</h1>
      
      <div className="mb-6 flex justify-end">
        <Link href="/admin/courses/create" legacyBehavior>
          <a className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Add New Course
          </a>
        </Link>
      </div>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Course List</h2>
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
              {courses.map((course) => (
                <tr key={course.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.created_at}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link href={`/admin/courses/edit/${course.id}`} legacyBehavior>
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
