import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminCreateCoursePage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Add New Course</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Course Details</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-700">Course Title</label>
            <input 
              type="text" 
              id="courseTitle" 
              placeholder="e.g., Introduction to Computer Science" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="courseId" className="block text-sm font-medium text-gray-700">Course ID</label>
            <input 
              type="text" 
              id="courseId" 
              placeholder="e.g., CS101" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
            <select 
              id="department" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Department</option>
              <option value="computer-science">Computer Science</option>
              <option value="biology">Biology</option>
              <option value="english">English</option>
              <option value="mathematics">Mathematics</option>
            </select>
          </div>
          <div>
            <label htmlFor="credits" className="block text-sm font-medium text-gray-700">Credits / Units</label>
            <input 
              type="number" 
              id="credits" 
              placeholder="e.g., 3" 
              min="0"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="courseDescription" className="block text-sm font-medium text-gray-700">Course Description</label>
            <textarea 
              id="courseDescription" 
              rows={5} 
              placeholder="Describe the course content and learning objectives." 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="coursePrerequisites" className="block text-sm font-medium text-gray-700">Prerequisites</label>
            <textarea 
              id="coursePrerequisites" 
              rows={3} 
              placeholder="List any prerequisites, separated by newlines or commas." 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="instructors" className="block text-sm font-medium text-gray-700">Instructors</label>
            <input 
              type="text" 
              id="instructors" 
              placeholder="e.g., Dr. Alan Turing, Prof. Ada Lovelace" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">Schedule / Timings</label>
            <textarea 
              id="schedule" 
              rows={3} 
              placeholder="e.g., Mon/Wed 10:00 AM - 11:30 AM" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">Enrollment Capacity</label>
            <input 
              type="number" 
              id="capacity" 
              placeholder="e.g., 30" 
              min="0"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <select 
              id="status" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div>
            <label htmlFor="courseImage" className="block text-sm font-medium text-gray-700">Course Image</label>
            <input 
              type="file" 
              id="courseImage" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
        </form>
      </section>

      <div className="mt-8">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save Course
        </button>
        <Link href="/admin/courses" legacyBehavior>
          <button className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ml-4">
            Cancel
          </button>
        </Link>
      </div>
    </AdminLayout>
  );
}
