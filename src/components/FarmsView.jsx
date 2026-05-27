import useFarmStore from '../store/useFarmStore';

const FarmsView = () => {
  const farms = useFarmStore((state) => state.farms);
  const totalFarms = farms.length;
  const averageScore = Math.round(farms.reduce((sum, farm) => sum + farm.score, 0) / totalFarms);
  const activeSensors = farms.reduce((sum, farm) => sum + farm.sensors, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Farm Portfolio</h1>
        <p className="text-gray-600 mt-1">Review each facility and monitor performance across your network.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <p className="text-sm text-gray-700 font-medium">Total Farms</p>
          <p className="text-3xl font-bold text-primary-700 mt-3">{totalFarms}</p>
        </div>
        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <p className="text-sm text-gray-700 font-medium">Active Sensors</p>
          <p className="text-3xl font-bold text-primary-700 mt-3">{activeSensors}</p>
        </div>
        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <p className="text-sm text-gray-700 font-medium">Average Health Score</p>
          <p className="text-3xl font-bold text-primary-700 mt-3">{averageScore}%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {farms.map((farm) => (
          <div key={farm.id} className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{farm.name}</h2>
                <p className="text-sm text-gray-700 font-medium mt-1">{farm.type}</p>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                farm.status === 'Healthy' ? 'bg-emerald-100 text-emerald-700' :
                farm.status === 'Warning' ? 'bg-amber-100 text-amber-700' :
                'bg-red-100 text-red-700'
              }`}>
                {farm.status}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="rounded-2xl bg-primary-50 border border-primary-200 p-4">
                <p className="font-medium text-gray-900">Sensors</p>
                <p className="mt-2 text-2xl font-bold text-primary-700">{farm.sensors}</p>
              </div>
              <div className="rounded-2xl bg-primary-50 border border-primary-200 p-4">
                <p className="font-medium text-gray-900">Water</p>
                <p className="mt-2 text-2xl font-bold text-primary-700">{farm.water}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-700">Size</p>
                <p className="mt-2 font-semibold text-gray-900">{farm.size}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Established</p>
                <p className="mt-2 font-semibold text-gray-900">{farm.established}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmsView;
