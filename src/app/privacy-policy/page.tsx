import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl mb-6 text-gray-700">
          Last Updated: March 29, 2026
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            Welcome to VDA. This Privacy Policy explains how VDA ("we", "us", or "our") collects, uses, and discloses your personal information when you visit our website, use our services, or interact with us.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, address, etc., provided voluntarily.</li>
            <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP addresses, browser type, pages visited, and time spent.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies to enhance your experience, collect usage statistics, and personalize content.</li>
          </ul>
          
          <h2 className="text-3xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use your information for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>To provide and maintain our services.</li>
            <li>To improve our website and user experience.</li>
            <li>To process applications and inquiries.</li>
            <li>To communicate with you regarding our programs and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          
          <h2 className="text-3xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">5. Your Rights</h2>
          <p className="text-gray-600 mb-4">
            You may have the right to access, correct, or delete your personal information. Please contact us to exercise these rights.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
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
