import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminEligibilityPage() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Manage Eligibility Conditions</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold mb-4">Edit Eligibility Criteria</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="eligibilityTitle" className="block text-sm font-medium text-gray-700">Page Title</label>
            <input 
              type="text" 
              id="eligibilityTitle" 
              defaultValue="Eligibility Conditions" 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div>
            <label htmlFor="eligibilityGeneral" className="block text-sm font-medium text-gray-700">General Admission Criteria</label>
            <textarea 
              id="eligibilityGeneral" 
              rows={5} 
              defaultValue={`To be considered for admission, all applicants must meet the following general criteria:
- Successful completion of secondary education or equivalent.
- Demonstrated proficiency in the language of instruction.
- Meeting any program-specific prerequisites.
- Submission of all required application documents by the deadline.`} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="eligibilityProgramSpecific" className="block text-sm font-medium text-gray-700">Program-Specific Requirements</label>
            <textarea 
              id="eligibilityProgramSpecific" 
              rows={6} 
              defaultValue={`Specific programs may have additional requirements. Please refer to the program details for more information.

Undergraduate Programs:
- High School Diploma/Equivalent: Required.
- Minimum GPA: Varies by program, typically 2.5 or higher.
- Standardized Tests: May be required for certain programs (e.g., SAT/ACT).

Graduate Programs:
- Bachelor's Degree: Required from an accredited institution.
- Subject Prerequisites: Specific coursework may be necessary.
- GRE/GMAT: Required for some graduate programs.
- Letters of Recommendation: Typically 2-3 required.`} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <div>
            <label htmlFor="eligibilityInternational" className="block text-sm font-medium text-gray-700">International Applicants</label>
            <textarea 
              id="eligibilityInternational" 
              rows={4} 
              defaultValue={`International applicants must also provide:
- Proof of English language proficiency (e.g., TOEFL, IELTS scores).
- Evaluation of foreign credentials.
- Valid student visa documentation.`} 
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
        </form>
      </section>

      <div className="mt-8">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save Eligibility Information
        </button>
      </div>
    </AdminLayout>
  );
}
