import React from 'react';
import { LayoutDashboard, Sprout, Droplets, Brain, Radio, Bell, FileText, Users, Settings, LogOut, Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Farms', icon: Sprout, path: '/farms' },
  { name: 'Irrigation Control', icon: Droplets, path: '/irrigation' },
  { name: 'AI Insights', icon: Brain, path: '/ai-insights' },
  { name: 'Sensor Monitoring', icon: Radio, path: '/sensors' },
  { name: 'Alerts', icon: Bell, path: '/alerts' },
  { name: 'Reports', icon: FileText, path: '/reports' },
  { name: 'User Management', icon: Users, path: '/users' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export default function AdminLayout({ children, currentPath, setCurrentPath }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-primary-950 text-white flex flex-col transition-all duration-300`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            {sidebarOpen && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center font-bold">T</div>
                <span className="text-xl font-bold">TerraMoist AI</span>
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-primary-800 rounded-lg">
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          
          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => setCurrentPath(item.path)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-primary-600 text-white' : 'text-gray-300 hover:bg-primary-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {sidebarOpen && <span>{item.name}</span>}
                </button>
              );
            })}
          </nav>
        </div>
        
        <div className="mt-auto p-4">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-primary-800">
            <LogOut className="w-4 h-4" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <select className="bg-gray-50 border border-gray-200 rounded-lg py-2 px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500">
              {mockFarms.map(farm => (
                <option key={farm.id} value={farm.id}>{farm.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-medium">JD</span>
              </div>
              <span className="text-sm font-medium">John Doe</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

// Import for the select dropdown
import { mockFarms } from '../data/mockData';