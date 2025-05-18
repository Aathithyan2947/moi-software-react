import api from './api';
import type { Function, CreateFunctionInput } from '../types';

export const getFunctions = async (params: {
  page?: number;
  limit?: number;
  search?: string;
}) => {
  const response = await api.get('/functions', { params });
  return response.data;
};

export const createFunction = async (data: CreateFunctionInput) => {
  const response = await api.post('/functions', data);
  return response.data;
};

export const getUniqueNames = async () => {
  const response = await api.get('/functions/unique/names');
  return response.data;
};

export const getUniqueCities = async () => {
  const response = await api.get('/functions/unique/cities');
  return response.data;
};

export const getUniqueOccupations = async () => {
  const response = await api.get('/functions/unique/occupations');
  return response.data;
};