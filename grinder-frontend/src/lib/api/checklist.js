import client from './client';

export const read = (id) => client.get(`/api/checklist/${id}`);

export const addChecklistItem = ({ id, newCheckList }) =>
	client.post(`/api/checklist/${id}`, newCheckList);

export const updateChecklistItem = ({ id, item }) =>
	client.patch(`/api/checklist/${id}`, item);

export const deleteChecklistItem = ({ id, itemId }) =>
	client.delete(`/api/checklist/${id}/${itemId}`);
