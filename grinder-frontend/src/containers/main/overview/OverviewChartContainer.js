import React, { useEffect } from 'react';
import OverviewChart from '../../../components/main/overview/OverviewChart';
import { useSelector, useDispatch } from 'react-redux';
import { readOverviewChart } from '../../../modules/overview';

const OverviewChartContainer = () => {
	const dispatch = useDispatch();

	const { chart } = useSelector(({ overview }) => ({
		chart: overview.chart,
	}));

	useEffect(() => {
		dispatch(readOverviewChart());
	}, [dispatch]);

	return <OverviewChart chart={chart} />;
};

export default OverviewChartContainer;
