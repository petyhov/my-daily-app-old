import PropTypes from 'prop-types';

import { List } from '@/components';

import styles from './styles.module.scss';

const StatisticsPage = ({ list, tableHeaders }) => {
  return (
    <div className={styles.container}>
      {!!list.length ? (
        <List list={list} headers={tableHeaders} />
      ) : (
        <p className={styles.emptyData}>Дані відстні</p>
      )}
    </div>
  );
};

StatisticsPage.propTypes = {
  list: PropTypes.array.isRequired,
  tableHeaders: PropTypes.array.isRequired,
};

export default StatisticsPage;
