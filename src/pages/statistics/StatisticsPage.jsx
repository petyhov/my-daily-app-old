import styles from './styles.module.scss';
import StatisticsList from '@/components/StatisticsList';

const StatisticsPage = ({ list }) => {
  return (
    <div className={styles.container}>
      {!!list.length ? (
        <StatisticsList list={list} />
      ) : (
        <p className={styles.emptyData}>Дані відстні</p>
      )}
    </div>
  );
};

export default StatisticsPage;
