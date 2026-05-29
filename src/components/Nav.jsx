import { Sprout } from 'lucide-react';

export default function Nav({ onNavigate, currentPath: currentPathProp }) {
  const links = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const getPath = () => {
    if (currentPathProp) return currentPathProp;
    if (typeof window !== 'undefined') return window.location.pathname || '/';
    return '/';
  };

  const currentPath = getPath();

  function navTo(href) {
    if (onNavigate) return onNavigate(href);
    if (href.startsWith('#')) return (window.location.hash = href);
    window.location.pathname = href;
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-primary-50 to-primary-100/95 backdrop-blur-lg max-w-7xl mx-auto flex justify-between items-center p-6">
      <div className="flex items-center gap-2">
        <Sprout className="w-6 h-6 text-primary-700" />
        <span className="text-2xl font-bold text-primary-900">TerraMoist AI</span>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        {links.map((l) => {
          const isActive = l.href === currentPath;
          return (
            <button
              key={l.name}
              onClick={() => navTo(l.href)}
              className={`text-sm px-4 py-2 ${isActive ? 'font-semibold text-primary-700' : 'text-gray-600 hover:text-primary-600'}`}
            >
              {l.name}
            </button>
          );
        })}

        <button
          onClick={() => navTo('/login')}
          className="bg-primary-600 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-700 transition-all transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
