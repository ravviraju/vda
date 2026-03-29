import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminFacilitiesPage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Manage Facilities</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Edit Facilities Information</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="facilitiesTitle" className="block text-sm font-medium text-gray-700">Page Title</label>
            <input 
              type="text" 
              id="facilitiesTitle" 
              defaultValue="Our Facilities" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="facilitiesCampus" className="block text-sm font-medium text-gray-700">Campus Infrastructure</label>
            <textarea 
              id="facilitiesCampus" 
              rows={4} 
              defaultValue={`Our campus boasts modern infrastructure designed to support a dynamic learning environment. This includes state-of-the-art classrooms, advanced laboratories, and comfortable common areas. We continuously invest in upgrading our facilities to ensure the best possible experience for our community.`} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="facilitiesLabs" className="block text-sm font-medium text-gray-700">Specialized Labs</label>
            <textarea 
              id="facilitiesLabs" 
              rows={4} 
              defaultValue={`Equipped with the latest technology, our specialized labs cater to various disciplines, including science, engineering, and IT, providing hands-on learning opportunities. Students have access to these labs for practical sessions, research, and projects.`} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="facilitiesLibrary" className="block text-sm font-medium text-gray-700">Library and Resources</label>
            <textarea 
              id="facilitiesLibrary" 
              rows={3} 
              defaultValue={`Our comprehensive library offers a vast collection of books, journals, and digital resources. It's a quiet space conducive to study and research.`} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="facilitiesAmenities" className="block text-sm font-medium text-gray-700">Student Amenities</label>
            <textarea 
              id="facilitiesAmenities" 
              rows={3} 
              defaultValue={`We provide various amenities to ensure student comfort and convenience, including recreational areas, cafeteria services, and student support centers.
- Cafeteria
- Recreation Room
- Study Lounges
- Health Services`} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="facilitiesImageCampus" className="block text-sm font-medium text-gray-700">Campus Image Upload</label>
            <input 
              type="file" 
              id="facilitiesImageCampus" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
           <div>
            <label htmlFor="facilitiesImageLabs" className="block text-sm font-medium text-gray-700">Labs Image Upload</label>
            <input 
              type="file" 
              id="facilitiesImageLabs" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
        </form>
      </section>

      <div className="mt-8">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save Facilities Information
        </button>
      </div>
    </AdminLayout>
  );
}
