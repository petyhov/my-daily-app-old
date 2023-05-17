import { useEffect } from 'react';

import { fetchTasks } from '@/utils/taskOperations';

const StatisticsPage = () => {
  useEffect(() => {
    fetchTasks();
  }, []);

  return <div>Statistic page</div>;
};

export default StatisticsPage;
