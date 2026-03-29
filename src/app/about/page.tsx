import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About VDA</h1>
        <p className="text-xl mb-6 text-gray-700">
          This page provides information about VDA's mission, vision, and values.
        </p>
        
        {/* Placeholder for detailed about content */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To provide high-quality education and empower individuals with the knowledge and skills they need to succeed.
          </p>
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-4">
            To be a leading institution recognized for academic excellence, innovation, and community impact.
          </p>
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Innovation</li>
            <li>Community</li>
            <li>Inclusivity</li>
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
