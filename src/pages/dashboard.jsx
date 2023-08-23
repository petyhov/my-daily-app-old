import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { getUserData } from '@/redux';
import { RoutesList } from '@/components';

import styles from '@/styles/dashboard.module.scss';

const DashboardPage = () => {
  const userData = useSelector((state) => getUserData(state));

  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes(userData.permissions);
  }, [userData]);

  return (
    <div className={styles.container}>
      {routes && (
        <RoutesList
          items={routes}
          listStyles={styles.routesList}
          itemStyles={styles.listItem}
          btnStyles={styles.routeBtn}
        />
      )}
    </div>
  );
};

export default DashboardPage;
