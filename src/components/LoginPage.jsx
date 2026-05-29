// eslint-disable-next-line no-unused-vars
import { ArrowRight, Key, Mail } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-[2rem] border border-gray-200 bg-white p-10 shadow-2xl">
        <div className="text-center mb-10">
          <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-600 text-3xl font-bold text-white">T</div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Terramost AI</h1>
          <p className="mt-2 text-gray-600">Sign in to your account and access your farm dashboard.</p>
        </div>

        <div className="space-y-5">
          <label className="block rounded-3xl border border-gray-200 p-4">
            <div className="flex items-center gap-3 text-gray-500">
              <Mail className="w-5 h-5" />
              Email Address
            </div>
            <input type="email" defaultValue="admin@terramoist.ai" className="mt-4 w-full border-none bg-transparent outline-none text-gray-900" />
          </label>

          <label className="block rounded-3xl border border-gray-200 p-4">
            <div className="flex items-center gap-3 text-gray-500">
              <Key className="w-5 h-5" />
              Password
            </div>
            <input type="password" defaultValue="password" className="mt-4 w-full border-none bg-transparent outline-none text-gray-900" />
          </label>

          <button
            onClick={onLogin}
            className="w-full rounded-3xl bg-primary-600 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-700"
          >
            Login to Dashboard
          </button>

          <div className="text-center text-sm text-gray-500">
            <span>Demo credentials: admin@terramoist.ai / password</span>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-gray-50 p-5 text-center text-sm text-gray-600">
          <p><span className="font-semibold text-gray-900">Need an account?</span> Send Email: support@terramoist.org</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
