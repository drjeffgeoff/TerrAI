import { Sprout, Droplets, Brain, ArrowRight, Leaf, BarChart3, Zap } from 'lucide-react';

const SolutionsPage = ({ onNavigate }) => {
  const solutions = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Smart Irrigation',
      description: 'Automated water management that reduces consumption by up to 40% while maintaining crop health.',
      benefits: ['Real-time soil moisture monitoring', 'Automated watering schedules', 'Drip irrigation optimization']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Crop Monitoring',
      description: 'Advanced analytics powered by machine learning for early disease detection and pest management.',
      benefits: ['Disease early warning system', 'Pest detection & alerts', 'Yield prediction models']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Analytics Dashboard',
      description: 'Comprehensive farm analytics with actionable insights to optimize operations and increase profits.',
      benefits: ['Production tracking', 'Cost analysis', 'Performance benchmarking']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy Optimization',
      description: 'Smart energy management system to reduce operational costs and environmental impact.',
      benefits: ['Pump efficiency monitoring', 'Peak load management', 'Renewable energy integration']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-br from-primary-50 to-primary-100/95 backdrop-blur-lg max-w-7xl mx-auto flex justify-between items-center p-6">
        <button onClick={() => onNavigate('/')} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-primary-900">TerraMoist AI</span>
        </button>
        <div className="hidden md:flex gap-8 items-center text-gray-600">
          <button onClick={() => onNavigate('/')} className="hover:text-primary-600 transition-colors">Home</button>
          <button onClick={() => onNavigate('/solutions')} className="hover:text-primary-600 transition-colors font-semibold text-primary-600">Solutions</button>
          <button onClick={() => onNavigate('/pricing')} className="hover:text-primary-600 transition-colors">Pricing</button>
          <button 
            onClick={() => onNavigate('/login')}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-all transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Complete Farm Management <br/>
            <span className="text-primary-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From irrigation control to AI-powered analytics, we provide integrated solutions designed to maximize your farm's productivity and profitability.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary-200">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.benefits.map((benefit, bidx) => (
                  <li key={bidx} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-xl text-primary-100 mb-8">Start with a free trial and see the results in real-time.</p>
          <button 
            onClick={() => onNavigate('/login')}
            className="text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-primary-600 transition-all transform hover:scale-105"
            style={{ backgroundColor: '#518f67' }}
          >
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">© 2026 TerraMoist AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SolutionsPage;
