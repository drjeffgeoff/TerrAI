import { Sprout, Droplets, Brain, ArrowRight, Leaf, Thermometer, CloudRain } from 'lucide-react';

const LandingPage = ({ onNavigate }) => {
  const features = [
    { icon: <Brain className="w-6 h-6" />, title: 'AI-Powered Insights', description: 'Predictive analytics for optimal crop management' },
    { icon: <Droplets className="w-6 h-6" />, title: 'Smart Irrigation', description: 'Automated water management saving up to 40%' },
    { icon: <Sprout className="w-6 h-6" />, title: 'Crop Monitoring', description: 'Real-time health tracking of your crops' },
    { icon: <Thermometer className="w-6 h-6" />, title: 'Climate Control', description: 'Precise environmental monitoring' }
  ];

  const stats = [
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '40%', label: 'Water Savings' },
    { value: '30%', label: 'Yield Increase' },
    { value: '24/7', label: 'Monitoring' }
  ];

  const partners = [
    { name: 'AgroTech Solutions', logo: 'https://via.placeholder.com/150x80/518f67/ffffff?text=AgroTech' },
    { name: 'FarmHub', logo: 'https://via.placeholder.com/150x80/16a34a/ffffff?text=FarmHub' },
    { name: 'GreenGrow', logo: 'https://via.placeholder.com/150x80/22c55e/ffffff?text=GreenGrow' },
    { name: 'Smart Harvest', logo: 'https://via.placeholder.com/150x80/15803d/ffffff?text=SmartHarvest' },
    { name: 'IrrigationPro', logo: 'https://via.placeholder.com/150x80/518f67/ffffff?text=IrrigationPro' },
    { name: 'CropVision AI', logo: 'https://via.placeholder.com/150x80/16a34a/ffffff?text=CropVision' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-br from-primary-50 to-primary-100/95 backdrop-blur-lg max-w-7xl mx-auto flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-primary-900">TerraMoist AI</span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-gray-600">
          <a href="#features" className="hover:text-primary-600 transition-colors">Features</a>
          <button onClick={() => onNavigate('/solutions')} className="hover:text-primary-600 transition-colors cursor-pointer">Solutions</button>
          <button onClick={() => onNavigate('/pricing')} className="hover:text-primary-600 transition-colors cursor-pointer">Pricing</button>
          <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
          <button 
            onClick={() => onNavigate('/login')}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-all transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center py-20 px-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            Smart Farming Revolution
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Smart Farming, <br/>
            <span className="text-primary-600">Powered by AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Real-time monitoring, intelligent irrigation, and data-driven insights for higher yield and sustainable farming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('/login')}
              className="bg-primary-600 text-green-600 px-8 py-3 rounded-xl font-medium shadow-lg hover:bg-primary-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button
              className="border-2 border-primary-700 text-white px-8 py-3 rounded-xl font-medium hover:border-primary-600 hover:bg-primary-50 transition-all"
              style={{ backgroundColor: '#518f67' }}
            >
              Request Demo
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 rounded-3xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" 
              alt="Smart Farming Dashboard"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CloudRain className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Water Saved</p>
                <p className="text-xl font-bold text-gray-900">40%</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <div className="bg-white border-t border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern Farming</h2>
          <p className="text-xl text-gray-600">Everything you need to manage your farm efficiently</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Farming?</h2>
          <p className="text-xl text-primary-100 mb-8">Join thousands of farmers using TerraMoist AI to optimize their operations.</p>
          <button 
            onClick={() => onNavigate('/login')}
            className="text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-primary-600 transition-all transform hover:scale-105"
            style={{ backgroundColor: '#518f67' }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Partners Section */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600">Partnering with the best in agriculture and technology</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center h-24 border border-primary-200"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
                title={partner.name}
              />
            </div>
          ))}
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

export default LandingPage;