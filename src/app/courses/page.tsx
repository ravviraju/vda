import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Placeholder for the main courses listing page
export default function CoursesListPage() {
  // In a real application, this would fetch course data
  const courses = [
    { id: 'cs101', title: 'Introduction to Computer Science', description: 'Learn the fundamentals of computer science.' },
    { id: 'bio201', title: 'Cell Biology', description: 'A deep dive into cellular structures and functions.' },
    { id: 'eng301', title: 'Advanced English Literature', description: 'Explore major works and theories in English literature.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
        <p className="text-xl mb-6 text-gray-700">
          Explore the diverse range of courses offered at VDA.
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Course Catalog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-2xl font-semibold mb-2 text-blue-700">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link href={`/courses/${course.id}`} legacyBehavior>
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
