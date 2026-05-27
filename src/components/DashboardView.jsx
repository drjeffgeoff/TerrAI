import { useState } from 'react';
import { 
  TrendingUp, Droplets, Thermometer, Wind, AlertTriangle, 
  Activity, Download, RefreshCw 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useFarmStore from '../store/useFarmStore';
import { mockWaterUsageData, mockAlerts } from '../data/mockData';

const DashboardView = () => {
  const { farms, sensors } = useFarmStore();
  const [isLoading, setIsLoading] = useState(false);
  const weatherData = {
    temperature: 24,
    humidity: 68,
    windSpeed: 12
  };

  const metrics = [
    { 
      title: 'Total Farms', 
      value: farms.length, 
      change: '+2', 
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-primary-600'
    },
    { 
      title: 'Active Sensors', 
      value: sensors.length, 
      change: '+5', 
      icon: <Activity className="w-5 h-5" />,
      color: 'text-blue-600'
    },
    { 
      title: 'Water Usage', 
      value: '14,250 L', 
      change: '-8%', 
      icon: <Droplets className="w-5 h-5" />,
      color: 'text-cyan-600'
    },
    { 
      title: 'Crop Health', 
      value: '85%', 
      change: '+3%', 
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-green-600'
    }
  ];

  const waterData = mockWaterUsageData;
  const alerts = mockAlerts.filter(a => !a.acknowledged).slice(0, 3);

  const handleRefresh = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-700 font-medium mt-1">Welcome back! Here's your farm overview</p>
        </div>
        <button 
          onClick={handleRefresh}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-primary-300 rounded-lg hover:bg-primary-50 transition-colors text-gray-900 font-medium"
          disabled={isLoading}
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-primary-300 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 bg-primary-100 rounded-lg ${metric.color}`}>
                {metric.icon}
              </div>
              <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
            <p className="text-gray-700 text-sm font-medium mt-1">{metric.title}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Water Usage Chart */}
        <div className="bg-white rounded-xl border border-primary-300 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900">Water Usage Trend</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <Download className="w-4 h-4" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={waterData}>
              <defs>
                <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="usage" stroke="#16a34a" fillOpacity={1} fill="url(#colorWater)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Sensor Status */}
        <div className="bg-white rounded-xl border border-primary-300 p-6">
          <h3 className="font-bold text-gray-900 mb-4">Sensor Status</h3>
          <div className="space-y-4">
            {sensors.map((sensor) => (
              <div key={sensor.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${sensor.status === 'normal' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                  <div>
                    <p className="font-medium text-gray-900">{sensor.type}</p>
                    <p className="text-sm text-gray-700 font-medium">{sensor.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{sensor.value}{sensor.unit}</p>
                  <p className="text-xs text-gray-700 font-medium">Threshold: {sensor.threshold.min}-{sensor.threshold.max}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts & Weather Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Alerts */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-primary-300 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900">Recent Alerts</h3>
            <button className="text-primary-600 text-sm font-medium hover:text-primary-700">View All</button>
          </div>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-lg border ${
                alert.type === 'critical' ? 'bg-red-50 border-red-300' :
                alert.type === 'warning' ? 'bg-yellow-50 border-yellow-300' :
                'bg-blue-50 border-blue-300'
              }`}>
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`w-5 h-5 ${
                    alert.type === 'critical' ? 'text-red-600' :
                    alert.type === 'warning' ? 'text-yellow-600' :
                    'text-blue-600'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{alert.message}</p>
                    <p className="text-sm text-gray-700 font-medium">{alert.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 text-sm font-medium">Acknowledge</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Widget */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Weather Conditions</h3>
            <Wind className="w-5 h-5" />
          </div>
          <div className="text-center mb-4">
            <Thermometer className="w-8 h-8 mx-auto mb-2" />
            <div className="text-4xl font-bold">{weatherData.temperature}°C</div>
            <p className="text-primary-100 mt-1">Partly Cloudy</p>
          </div>
          <div className="flex justify-between pt-4 border-t border-primary-700">
            <div>
              <p className="text-sm text-primary-100">Humidity</p>
              <p className="font-semibold">{weatherData.humidity}%</p>
            </div>
            <div>
              <p className="text-sm text-primary-100">Wind Speed</p>
              <p className="font-semibold">{weatherData.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;