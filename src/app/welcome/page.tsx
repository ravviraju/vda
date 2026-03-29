import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to VDA!</h1>
        <p className="text-xl mb-6 text-gray-700">
          We are excited to have you join our community. Explore the possibilities and start your journey with us today.
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Your Journey Starts Here</h2>
          <p className="text-gray-600 mb-4">
            VDA is dedicated to fostering innovation, critical thinking, and lifelong learning. We offer a wide range of programs designed to meet the evolving needs of our students and the global community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/courses" legacyBehavior>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Explore Courses
              </button>
            </Link>
            <Link href="/about" legacyBehavior>
              <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Learn About Us
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
