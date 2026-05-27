import { useState } from 'react';
import { Settings, Bell, ShieldCheck } from 'lucide-react';

const SettingsView = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoUpdates, setAutoUpdates] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Settings className="w-6 h-6 text-primary-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Configure your farming dashboard, notifications, and system preferences.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">System Preferences</h2>
          <div className="space-y-4">
            <div className="rounded-3xl bg-primary-50 border border-primary-200 p-5">
              <p className="font-semibold text-gray-900">Timezone</p>
              <p className="text-sm text-gray-700 font-medium mt-1">America/Los_Angeles</p>
            </div>
            <div className="rounded-3xl bg-primary-50 border border-primary-200 p-5">
              <p className="font-semibold text-gray-900">Data refresh interval</p>
              <p className="text-sm text-gray-700 font-medium mt-1">Every 10 minutes</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
              <p className="text-sm text-gray-700 font-medium">Control alerts and communication settings.</p>
            </div>
            <Bell className="w-5 h-5 text-primary-600" />
          </div>
          <div className="space-y-4">
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`w-full rounded-3xl border px-5 py-4 text-left font-medium transition ${
                notificationsEnabled ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-primary-300 bg-white text-gray-900'
              }`}
            >
              Notifications {notificationsEnabled ? 'Enabled' : 'Disabled'}
            </button>
            <button
              onClick={() => setAutoUpdates(!autoUpdates)}
              className={`w-full rounded-3xl border px-5 py-4 text-left font-medium transition ${
                autoUpdates ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-primary-300 bg-white text-gray-900'
              }`}
            >
              Auto Updates {autoUpdates ? 'On' : 'Off'}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="w-5 h-5 text-primary-600" />
          <h2 className="text-lg font-semibold text-gray-900">Security</h2>
        </div>
        <div className="grid gap-4">
          <div className="rounded-3xl bg-primary-50 border border-primary-200 p-5">
            <p className="font-semibold text-gray-900">Password protection</p>
            <p className="text-sm text-gray-700 font-medium mt-1">Two-factor authentication is enabled for your account.</p>
          </div>
          <div className="rounded-3xl bg-primary-50 border border-primary-200 p-5">
            <p className="font-semibold text-gray-900">Access control</p>
            <p className="text-sm text-gray-700 font-medium mt-1">Team roles are managed from the User Management screen.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
