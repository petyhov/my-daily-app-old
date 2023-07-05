import PropTypes from 'prop-types';

import StatisticsList from '@/components/StatisticsList';

import styles from './styles.module.scss';

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

StatisticsPage.propTypes = {
  list: PropTypes.array.isRequired,
};

export default StatisticsPage;
