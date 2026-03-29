import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl mb-6 text-gray-700">
          Here are answers to some common questions.
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="mb-6">
            <h2 className="text-3xl font-semibold mb-3">Admissions</h2>
            <h3 className="text-2xl font-medium mb-2">Q: What are the eligibility criteria?</h3>
            <p className="text-gray-600 ml-4 mb-2">A: Please refer to our <Link href="/eligibility-conditions" legacyBehavior><a className="text-blue-600 hover:underline">Eligibility Conditions</a></Link> page for detailed requirements.</p>
            
            <h3 className="text-2xl font-medium mb-2">Q: How do I apply?</h3>
            <p className="text-gray-600 ml-4 mb-2">A: You can find information on the application process on our <Link href="/contact" legacyBehavior><a className="text-blue-600 hover:underline">Contact</a></Link> page or by visiting the admissions office.</p>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-semibold mb-3">Courses</h2>
            <h3 className="text-2xl font-medium mb-2">Q: What courses do you offer?</h3>
            <p className="text-gray-600 ml-4 mb-2">A: We offer a variety of undergraduate and graduate programs. You can find more details on our <Link href="/courses" legacyBehavior><a className="text-blue-600 hover:underline">Courses</a></Link> page.</p>
            
            <h3 className="text-2xl font-medium mb-2">Q: Are there any prerequisites for specific courses?</h3>
            <p className="text-gray-600 ml-4 mb-2">A: Yes, some courses have prerequisites. Please check the course descriptions for details.</p>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-semibold mb-3">Campus Life</h2>
            <h3 className="text-2xl font-medium mb-2">Q: What facilities are available on campus?</h3>
            <p className="text-gray-600 ml-4 mb-2">A: We have a range of facilities including advanced labs, a library, recreational areas, and more. Visit our <Link href="/facilities" legacyBehavior><a className="text-blue-600 hover:underline">Facilities</a></Link> page for more information.</p>
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
