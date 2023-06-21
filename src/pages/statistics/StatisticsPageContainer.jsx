import { useEffect, useState } from 'react';

import { fetchStatistics } from '@/utils';
import { WithLoader } from '@/hocs';
import StatisticsPage from './StatisticsPage';

const StatisticsContainer = () => {
  const [statisticsList, setStatisticsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStatisticsHandler();
  }, []);

  const fetchStatisticsHandler = async () => {
    const statisticsArr = await fetchStatistics();
    statisticsArr.sort(function (a, b) {
      return b.date - a.date;
    });
    setStatisticsList(statisticsArr);
    setIsLoading(false);
  };

  return (
    <WithLoader isLoading={isLoading}>
      <StatisticsPage list={statisticsList} />
    </WithLoader>
  );
};

export default StatisticsContainer;
