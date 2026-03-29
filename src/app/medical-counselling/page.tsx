import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MedicalCounsellingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Medical Counselling</h1>
        <p className="text-xl mb-6 text-gray-700">
          Information and support for your medical counselling needs.
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Counselling Services</h2>
          <p className="text-gray-600 mb-4">
            VDA is committed to supporting student well-being. Our medical counselling services are designed to provide confidential and professional guidance for students facing health-related challenges, stress, or academic pressures.
          </p>
          <img 
            src="/images/medical_counselling_banner.jpg" // Placeholder image path
            alt="Medical Counselling Services" 
            className="w-full rounded-lg shadow-md mb-4"
          />
          <h3 className="text-2xl font-medium mb-3 mt-4">What We Offer:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Confidential one-on-one counselling sessions.</li>
            <li>Support for mental health and well-being.</li>
            <li>Guidance on managing stress and academic pressures.</li>
            <li>Referrals to specialized medical services when necessary.</li>
            <li>Workshops on health and wellness topics.</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">How to Access Services</h2>
          <p className="text-gray-600 mb-4">
            To book an appointment or learn more about our services, please:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Visit the Student Support Office located in the Administration Building.</li>
            <li>Email us at counselling@vda.edu.</li>
            <li>Call us at +1 (123) 456-7890 ext. 101.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            All consultations are confidential and are provided free of charge to enrolled students.
          </p>
        </section>

        <Link href="/" legacyBehavior>
          <a className="text-blue-600 hover:underline">&larr; Back to Home</a>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
