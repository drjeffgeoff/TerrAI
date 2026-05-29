import { useState } from 'react';
import AdminLayout from './components/AdminLayout';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SolutionsPage from './components/SolutionsPage';
import PricingPage from './components/PricingPage';
import FarmSelection from './components/FarmSelection';
import DashboardView from './components/DashboardView';
import FarmsView from './components/FarmsView';
import AIInsightsView from './components/AIInsightsView';
import SensorMonitoringView from './components/SensorMonitoringView';
import AlertsView from './components/AlertsView';
import ReportsView from './components/ReportsView';
import UsersView from './components/UsersView';
import SettingsView from './components/SettingsView';
import IrrigationControlView from './components/IrrigationControlView';
import useFarmStore from './store/useFarmStore';

function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const setSelectedFarm = useFarmStore((state) => state.setSelectedFarm);

  if (currentPath === '/') {
    return <LandingPage onNavigate={setCurrentPath} />;
  }

  if (currentPath === '/solutions') {
    return <SolutionsPage onNavigate={setCurrentPath} />;
  }

  if (currentPath === '/pricing') {
    return <PricingPage onNavigate={setCurrentPath} />;
  }

  if (currentPath === '/login') {
    return <LoginPage onLogin={() => setCurrentPath('/farm-select')} />;
  }

  if (currentPath === '/farm-select') {
    return (
      <FarmSelection
        onSelect={(farmId) => {
          if (farmId) {
            setSelectedFarm(farmId);
          }
          setCurrentPath('/dashboard');
        }}
      />
    );
  }

  return (
    <AdminLayout currentPath={currentPath} setCurrentPath={setCurrentPath}>
      {currentPath === '/dashboard' && <DashboardView />}
      {currentPath === '/farms' && <FarmsView />}
      {currentPath === '/irrigation' && <IrrigationControlView />}
      {currentPath === '/ai-insights' && <AIInsightsView />}
      {currentPath === '/sensors' && <SensorMonitoringView />}
      {currentPath === '/alerts' && <AlertsView />}
      {currentPath === '/reports' && <ReportsView />}
      {currentPath === '/users' && <UsersView />}
      {currentPath === '/settings' && <SettingsView />}
    </AdminLayout>
  );
}

export default App;
