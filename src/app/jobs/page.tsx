import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Placeholder for the main job listings page
export default function JobListPage() {
  // In a real application, this would fetch job data
  const jobs = [
    { id: 'dev001', title: 'Frontend Developer', company: 'Tech Solutions Inc.', location: 'Remote' },
    { id: 'qa002', title: 'Quality Assurance Engineer', company: 'Innovate Systems', location: 'New York, NY' },
    { id: 'ux003', title: 'UI/UX Designer', company: 'Creative Minds Agency', location: 'San Francisco, CA' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Job Selections</h1>
        <p className="text-xl mb-6 text-gray-700">
          Explore career opportunities.
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Current Openings</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-2xl font-semibold mb-2 text-blue-700">{job.title}</h3>
                <p className="text-gray-700 mb-1"><strong>Company:</strong> {job.company}</p>
                <p className="text-gray-700 mb-3"><strong>Location:</strong> {job.location}</p>
                <Link href={`/jobs/${job.id}`} legacyBehavior>
                  <a className="text-blue-600 hover:underline font-medium">View Details &rarr;</a>
                </Link>
              </div>
            ))}
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
