import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function EligibilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Eligibility Conditions</h1>
        <p className="text-xl mb-6 text-gray-700">
          Find out the requirements for admission to our programs.
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">General Admission Criteria</h2>
          <p className="text-gray-600 mb-4">
            To be considered for admission, all applicants must meet the following general criteria:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Successful completion of secondary education or equivalent.</li>
            <li>Demonstrated proficiency in the language of instruction.</li>
            <li>Meeting any program-specific prerequisites.</li>
            <li>Submission of all required application documents by the deadline.</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Program-Specific Requirements</h2>
          <p className="text-gray-600 mb-4">
            Specific programs may have additional requirements. Please refer to the program details for more information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Undergraduate Programs</h3>
              <p className="text-gray-600 mb-2"><strong>High School Diploma/Equivalent:</strong> Required.</p>
              <p className="text-gray-600 mb-2"><strong>Minimum GPA:</strong> Varies by program, typically 2.5 or higher.</p>
              <p className="text-gray-600 mb-2"><strong>Standardized Tests:</strong> May be required for certain programs (e.g., SAT/ACT).</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Graduate Programs</h3>
              <p className="text-gray-600 mb-2"><strong>Bachelor's Degree:</strong> Required from an accredited institution.</p>
              <p className="text-gray-600 mb-2"><strong>Subject Prerequisites:</strong> Specific coursework may be necessary.</p>
              <p className="text-gray-600 mb-2"><strong>GRE/GMAT:</strong> Required for some graduate programs.</p>
              <p className="text-gray-600 mb-2"><strong>Letters of Recommendation:</strong> Typically 2-3 required.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">International Applicants</h2>
          <p className="text-gray-600 mb-4">
            International applicants must also provide:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Proof of English language proficiency (e.g., TOEFL, IELTS scores).</li>
            <li>Evaluation of foreign credentials.</li>
            <li>Valid student visa documentation.</li>
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
