import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminHomepagePage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Manage Homepage Content</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Edit Homepage Sections</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="homepageHeroTitle" className="block text-sm font-medium text-gray-700">Hero Section Title</label>
            <input 
              type="text" 
              id="homepageHeroTitle" 
              defaultValue="Welcome to VDA Next.js" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="homepageHeroSubtitle" className="block text-sm font-medium text-gray-700">Hero Section Subtitle</label>
            <textarea 
              id="homepageHeroSubtitle" 
              rows={3} 
              defaultValue="This is the migrated homepage. Explore our services and features." 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="homepageHeroImage" className="block text-sm font-medium text-gray-700">Hero Image</label>
            <input 
              type="file" 
              id="homepageHeroImage" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          
          {/* Placeholder for other sections like Courses, Eligibility, Facilities */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-2xl font-semibold mb-4">Key Sections</h3>
            <p className="text-gray-600 mb-4">Manage content for the prominent sections on the homepage.</p>
            
            {/* Example Section: Courses */}
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="text-xl font-medium mb-2">Courses Section</h4>
              <label htmlFor="homepageCoursesTitle" className="block text-sm font-medium text-gray-700">Section Title</label>
              <input type="text" id="homepageCoursesTitle" defaultValue="Our Courses" className="mt-1 mb-2 w-full p-2 border border-gray-300 rounded-md shadow-sm" />
              
              <label htmlFor="homepageCoursesDescription" className="block text-sm font-medium text-gray-700">Section Description</label>
              <textarea rows={2} defaultValue="Discover our wide range of courses designed to boost your career." className="mt-1 mb-2 w-full p-2 border border-gray-300 rounded-md shadow-sm"></textarea>
              
              <label htmlFor="homepageCoursesLink" className="block text-sm font-medium text-gray-700">Link Text</label>
              <input type="text" id="homepageCoursesLink" defaultValue="Learn More" className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm" />
            </div>
            
            {/* Add similar blocks for Eligibility, Facilities, About sections */}
          </div>
        </form>
      </section>

      <div className="mt-8">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save Homepage Content
        </button>
      </div>
    </AdminLayout>
  );
}
