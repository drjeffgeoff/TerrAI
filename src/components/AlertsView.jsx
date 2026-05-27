import { useState } from 'react';
import { Bell, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { mockAlerts } from '../data/mockData';

const AlertsView = () => {
  const [selectedType, setSelectedType] = useState('all');
  const alerts = mockAlerts.filter((alert) => selectedType === 'all' || alert.type === selectedType);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Alerts & Notifications</h1>
        <p className="text-gray-600 mt-1">See critical alerts and manage notification status for your systems.</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {['all', 'critical', 'warning', 'info'].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
              selectedType === type ? 'bg-primary-600 text-white border-primary-600' : 'bg-primary-50 text-gray-900 border-primary-300 hover:border-primary-400'
            }`}
          >
            {type === 'all' ? 'All Alerts' : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Alerts</h2>
            <Bell className="w-5 h-5 text-primary-600" />
          </div>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className={`rounded-3xl p-5 border ${
                alert.type === 'critical' ? 'bg-red-50 border-red-300' :
                alert.type === 'warning' ? 'bg-amber-50 border-amber-300' : 'bg-sky-50 border-sky-300'
              }`}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-700 font-medium mt-1">{alert.time}</p>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    alert.type === 'critical' ? 'bg-red-100 text-red-700' :
                    alert.type === 'warning' ? 'bg-amber-100 text-amber-700' : 'bg-sky-100 text-sky-700'
                  }`}>
                    {alert.type.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
            {alerts.length === 0 && <p className="text-gray-700 font-medium">No alerts matching this filter.</p>}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Alert Resolution</h2>
          <div className="space-y-4">
            <div className="rounded-3xl bg-primary-50 border border-primary-200 p-4">
              <p className="text-sm text-gray-700 font-medium">Critical response</p>
              <p className="font-semibold text-gray-900 mt-2">Escalate pump failure immediately and notify maintenance.</p>
            </div>
            <div className="rounded-3xl bg-primary-50 border border-primary-200 p-4">
              <p className="text-sm text-gray-700 font-medium">System health</p>
              <p className="font-semibold text-gray-900 mt-2">All other sensors remain stable with no severe failures.</p>
            </div>
            <div className="rounded-3xl bg-primary-50 border border-primary-200 p-4">
              <p className="text-sm text-gray-700 font-medium">Next action</p>
              <p className="font-semibold text-gray-900 mt-2">Schedule an inspection for greenhouse cooling systems.</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Resolved trends</p>
                <p className="text-sm text-gray-500">11 alerts cleared this week automatically.</p>
              </div>
            </div>
            <div className="rounded-3xl bg-sky-50 p-4 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-sky-600" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Safety status</p>
                <p className="text-sm text-gray-500">All farm zones are operating within safe thresholds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsView;
