import apiClient from './apiClient'; // Axios instance

export const fetchAllOperators = async () => {
  const { data } = await apiClient.get('/operators');
  return data;
};

export const fetchOperatorDetails = async (operatorGuid) => {
  const { data } = await apiClient.get(`/operators/${operatorGuid}`);
  return data;
};