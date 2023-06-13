import { GameDashboard } from '@/composes';

import styles from './styles.module.scss';

const GamePage = (props) => {
  const { mathTasks } = props;

  return (
    <div className={styles.container}>
      <>{mathTasks?.length > 0 && <GameDashboard {...props} />}</>
    </div>
  );
};

export default GamePage;
