import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const StatisticsItem = ({ item }) => {
  const { secretTask, checkAnswer, date, secretValue } = item;

  const fullDate = new Date(date).toLocaleString('uk-UA');
  const days = fullDate.split(' ')[0].slice(0, 5);
  const time = fullDate.split(' ')[1];

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

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    secretTask: PropTypes.string,
    checkAnswer: PropTypes.bool,
    date: PropTypes.number,
    secretValue: PropTypes.number,
  }),
};

export default StatisticsItem;
