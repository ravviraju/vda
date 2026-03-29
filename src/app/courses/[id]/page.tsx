import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// This is a placeholder for a dynamic course detail page.
// In a real Next.js app, you would use getStaticPaths and getStaticProps
// or getServerSideProps to fetch data based on the course ID from the URL.

export default function CourseDetailPage() {
  // Placeholder course data. This would typically come from an API or database.
  const courseId = 'cs101'; // Example ID
  const courseTitle = 'Introduction to Computer Science';
  const department = 'Computer Science';
  const credits = 3;
  const courseDescription = 'Learn the fundamentals of computer science, including algorithms, data structures, and programming concepts. This course provides a strong foundation for further study in computer science and prepares students for advanced topics in the field.';
  const prerequisites = ['Basic computer literacy', 'No prior programming experience required'];
  const instructors = [
    { name: 'Dr. Alan Turing', bio: 'Pioneer in theoretical computer science and artificial intelligence.' },
    { name: 'Prof. Ada Lovelace', bio: 'Considered the first computer programmer for her work on Babbage\'s Analytical Engine.' }
  ];
  const learningOutcomes = [
    'Understand fundamental algorithmic concepts.',
    'Implement basic data structures in a programming language.',
    'Analyze the time and space complexity of algorithms.',
    'Develop problem-solving skills applicable to computational challenges.',
  ];
  const schedule = 'Fall Semester: Mondays and Wednesdays, 10:00 AM - 11:30 AM';
  const status = 'Published';
  const enrollmentInfo = {
    capacity: 30,
    enrolled: 25,
    remaining: 5,
    deadline: 'August 15, 2024'
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{courseTitle}</h1>
        <p className="text-lg text-gray-600 mb-6">
          <strong>Course ID:</strong> {courseId.toUpperCase()} | <strong>Department:</strong> {department} | <strong>Credits:</strong> {credits}
        </p>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Course Overview</h2>
          <p className="text-gray-600 mb-4">{courseDescription}</p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            {prerequisites.map((prereq, index) => (
              <li key={index}>{prereq}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Instructors</h2>
          {instructors.map((instructor) => (
            <div key={instructor.name} className="mb-2">
              <p className="font-medium">{instructor.name}</p>
              <p className="text-gray-600 ml-4">{instructor.bio}</p>
            </div>
          ))}
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Learning Outcomes</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            {learningOutcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-4">Schedule and Enrollment</h2>
          <p className="text-gray-600 mb-2"><strong>Schedule:</strong> {schedule}</p>
          <p className="text-gray-600 mb-2"><strong>Status:</strong> <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{status}</span></p>
          <p className="text-gray-600 mb-2"><strong>Capacity:</strong> {enrollmentInfo.enrolled} / {enrollmentInfo.capacity}</p>
          <p className="text-gray-600 mb-2"><strong>Enrollment Deadline:</strong> {enrollmentInfo.deadline}</p>
        </section>

        <Link href="/courses" legacyBehavior>
          <a className="text-blue-600 hover:underline">&larr; Back to Course Catalog</a>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
