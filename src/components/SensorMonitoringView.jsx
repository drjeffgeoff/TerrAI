import { useMemo, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useFarmStore from '../store/useFarmStore';
import { Activity, Thermometer, Droplets } from 'lucide-react';

const SensorMonitoringView = () => {
  const sensors = useFarmStore((state) => state.sensors);
  const [selectedSensor, setSelectedSensor] = useState(sensors[0]?.id || '');

  const sensorTrend = useMemo(
    () => [
      { time: '6am', value: 58 },
      { time: '9am', value: 62 },
      { time: '12pm', value: 67 },
      { time: '3pm', value: 63 },
      { time: '6pm', value: 60 },
      { time: '9pm', value: 58 }
    ],
    []
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Sensor Monitoring</h1>
        <p className="text-gray-600 mt-1">Track real-time sensor status and historical trends across your farms.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Selected sensor trend</h2>
              <p className="text-sm text-gray-700 font-medium">Live readings for the most important devices.</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full bg-emerald-50 text-emerald-700 px-4 py-2 text-sm font-medium border border-emerald-200">Soil Moisture</button>
              <button className="rounded-full bg-sky-50 text-sky-700 px-4 py-2 text-sm font-medium border border-sky-200">Temperature</button>
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sensorTrend} margin={{ top: 10, right: 12, left: -12, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Live Status</h2>
          <div className="grid gap-4">
            {sensors.map((sensor) => (
              <button
                key={sensor.id}
                onClick={() => setSelectedSensor(sensor.id)}
                className={`w-full text-left rounded-3xl border p-4 transition ${
                  selectedSensor === sensor.id ? 'border-primary-600 bg-primary-50' : 'border-primary-300 bg-white hover:bg-primary-25'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">{sensor.type}</p>
                    <p className="text-sm text-gray-700 font-medium">{sensor.location}</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{sensor.value}{sensor.unit}</span>
                </div>
                <p className="mt-2 text-xs text-gray-700 font-medium">Updated {new Date(sensor.lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-5 h-5 text-primary-600" />
            <h3 className="text-sm font-semibold text-gray-900">Moisture Nodes</h3>
          </div>
          <p className="text-4xl font-bold text-gray-900">{sensors.filter((sensor) => sensor.type === 'Soil Moisture').length}</p>
          <p className="text-sm text-gray-500 mt-2">Active moisture sensors currently reporting.</p>
        </div>
        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Thermometer className="w-5 h-5 text-primary-600" />
            <h3 className="text-sm font-semibold text-gray-900">Climate Devices</h3>
          </div>
          <p className="text-4xl font-bold text-gray-900">{sensors.filter((sensor) => sensor.type === 'Temperature').length + sensors.filter((sensor) => sensor.type === 'Humidity').length}</p>
          <p className="text-sm text-gray-500 mt-2">Climate and humidity sensors online.</p>
        </div>
        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-5 h-5 text-primary-600" />
            <h3 className="text-sm font-semibold text-gray-900">Alerts Monitored</h3>
          </div>
          <p className="text-4xl font-bold text-gray-900">{sensors.filter((sensor) => sensor.status !== 'normal').length}</p>
          <p className="text-sm text-gray-500 mt-2">Sensors requiring attention.</p>
        </div>
      </div>
    </div>
  );
};

export default SensorMonitoringView;
