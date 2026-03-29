import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to VDA Next.js</h1>
        <p className="text-xl mb-6">
          This is the migrated homepage. Explore our services and features.
        </p>
        
        {/* Placeholder for key sections like Courses, Eligibility etc. */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Courses</h3>
            <p className="text-gray-600 mb-4">Discover our wide range of courses designed to boost your career.</p>
            <Link href="/courses" legacyBehavior>
              <a className="text-blue-600 hover:underline">Learn More &rarr;</a>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Eligibility</h3>
            <p className="text-gray-600 mb-4">Check the eligibility criteria for our programs.</p>
            <Link href="/eligibility-conditions" legacyBehavior>
              <a className="text-blue-600 hover:underline">View Criteria &rarr;</a>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Facilities</h3>
            <p className="text-gray-600 mb-4">Explore our state-of-the-art facilities.</p>
            <Link href="/facilities" legacyBehavior>
              <a className="text-blue-600 hover:underline">See Facilities &rarr;</a>
            </Link>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold mb-4">About VDA</h2>
          <p className="text-gray-700 mb-4">
            VDA is dedicated to providing quality education and opportunities. Learn more about our mission and values.
          </p>
          <Link href="/about" legacyBehavior>
            <a className="text-blue-600 hover:underline font-semibold">About Us &rarr;</a>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
