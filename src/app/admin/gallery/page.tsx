import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminGalleryPage() {
  // Placeholder for gallery items. In a real app, this would fetch from a CMS or API.
  const galleryItems = [
    { id: 1, type: 'event', title: 'Campus Event 1', imageUrl: '/images/gallery/event_1.jpg', uploadedAt: '2023-01-15' },
    { id: 2, type: 'achievement', title: 'Student Achievement 1', imageUrl: '/images/gallery/achievement_1.jpg', uploadedAt: '2023-02-20' },
    { id: 3, type: 'event', title: 'Campus Event 2', imageUrl: '/images/gallery/event_2.jpg', uploadedAt: '2023-03-10' },
    { id: 4, type: 'achievement', title: 'Student Achievement 2', imageUrl: '/images/gallery/achievement_2.jpg', uploadedAt: '2023-04-01' },
    // ... more items
  ];

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Manage Gallery</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Gallery Management</h2>
        
        <div className="mb-6 flex justify-end">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Upload New Item
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded At</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {galleryItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.uploadedAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
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
