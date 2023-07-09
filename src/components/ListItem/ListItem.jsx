import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const ListItem = ({ item }) => {
  const checkCell = (cell) => {
    if (cell.type === 'date') {
      const fullDate = new Date(cell.value).toLocaleString('uk-UA');
      const days = fullDate.split(' ')[0].slice(0, 5);
      const time = fullDate.split(' ')[1];
      return (
        <td className={styles.date} key={cell.value}>
          <p>{time}</p>
          <p>{days}</p>
        </td>
      );
    }
    return <td key={cell.value}>{cell.value}</td>;
  };

  const checkColor = (status) => {
    return status ? styles.green : styles.red;
  };

  return (
    <tr className={`${styles.row} ${checkColor(item.colorStatus)}`}>
      {item.values.map((cell) => checkCell(cell))}
    </tr>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    colorStatus: PropTypes.bool.isRequired,
    values: PropTypes.array.isRequired,
  }),
};

export default ListItem;
