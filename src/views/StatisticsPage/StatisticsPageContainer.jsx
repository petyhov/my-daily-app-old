import { useEffect, useState } from 'react';

import {
  fetchStatistics,
  transformHeadersName,
  transformDataForList,
} from '@/utils';
import { WithLoader } from '@/hocs';

import StatisticsPage from './StatisticsPage';

const statisticTableHeaders = [
  { name: 'Дата', resName: 'date' },
  { name: 'Приклад', resName: 'secretTask' },
  { name: 'Результат', resName: 'secretValue' },
];

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

    const transformedData = statisticsArr.map((item) => {
      return transformDataForList(item, statisticTableHeaders);
    });
    setStatisticsList(transformedData);
    setIsLoading(false);
  };

  const tableHeadersNames = transformHeadersName(statisticTableHeaders);

  return (
    <WithLoader isLoading={isLoading}>
      <StatisticsPage list={statisticsList} tableHeaders={tableHeadersNames} />
    </WithLoader>
  );
};

export default StatisticsContainer;
