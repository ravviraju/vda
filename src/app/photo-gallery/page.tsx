import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PhotoGalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
        <p className="text-xl mb-6 text-gray-700">
          See moments from campus life, events, and achievements.
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Campus Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-gray-100 p-2 rounded-lg shadow">
                <img 
                  src={`/images/gallery/event_${i+1}.jpg`} // Placeholder image path
                  alt={`Campus Event ${i+1}`} 
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <p className="text-center text-sm text-gray-600">Event Highlight {i+1}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Student Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-100 p-2 rounded-lg shadow">
                <img 
                  src={`/images/gallery/achievement_${i+1}.jpg`} // Placeholder image path
                  alt={`Student Achievement ${i+1}`} 
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <p className="text-center text-sm text-gray-600">Achievement {i+1}</p>
              </div>
            ))}
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
