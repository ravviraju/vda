'use client';
import Link from 'next/link';

export default function AdminRegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            VDA Admin Registration
          </h2>
          <p className="mt-2 text-center text-lg text-gray-600">
            Create a new admin account.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required 
                className="appearance-none rounded-t-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                placeholder="Full Name" 
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                placeholder="Email address" 
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="current-password" 
                required 
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                placeholder="Password" 
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input 
                id="confirm-password" 
                name="confirm-password" 
                type="password" 
                autoComplete="new-password" 
                required 
                className="appearance-none rounded-b-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                placeholder="Confirm Password" 
              />
            </div>
          </div>

          <div className="flex items-center">
            <input 
              id="terms-and-conditions" 
              name="terms-and-conditions" 
              type="checkbox" 
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
              required
            />
            <label htmlFor="terms-and-conditions" className="ml-2 block text-sm text-gray-900">
              I agree to the <Link href="/terms-conditions" legacyBehavior><a className="font-medium text-blue-600 hover:text-blue-500">Terms and Conditions</a></Link>
            </label>
          </div>

          <div>
            <button 
              type="submit" 
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/admin/auth" legacyBehavior>
            <a className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
