import { useState } from 'react';
import { LayoutDashboard, Sprout, Droplets, Brain, Radio, Bell, FileText, Users, Settings, LogOut, Menu, X } from 'lucide-react';
import { mockFarms } from '../data/mockData';

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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState({ name: 'Jeff Geoff', avatarUrl: null });

  function handleAvatarUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUser((u) => ({ ...u, avatarUrl: url }));
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-primary-100 to-primary-50">
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-primary-900 text-white flex flex-col transition-all duration-300`}>
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
                    isActive ? 'bg-primary-600 text-white' : 'text-white hover:bg-primary-800 hover:text-white'
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
          <div className="text-xs text-gray-300 tracking-wider uppercase">
            v1.0 · LSTM Engine
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-green-50 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <select className="bg-white border border-primary-300 rounded-lg py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500">
              {mockFarms.map((farm) => (
                <option key={farm.id} value={farm.id}>{farm.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-4 relative">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 border-l pl-4 border-gray-200 text-sm font-medium text-gray-900 hover:text-primary-700"
              >
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-medium">{(user.name || '').split(' ').map(n=>n[0]).join('').slice(0,2)}</span>
                  </div>
                )}
                <span>{user.name}</span>
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-white border border-gray-200 shadow-lg text-left z-20">
                  <input id="avatarInput" type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                  <button
                    onClick={() => { document.getElementById('avatarInput')?.click(); }}
                    className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-primary-50"
                  >
                    Upload Photo
                  </button>
                  <button
                    onClick={() => { setCurrentPath('/'); setProfileOpen(false); }}
                    className="w-full flex items-center gap-2 text-left px-4 py-3 text-sm text-gray-700 hover:bg-primary-50"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                  <button
                    className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-primary-50"
                  >
                    Modify Profile
                  </button>
                  <button
                    className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-primary-50"
                  >
                    Edit User Detail
                  </button>
                  <button
                    className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 rounded-b-2xl"
                  >
                    Reset Password
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
