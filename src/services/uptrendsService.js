// import apiClient from './apiClient';

// // Fetch monitor data
// export const fetchMonitors = async () => {
//   const { data } = await apiClient.get('/monitors');
//   return data;
// };

// // Fetch metrics data
// export const fetchMetrics = async () => {
//   const { data } = await apiClient.get('/metrics');
//   return data;
// };

// // Fetch alerts data
// export const fetchAlerts = async () => {
//   const { data } = await apiClient.get('/alerts');
//   return data;
// };

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

// Fetch all operators
export const fetchOperators = async () => {
  const { data } = await apiClient.get('/Operator'); // Adjust endpoint as needed
  return data;
};

// Fetch details of a specific operator by GUID
export const fetchOperatorDetails = async (operatorGuid) => {
  if (!operatorGuid) {
    throw new Error('operatorGuid is required to fetch operator details.');
  }
  const { data } = await apiClient.get(`/Operator/${operatorGuid}`); // Adjust endpoint as needed
  return data;
};
