import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const AddButton = ({ handler }) => {
  return (
    <button className={styles.addButton} onClick={handler}>
      <i className="fa-solid fa-plus"></i>
    </button>
  );
};

AddButton.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default AddButton;
