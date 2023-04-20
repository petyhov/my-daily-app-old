import { useEffect, useState } from 'react';
import { GameDashboard } from '@/components';
import { fetchMathTasks } from '@/utils';

import styles from '@/styles/gamePage.module.scss';

const GamePage = ({ pageWidth }) => {
  const [mathTasks, setMathTasks] = useState([]);

  useEffect(() => {
    fetchMathTasks().then((data) => {
      if (data) {
        setMathTasks(data);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <>
        {mathTasks.length > 0 && (
          <GameDashboard pageWidth={pageWidth} mathTasks={mathTasks} />
        )}
      </>
    </div>
  );
};

export default GamePage;
