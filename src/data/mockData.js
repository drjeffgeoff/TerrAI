export const mockFarms = [
  { 
    id: 'green-valley', 
    name: 'Green Valley Farm', 
    type: 'Central Greenhouse', 
    status: 'Healthy', 
    sensors: 48, 
    water: '12,450 L', 
    score: 85,
    location: 'California, USA',
    size: '25 acres',
    established: '2018'
  },
  { 
    id: 'sunrise-hydro', 
    name: 'Sunrise Hydroponics', 
    type: 'Vertical Farming Unit', 
    status: 'Warning', 
    sensors: 24, 
    water: '4,200 L', 
    score: 68,
    location: 'Nevada, USA',
    size: '10 acres',
    established: '2020'
  },
  { 
    id: 'ecofarm-360', 
    name: 'EcoFarm 360', 
    type: 'Outdoor Field', 
    status: 'Critical', 
    sensors: 32, 
    water: '18,100 L', 
    score: 42,
    location: 'Texas, USA',
    size: '50 acres',
    established: '2015'
  }
];

export const mockCrops = [
  { id: 1, name: 'Lettuce', zone: 'Bed 1', stage: 'Growing', health: 'Excellent', estHarvest: '2024-05-18', yield: '92%', planted: '2024-04-01' },
  { id: 2, name: 'Spinach', zone: 'Bed 2', stage: 'Growing', health: 'Good', estHarvest: '2024-05-22', yield: '78%', planted: '2024-04-05' },
  { id: 3, name: 'Kale', zone: 'Tower A', stage: 'Seedling', health: 'Excellent', estHarvest: '2024-05-25', yield: '88%', planted: '2024-04-10' },
  { id: 4, name: 'Basil', zone: 'Tower B', stage: 'Growing', health: 'Fair', estHarvest: '2024-05-20', yield: '75%', planted: '2024-04-08' },
  { id: 5, name: 'Tomatoes', zone: 'Bed 3', stage: 'Flowering', health: 'Excellent', estHarvest: '2024-06-15', yield: '85%', planted: '2024-03-20' },
  { id: 6, name: 'Cucumbers', zone: 'Bed 4', stage: 'Growing', health: 'Good', estHarvest: '2024-06-01', yield: '80%', planted: '2024-04-12' }
];

export const mockSensors = [
  { id: 's1', type: 'Soil Moisture', location: 'Bed 1', value: 65, unit: '%', status: 'normal', threshold: { min: 40, max: 80 }, lastUpdated: new Date().toISOString() },
  { id: 's2', type: 'Temperature', location: 'Greenhouse', value: 24, unit: '°C', status: 'normal', threshold: { min: 18, max: 30 }, lastUpdated: new Date().toISOString() },
  { id: 's3', type: 'Humidity', location: 'Greenhouse', value: 68, unit: '%', status: 'normal', threshold: { min: 50, max: 85 }, lastUpdated: new Date().toISOString() },
  { id: 's4', type: 'pH Level', location: 'Hydroponics', value: 6.2, unit: 'pH', status: 'warning', threshold: { min: 5.5, max: 6.5 }, lastUpdated: new Date().toISOString() }
];

export const mockAlerts = [
  { id: 1, type: 'critical', message: 'Low Soil Moisture - Bed 2', time: '10 min ago', acknowledged: false, severity: 'high' },
  { id: 2, type: 'warning', message: 'Pump Malfunction Detected', time: '25 min ago', acknowledged: false, severity: 'medium' },
  { id: 3, type: 'warning', message: 'High Temperature in Greenhouse', time: '1 hr ago', acknowledged: true, severity: 'medium' }
];

export const mockWaterUsageData = [
  { date: 'May 9', usage: 12450 },
  { date: 'May 10', usage: 13200 },
  { date: 'May 11', usage: 11800 },
  { date: 'May 12', usage: 14500 },
  { date: 'May 13', usage: 13800 },
  { date: 'May 14', usage: 15600 },
  { date: 'May 15', usage: 14200 }
];

export const mockIrrigationLogs = [
  { id: 1, zone: 'Bed 1', duration: 30, waterUsed: 450, timestamp: '2024-05-15T06:00:00', status: 'completed' },
  { id: 2, zone: 'Bed 2', duration: 25, waterUsed: 380, timestamp: '2024-05-15T06:30:00', status: 'completed' }
];