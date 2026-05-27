import { Sprout, ArrowRight, Leaf } from 'lucide-react';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-primary-900">TerraMoist AI</span>
        </div>
        <button 
          onClick={() => onNavigate('/login')}
          className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-all"
        >
          Get Started
        </button>
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
          <button 
            onClick={() => onNavigate('/login')}
            className="bg-primary-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:bg-primary-700 transition-all flex items-center gap-2"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 rounded-3xl shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" 
            alt="Smart Farming"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </header>
    </div>
  );
};

export default LandingPage;