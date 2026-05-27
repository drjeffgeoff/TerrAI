import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockWaterUsageData } from '../data/mockData';
import { FileText, ArrowUpRight, Calendar } from 'lucide-react';

const ReportsView = () => {
  const totalUsage = useMemo(() => mockWaterUsageData.reduce((sum, item) => sum + item.usage, 0), []);
  const averageUsage = useMemo(() => Math.round(totalUsage / mockWaterUsageData.length), [totalUsage]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Reports & History</h1>
        <p className="text-gray-600 mt-1">Review historic consumption and export ready farm reports.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <p className="text-sm text-gray-700 font-medium">Total Water Usage</p>
          <p className="text-3xl font-bold text-primary-700 mt-3">{totalUsage.toLocaleString()} L</p>
        </div>
        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <p className="text-sm text-gray-700 font-medium">Average Daily Use</p>
          <p className="text-3xl font-bold text-primary-700 mt-3">{averageUsage} L</p>
        </div>
        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <p className="text-sm text-gray-700 font-medium">Report Downloads</p>
          <p className="text-3xl font-bold text-primary-700 mt-3">24</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Water Usage Overview</h2>
              <p className="text-sm text-gray-700 font-medium">Last 7 days consumption trend.</p>
            </div>
            <Calendar className="w-5 h-5 text-primary-600" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockWaterUsageData} margin={{ top: 10, right: 12, left: -12, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="usage" fill="#16a34a" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full rounded-3xl bg-primary-600 px-5 py-4 text-left text-white shadow-sm hover:bg-primary-700 transition font-medium">
              <div className="flex items-center justify-between gap-3">
                <span>Export Report</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <p className="text-sm text-primary-100 mt-2">Prepare the latest irrigation and yield report.</p>
            </button>
            <div className="rounded-3xl bg-primary-50 border border-primary-200 p-4">
              <p className="text-sm text-gray-700 font-medium">Insights Delivered</p>
              <p className="mt-2 text-gray-900 font-medium">Water consumption has improved by 7% this week.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsView;
