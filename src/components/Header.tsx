import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" legacyBehavior>
            <a>VDA Next.js</a>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
          {/* Admin link will be handled by AdminLayout or specific context */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
