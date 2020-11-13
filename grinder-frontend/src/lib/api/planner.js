import client from './client';

export const read = (date) =>
    client.get(`/api/planner/${date}`);

export const update = (planner) =>
    client.patch("/api/planner/",planner);