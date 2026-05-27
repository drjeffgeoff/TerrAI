import { useState } from 'react';
import AdminLayout from './components/AdminLayout';
import LandingPage from './components/LandingPage';
import DashboardView from './components/DashboardView';
import IrrigationControlView from './components/IrrigationControlView';

function App() {
  const [currentPath, setCurrentPath] = useState('/');

  // Public Routes
  if (currentPath === '/') {
    return <LandingPage onNavigate={setCurrentPath} />;
  }
  
  if (currentPath === '/login') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">T</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back!</h2>
            <p className="text-gray-600 text-sm mt-1">Sign in to your account</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                defaultValue="admin@terramoist.ai"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                defaultValue="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button 
              onClick={() => setCurrentPath('/dashboard')}
              className="w-full py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-all"
            >
              Login to Dashboard
            </button>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            Demo credentials: admin@terramoist.ai / password
          </p>
        </div>
      </div>
    );
  }

  // Protected Routes
  return (
    <AdminLayout currentPath={currentPath} setCurrentPath={setCurrentPath}>
      {currentPath === '/dashboard' && <DashboardView />}
      {currentPath === '/irrigation' && <IrrigationControlView />}
      
      {/* Placeholder for other routes */}
      {!['/dashboard', '/irrigation'].includes(currentPath) && (
        <div className="bg-white p-12 text-center rounded-xl border-2 border-dashed border-gray-300">
          <h3 className="font-bold text-lg text-gray-700 mb-2">Coming Soon</h3>
          <p className="text-gray-500">This feature is under development</p>
        </div>
      )}
    </AdminLayout>
  );
}

export default App;