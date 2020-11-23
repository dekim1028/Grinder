import client from './client';

export const readOverviewPlan = () =>
    client.get(`/api/overview/`);

export const readOverviewChart = () =>
    client.get(`/api/overview/chart`);