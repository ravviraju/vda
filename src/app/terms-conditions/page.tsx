import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-xl mb-6 text-gray-700">
          Last Updated: March 29, 2026
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            Welcome to VDA. These Terms and Conditions ("Terms") govern your access to and use of the VDA website (the "Service") operated by VDA ("us", "we", or "our"). Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">2. Use of the Service</h2>
          <p className="text-gray-600 mb-4">
            You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit the use and enjoyment of the Service by any other user.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">3. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            The content, original art, features, and functionality of the Service are and will remain the exclusive property of VDA and its licensors. The Service is protected by copyright, trademark, and other laws.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">4. Links to Other Websites</h2>
          <p className="text-gray-600 mb-4">
            Our Service may contain links to third-party web sites or services that are not owned or controlled by VDA. VDA has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">5. Termination</h2>
          <p className="text-gray-600 mb-4">
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">6. Governing Law</h2>
          <p className="text-gray-600 mb-4">
            These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">7. Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
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
