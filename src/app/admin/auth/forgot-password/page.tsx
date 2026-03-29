import Link from 'next/link';

export default function AdminForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Forgot Your Password?
          </h2>
          <p className="mt-2 text-center text-lg text-gray-600">
            Enter your email to reset your password.
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                placeholder="Email address" 
              />
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Password Reset Link
            </button>
          </div>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          Remembered your password?{' '}
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
