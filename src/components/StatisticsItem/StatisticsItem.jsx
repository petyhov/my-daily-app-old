import styles from './styles.module.scss';

const StatisticsItem = ({ item }) => {
  const { secretTask, checkAnswer, date, secretValue } = item;

  const days = date.split(' ')[0].slice(0, 5);
  const time = date.split(' ')[1];

  return (
    <tr
      className={`${styles.row} ${checkAnswer ? styles.right : styles.wrong}`}
    >
      <td className={styles.date}>
        <p>{time}</p>
        <p>{days}</p>
      </td>
      <td className={`${styles.taskCell}`}>
        <p>{secretTask}</p>
      </td>
      <td className={styles.answer}>{secretValue}</td>
    </tr>
  );
};

export default StatisticsItem;
