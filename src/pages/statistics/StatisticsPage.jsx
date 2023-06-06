import styles from './styles.module.scss';
import StatisticsList from '@/components/StatisticsList';

const StatisticsPage = ({ list }) => {
  return (
    <div className={styles.container}>
      <StatisticsList list={list} />
    </div>
  );
};

export default StatisticsPage;
