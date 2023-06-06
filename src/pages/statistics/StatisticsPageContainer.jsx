import { useEffect, useState } from 'react';

import { fetchStatistics } from '@/utils/statisticsOperations';

import StatisticsPage from './StatisticsPage';

const StatisticsContainer = () => {
  const [statisticsList, setStatisticsList] = useState([]);

  useEffect(() => {
    fetchStatisticsHandler();
  }, []);

  const fetchStatisticsHandler = async () => {
    const statisticsArr = await fetchStatistics();
    setStatisticsList(statisticsArr);
  };

  return <StatisticsPage list={statisticsList} />;
};

export default StatisticsContainer;
