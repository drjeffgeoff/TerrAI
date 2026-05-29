import { Sprout, Check } from 'lucide-react';

const PricingPage = ({ onNavigate }) => {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small farms and beginners',
      features: [
        'Up to 5 irrigation zones',
        'Basic sensor monitoring',
        'Mobile app access',
        'Email support',
        'Monthly reports',
        'Water usage tracking'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'For growing farms and operations',
      features: [
        'Unlimited irrigation zones',
        'Advanced AI analytics',
        'Mobile & web access',
        'Priority email & phone support',
        'Weekly reports',
        'Predictive maintenance alerts',
        'Multi-farm management',
        'API access'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale operations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'On-premise deployment',
        '24/7 phone support',
        'Advanced security features',
        'Custom reporting',
        'SLA guarantee'
      ],
      highlighted: false
    }
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
          <button onClick={() => onNavigate('/solutions')} className="hover:text-primary-600 transition-colors">Solutions</button>
          <button onClick={() => onNavigate('/pricing')} className="hover:text-primary-600 transition-colors font-semibold text-primary-600">Pricing</button>
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
            Simple, Transparent <br/>
            <span className="text-primary-600">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your farm. All plans include a 14-day free trial, no credit card required.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl scale-105'
                  : 'bg-white border border-primary-200 text-gray-900 shadow-lg'
              } p-8`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-primary-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <div className="text-4xl font-bold">{plan.price}</div>
                <div className={`text-sm ${plan.highlighted ? 'text-primary-100' : 'text-gray-600'}`}>
                  {plan.period}
                </div>
              </div>
              <button
                onClick={() => onNavigate('/login')}
                className={`w-full py-3 rounded-xl font-semibold mb-8 transition-all ${
                  plan.highlighted
                    ? 'bg-white text-primary-600 hover:bg-gray-100'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {[
            {
              q: 'Can I switch plans anytime?',
              a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
            },
            {
              q: 'What is included in the free trial?',
              a: 'The 14-day free trial includes full access to all features of the Professional plan, no credit card required.'
            },
            {
              q: 'Do you offer annual discounts?',
              a: 'Yes, we offer 20% discount on annual plans for Starter and Professional tiers.'
            },
            {
              q: 'What support is available?',
              a: 'All plans include email support. Professional plans get priority support, and Enterprise plans include 24/7 phone support.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-primary-200">
              <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8">Join thousands of farmers using TerraMoist AI to optimize their operations.</p>
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

export default PricingPage;
