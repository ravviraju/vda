import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Our Facilities</h1>
        <p className="text-xl mb-6 text-gray-700">
          Discover the excellent facilities available to our students and staff.
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Campus Infrastructure</h2>
            <p className="text-gray-600 mb-4">
              Our campus boasts modern infrastructure designed to support a dynamic learning environment. This includes state-of-the-art classrooms, advanced laboratories, and comfortable common areas.
            </p>
            <img 
              src="/images/campus_infrastructure.jpg" // Placeholder image path
              alt="Campus Infrastructure" 
              className="w-full rounded-lg shadow-md mb-4"
            />
            <p className="text-gray-600">We continuously invest in upgrading our facilities to ensure the best possible experience for our community.</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Specialized Labs</h2>
            <p className="text-gray-600 mb-4">
              Equipped with the latest technology, our specialized labs cater to various disciplines, including science, engineering, and IT, providing hands-on learning opportunities.
            </p>
            <img 
              src="/images/specialized_labs.jpg" // Placeholder image path
              alt="Specialized Labs" 
              className="w-full rounded-lg shadow-md mb-4"
            />
            <p className="text-gray-600">Students have access to these labs for practical sessions, research, and projects.</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Library and Resources</h2>
          <p className="text-gray-600 mb-4">
            Our comprehensive library offers a vast collection of books, journals, and digital resources. It's a quiet space conducive to study and research.
          </p>
          <img 
            src="/images/library.jpg" // Placeholder image path
            alt="Library" 
            className="w-full rounded-lg shadow-md mb-4"
          />
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Student Amenities</h2>
          <p className="text-gray-600 mb-4">
            We provide various amenities to ensure student comfort and convenience, including recreational areas, cafeteria services, and student support centers.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Cafeteria</li>
            <li>Recreation Room</li>
            <li>Study Lounges</li>
            <li>Health Services</li>
          </ul>
        </section>

        <Link href="/" legacyBehavior>
          <a className="text-blue-600 hover:underline">&larr; Back to Home</a>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
