import { TrendingUp, Droplets, Activity, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useFarmStore from '../store/useFarmStore';
import { mockWaterUsageData, mockAlerts } from '../data/mockData';

const DashboardView = () => {
  const { farms, sensors } = useFarmStore();
  
  const metrics = [
    { title: 'Total Farms', value: farms.length, change: '+2', icon: <TrendingUp className="w-5 h-5" />, color: 'text-primary-600' },
    { title: 'Active Sensors', value: sensors.length, change: '+5', icon: <Activity className="w-5 h-5" />, color: 'text-blue-600' },
    { title: 'Water Usage', value: '14,250 L', change: '-8%', icon: <Droplets className="w-5 h-5" />, color: 'text-cyan-600' },
    { title: 'Crop Health', value: '85%', change: '+3%', icon: <TrendingUp className="w-5 h-5" />, color: 'text-green-600' }
  ];

  const alerts = mockAlerts.filter(a => !a.acknowledged).slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's your farm overview</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 bg-gray-100 rounded-lg ${metric.color}`}>
                {metric.icon}
              </div>
              <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
            <p className="text-gray-600 text-sm mt-1">{metric.title}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4">Water Usage Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={mockWaterUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="usage" stroke="#16a34a" fill="#16a34a" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Sensor Status */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4">Sensor Status</h3>
          <div className="space-y-4">
            {sensors.map((sensor) => (
              <div key={sensor.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${sensor.status === 'normal' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                  <div>
                    <p className="font-medium text-gray-900">{sensor.type}</p>
                    <p className="text-sm text-gray-500">{sensor.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{sensor.value}{sensor.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">Recent Alerts</h3>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className={`p-4 rounded-lg border ${
              alert.type === 'critical' ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'
            }`}>
              <div className="flex items-center gap-3">
                <AlertTriangle className={`w-5 h-5 ${alert.type === 'critical' ? 'text-red-600' : 'text-yellow-600'}`} />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{alert.message}</p>
                  <p className="text-sm text-gray-600">{alert.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;