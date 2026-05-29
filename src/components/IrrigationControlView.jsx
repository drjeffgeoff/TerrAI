import { useState } from 'react';
import { Droplets, Play, Pause, Zap } from 'lucide-react';

const IrrigationControlView = () => {
  const [selectedZone, setSelectedZone] = useState('Bed 1');
  const [flowRate, setFlowRate] = useState(65);
  const [isActive, setIsActive] = useState(false);

  const zones = ['Bed 1', 'Bed 2', 'Tower A', 'Tower B', 'Tower C', 'Tower D'];
  const highlightedZones = new Set(['Bed 1','Bed 2', 'Tower A', 'Tower B', 'Tower C', 'Tower D']);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Irrigation Control</h1>
        <p className="text-gray-600 mt-1">Manage and monitor your irrigation systems</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Control Panel */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-primary-300 p-6 space-y-6">
          <div>
            <label className="text-sm font-semibold text-gray-900 block mb-3">Select Zone</label>
            <div className="flex gap-2 flex-wrap">
              {zones.map((zone) => {
                const isHighlighted = highlightedZones.has(zone);
                return (
                  <button
                    key={zone}
                    onClick={() => setSelectedZone(zone)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                      selectedZone === zone
                        ? 'bg-primary-600 text-white border-primary-600'
                        : isHighlighted
                        ? 'bg-[#518f67] text-white border-primary-600'
                        : 'bg-white border-primary-300 text-gray-900 hover:border-primary-400'
                    }`}
                  >
                    {zone}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="p-6 bg-primary-50 rounded-xl border border-primary-300">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-bold text-gray-900">Manual Flow Rate Control</h4>
                <p className="text-sm text-gray-700 font-medium">Adjust irrigation intensity</p>
              </div>
              <Zap className="w-6 h-6 text-primary-600" />
            </div>
            <input 
              type="range" 
              min="0" 
              max="100"
              value={flowRate}
              onChange={(e) => setFlowRate(e.target.value)}
              className="w-full accent-primary-600" 
            />
            <div className="flex justify-between mt-2 text-sm text-gray-700 font-medium">
              <span>0%</span>
              <span className="font-bold text-primary-600">{flowRate}%</span>
              <span>100%</span>
            </div>
          </div>

          <button 
            onClick={() => setIsActive(!isActive)}
            className={`w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
              isActive 
                ? 'bg-red-600 text-white hover:bg-red-700' 
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            {isActive ? 'Stop Irrigation' : 'Start Irrigation'}
          </button>
        </div>

        {/* Status Panel */}
        <div className="bg-white rounded-xl border border-primary-300 p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Droplets className="w-5 h-5 text-primary-600" />
            Irrigation Status
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-primary-200">
              <span className="text-gray-700 font-medium">Status</span>
              <span className={`font-bold ${isActive ? 'text-green-600' : 'text-gray-400'}`}>
                {isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-primary-200">
              <span className="text-gray-700 font-medium">Current Zone</span>
              <span className="font-semibold text-gray-900">{selectedZone}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-primary-200">
              <span className="text-gray-700 font-medium">Flow Rate</span>
              <span className="font-semibold text-gray-900">{flowRate}%</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700 font-medium">Water Saved</span>
              <span className="font-bold text-green-600">40%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrrigationControlView;