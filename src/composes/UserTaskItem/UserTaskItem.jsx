import PropTypes from 'prop-types';

import { Spinner, Checkbox } from '@/components';
import { apiStatusConstants } from '@/configs';

import styles from './styles.module.scss';

const UserTaskItem = ({ item, taskHandler }) => {
  const { title, isDone } = item;

  const actionHandler = () => {
    return taskHandler(item);
  };

  return (
    <li className={styles.item} onClick={actionHandler}>
      <h3>{title}</h3>
      <div className={styles.statusHolder}>
        {isDone === apiStatusConstants.pending ? (
          <Spinner size={35} />
        ) : (
          <Checkbox size={35} checked={isDone} />
        )}
      </div>
    </li>
  );
};

UserTaskItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
  taskHandler: PropTypes.func.isRequired,
};

export default UserTaskItem;
