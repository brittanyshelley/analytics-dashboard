import apiClient from './apiClient';

// Fetch monitor data
export const fetchMonitors = async () => {
  const { data } = await apiClient.get('/monitors');
  return data;
};

// Fetch metrics data
export const fetchMetrics = async () => {
  const { data } = await apiClient.get('/metrics');
  return data;
};

// Fetch alerts data
export const fetchAlerts = async () => {
  const { data } = await apiClient.get('/alerts');
  return data;
};
