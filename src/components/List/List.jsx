import PropTypes from 'prop-types';

import { ListItem } from '..';

import styles from './styles.module.scss';

const List = ({ list, headers }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.row}>
          {headers.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list?.map((item) => (
          <ListItem key={item.values[0].value} item={item} />
        ))}
      </tbody>
    </table>
  );
};

List.propTypes = {
  list: PropTypes.array,
  headers: PropTypes.array,
};

export default List;
