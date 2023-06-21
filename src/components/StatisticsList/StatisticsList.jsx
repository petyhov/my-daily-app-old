import PropTypes from 'prop-types';

import { StatisticsItem } from '../';

import styles from './styles.module.scss';

const StatisticsList = ({ list }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.row}>
          <th>Дата</th>
          <th>Приклад</th>
          <th>Результат</th>
        </tr>
      </thead>
      <tbody>
        {list?.map((item) => (
          <StatisticsItem key={item._id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

StatisticsList.propTypes = {
  list: PropTypes.array,
};

export default StatisticsList;
