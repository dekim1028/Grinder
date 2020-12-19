import client from './client';

export const readSettings = (id) => client.get(`api/settings/${id}`);

export const addCategory = ({ id, item }) =>
	client.post(`api/settings/${id}`, item);

export const deleteCategory = ({ id, categoryId }) =>
	client.delete(`api/settings/${id}/${categoryId}`);
