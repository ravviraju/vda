import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl mb-6 text-gray-700">
          Get in touch with us for inquiries or support.
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Send us a Message</h2>
          <p className="text-gray-600 mb-4">
            You can reach us via the following details or use the form below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Contact Information</h3>
              <p className="text-gray-600 mb-2"><strong>Address:</strong> 123 Education Lane, University City, UC 12345</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> info@vda.edu</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Contact Form</h3>
              {/* Placeholder for a contact form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <Link href="/" legacyBehavior>
          <a className="text-blue-600 hover:underline">&larr; Back to Home</a>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
