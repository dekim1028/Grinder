import client from './client';

export const read = id =>
    client.get(`/api/checklist/${id}`);

export const update = (checkList) =>
    client.patch("/api/checklist/",checkList);

export const updateItem = ({id,item}) =>
    client.patch(`/api/checklist/${id}`,item);