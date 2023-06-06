import styles from './styles.module.scss';

const StatisticsItem = ({ item }) => {
  const { first, operation, second, equal } = item.task;

  return (
    <tr className={styles.row}>
      <td className={styles.taskCell}>
        <p>
          {first}
          {operation === 'plus' ? '+' : '-'}
          {second}={equal}
        </p>
      </td>
      <td></td>
    </tr>
  );
};

export default StatisticsItem;
