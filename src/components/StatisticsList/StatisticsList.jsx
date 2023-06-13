import styles from './styles.module.scss';
import { StatisticsItem } from '../';

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

export default StatisticsList;
