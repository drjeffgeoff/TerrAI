import { Cpu, Lightbulb, TrendingUp, Sparkles } from 'lucide-react';

const AIInsightsView = () => {
  const insights = [
    { title: 'Water Stress Prediction', value: 'Low Risk', description: 'Irrigation schedule is stable for the next 24 hours.', icon: Lightbulb, color: 'bg-emerald-100 text-emerald-700' },
    { title: 'Yield Opportunity', value: '+12%', description: 'AI projection based on current climate and nutrient data.', icon: TrendingUp, color: 'bg-sky-100 text-sky-700' },
    { title: 'Energy Efficiency', value: '84%', description: 'Optimized pump and nutrient circulation performance.', icon: Cpu, color: 'bg-violet-100 text-violet-700' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">AI Insights</h1>
        <p className="text-gray-600 mt-1">Actionable recommendations and predictive analysis for your farm operations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {insights.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p className="mt-3 text-3xl font-semibold text-gray-900">{item.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-3xl flex items-center justify-center ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Top Priorities</h2>
              <p className="text-sm text-gray-500">Recommended follow-up actions from the AI engine.</p>
            </div>
            <Sparkles className="w-6 h-6 text-primary-600" />
          </div>
          <ul className="space-y-4">
            <li className="rounded-3xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">Reduce daily irrigation by 8%</p>
              <p className="text-sm text-gray-600">Soil moisture remains stable and water delivery can be optimized.</p>
            </li>
            <li className="rounded-3xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">Boost nutrient mix for lettuce beds</p>
              <p className="text-sm text-gray-600">AI finds an opportunity to improve growth in Bed 1 and Bed 2.</p>
            </li>
            <li className="rounded-3xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">Monitor pump efficiency</p>
              <p className="text-sm text-gray-600">Current pump performance is within range but trending downward.</p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Summary</h2>
          <div className="space-y-4">
            <div className="rounded-3xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Current recommendation</p>
              <p className="font-semibold text-gray-900 mt-2">Harvest lettuce early to maximize nutrient retention.</p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Risk alert</p>
              <p className="font-semibold text-gray-900 mt-2">Watch greenhouse temperature after sunset hours.</p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Predicted yield</p>
              <p className="font-semibold text-gray-900 mt-2">+10% improvement over last cycle.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsightsView;
