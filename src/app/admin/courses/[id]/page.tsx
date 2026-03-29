import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

// This is a placeholder for a dynamic course detail page view from admin.
// In a real Next.js app, you would use dynamic routing and fetch course data.
export default function AdminViewCoursePage() {
  // Placeholder course data - this would typically be fetched based on the ID
  const courseId = 'cs101';
  const courseTitle = 'Introduction to Computer Science';
  const courseDescription = 'Learn the fundamentals of computer science, including algorithms, data structures, and programming concepts. This course provides a strong foundation for further study in computer science.';
  const prerequisites = ['Basic computer literacy', 'No prior programming experience required'];
  const instructors = ['Dr. Alan Turing', 'Prof. Ada Lovelace'];
  const status = 'Published';
  const createdAt = '2023-01-15';

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Course Details: {courseTitle}</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Course Overview</h2>
        <p className="text-gray-600 mb-4">{courseDescription}</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          {prerequisites.map((prereq, index) => (
            <li key={index}>{prereq}</li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Instructors</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          {instructors.map((instructor, index) => (
            <li key={index}>{instructor}</li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Course Information</h2>
        <p className="text-gray-600 mb-2"><strong>Course ID:</strong> {courseId.toUpperCase()}</p>
        <p className="text-gray-600 mb-2"><strong>Status:</strong> <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{status}</span></p>
        <p className="text-gray-600 mb-2"><strong>Created At:</strong> {createdAt}</p>
      </section>

      <div className="mt-8 flex space-x-4">
        <Link href={`/admin/courses/edit/${courseId}`} legacyBehavior>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Edit Course
          </button>
        </Link>
        <button className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Delete Course
        </button>
        <Link href="/admin/courses" legacyBehavior>
          <button className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Back to Course List
          </button>
        </Link>
      </div>
    </AdminLayout>
  );
}
