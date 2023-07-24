// import { DashboardList } from '@/components';

import { useSelector } from 'react-redux';
import { getUserRoutes } from '@/redux';

const DashboardPageContainer = () => {
  const data = useSelector((state) => getUserRoutes(state));
  console.log(data);
  return <p>DashboardList</p>;
};

export default DashboardPageContainer;
