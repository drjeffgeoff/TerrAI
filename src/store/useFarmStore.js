import { create } from 'zustand';
import { mockFarms, mockCrops, mockSensors, mockIrrigationLogs } from '../data/mockData';

const useFarmStore = create((set, get) => ({
  farms: mockFarms,
  crops: mockCrops,
  sensors: mockSensors,
  irrigationLogs: mockIrrigationLogs,
  selectedFarm: mockFarms[0],
  
  setSelectedFarm: (farmId) => {
    const farm = get().farms.find(f => f.id === farmId);
    set({ selectedFarm: farm });
  },
  
  updateSensorReading: (sensorId, value) => {
    set((state) => ({
      sensors: state.sensors.map(sensor =>
        sensor.id === sensorId 
          ? { ...sensor, value, lastUpdated: new Date().toISOString() }
          : sensor
      )
    }));
  },
  
  addIrrigationLog: (log) => {
    set((state) => ({
      irrigationLogs: [log, ...state.irrigationLogs]
    }));
  }
}));

export default useFarmStore;