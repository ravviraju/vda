import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminFAQPage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Manage FAQ</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Edit FAQ Section</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="faqTitle" className="block text-sm font-medium text-gray-700">Page Title</label>
            <input 
              type="text" 
              id="faqTitle" 
              defaultValue="Frequently Asked Questions" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          
          {/* FAQ Items */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-2xl font-semibold mb-4">Questions & Answers</h3>
            
            <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-medium">Q: What are the eligibility criteria?</h4>
                <button className="text-red-600 hover:text-red-900">Remove</button>
              </div>
              <textarea 
                rows={3} 
                defaultValue={`A: Please refer to our <a href="/eligibility-conditions" class="text-blue-600 hover:underline">Eligibility Conditions</a> page for detailed requirements.`} 
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-medium">Q: How do I apply?</h4>
                <button className="text-red-600 hover:text-red-900">Remove</button>
              </div>
              <textarea 
                rows={3} 
                defaultValue={`A: You can find information on the application process on our <a href="/contact" class="text-blue-600 hover:underline">Contact</a> page or by visiting the admissions office.`} 
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            
            {/* Add more Q&A items here or a button to add new */}
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200">
              Add New Question
            </button>
          </div>
        </form>
      </section>

      <div className="mt-8">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save FAQ
        </button>
      </div>
    </AdminLayout>
  );
}
