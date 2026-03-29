import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// This is a placeholder for a dynamic job detail page.
// In a real Next.js app, you would use getStaticPaths and getStaticProps
// or getServerSideProps to fetch data based on the job ID from the URL.

export default function JobDetailPage() {
  // Placeholder job data. This would typically come from an API or database.
  const jobId = 'dev001'; // Example ID
  const jobTitle = 'Frontend Developer';
  const company = 'Tech Solutions Inc.';
  const companyWebsite = 'https://techsolutions.com';
  const location = 'Remote';
  const employmentType = 'Full-time';
  const description = 'We are looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for implementing visual elements that users see and interact with in a web application. You will work with UI/UX designers and backend developers to create intuitive and engaging user interfaces.';
  const responsibilities = [
    'Develop new user-facing features using React.',
    'Build reusable code and libraries for future use.',
    'Ensure the technical feasibility of UI/UX designs.',
    'Optimize application for maximum speed and scalability.',
    'Collaborate with team members and stakeholders to define, design, and ship new features.',
    'Write clean, maintainable, and testable code.',
  ];
  const qualifications = [
    'Proficiency in HTML, CSS, and JavaScript.',
    'Experience with React.js and its core principles.',
    'Familiarity with RESTful APIs and asynchronous request handling.',
    'Experience with modern frontend build pipelines and tools (e.g., Webpack, Babel).',
    'Strong understanding of version control systems (e.g., Git).',
    'Excellent problem-solving and analytical skills.',
    'Bachelor\'s degree in Computer Science or related field, or equivalent practical experience.',
  ];
  const benefits = [
    'Competitive salary and benefits package',
    'Comprehensive health, dental, and vision insurance',
    'Generous paid time off and holidays',
    'Remote work flexibility',
    'Professional development opportunities',
    'Collaborative and innovative work environment',
  ];
  const applicationDeadline = 'September 30, 2024';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{jobTitle}</h1>
        <p className="text-lg text-gray-600 mb-6">
          <strong>Company:</strong> {company} | <strong>Location:</strong> {location} | <strong>Type:</strong> {employmentType}
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">About {company}</h2>
          <p className="text-gray-600 mb-4">
            {company} is a leading innovator in the tech industry, dedicated to building cutting-edge solutions that transform businesses. We foster a culture of collaboration, creativity, and continuous learning. Visit us at <Link href={companyWebsite} legacyBehavior><a className="text-blue-600 hover:underline">{companyWebsite}</a></Link>.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-600 mb-4">{description}</p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Qualifications</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            {qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 mb-4"><strong>Application Deadline:</strong> {applicationDeadline}</p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Apply Now
          </button>
        </div>

        <Link href="/jobs" legacyBehavior>
          <a className="text-blue-600 hover:underline block text-center mt-8">&larr; Back to Job Listings</a>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
