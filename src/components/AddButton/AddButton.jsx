import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const AddButton = ({ modalHandler }) => {
  return (
    <button className={styles.addButton} onClick={modalHandler}>
      <i className="fa-solid fa-plus"></i>
    </button>
  );
};

AddButton.propTypes = {
  modalHandler: PropTypes.func.isRequired,
};

export default AddButton;
