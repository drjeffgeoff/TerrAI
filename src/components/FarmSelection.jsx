import { useState } from 'react';
import { CheckCircle, CornerUpRight } from 'lucide-react';
import { mockFarms } from '../data/mockData';

const FarmSelection = ({ onSelect }) => {
  const [selectedFarmId, setSelectedFarmId] = useState(mockFarms[0]?.id || '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl rounded-[2rem] border border-gray-200 bg-white shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="p-10 bg-primary-950 text-white">
            <div className="flex items-center gap-3 mb-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-600 text-xl font-bold">T</span>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary-200">TerraMoist AI</p>
                <h2 className="mt-4 text-3xl font-bold">Select Your Farm</h2>
              </div>
            </div>
            <p className="text-gray-200 text-sm leading-7">Choose the farm you want to manage and view operational metrics, alerts, irrigation settings, and AI insights in one place.</p>
            <div className="mt-10 grid gap-4">
              {mockFarms.map((farm) => (
                <div key={farm.id} className="rounded-3xl bg-white/10 p-5">
                  <p className="text-sm text-primary-200">{farm.type}</p>
                  <h3 className="mt-2 text-xl font-semibold">{farm.name}</h3>
                  <p className="mt-3 text-sm text-gray-300">{farm.sensors} sensors · {farm.water} used · {farm.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10">
            <h3 className="text-2xl font-bold text-gray-900">Choose a farm to continue</h3>
            <p className="mt-3 text-gray-600">Pick the facility you want to manage and open the dashboard with data filtered to that farm.</p>

            <div className="mt-8 space-y-4">
              {mockFarms.map((farm) => (
                <button
                  key={farm.id}
                  onClick={() => setSelectedFarmId(farm.id)}
                  className={`w-full rounded-3xl border px-5 py-4 text-left transition ${
                    selectedFarmId === farm.id ? 'border-primary-600 bg-primary-50' : 'border-gray-200 bg-white hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-gray-900">{farm.name}</p>
                      <p className="text-sm text-gray-500">{farm.type}</p>
                    </div>
                    {selectedFarmId === farm.id ? <CheckCircle className="w-6 h-6 text-primary-600" /> : null}
                  </div>
                  <p className="mt-3 text-sm text-gray-500">{farm.location} · {farm.size}</p>
                </button>
              ))}
            </div>

            <button
              onClick={() => onSelect(selectedFarmId)}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary-600 px-8 py-3 text-white font-semibold shadow-lg hover:bg-primary-700 transition-all"
            >
              Continue to Dashboard <CornerUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmSelection;
