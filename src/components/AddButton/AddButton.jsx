import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const AddButton = ({ btnAction }) => {
  return (
    <button className={styles.addButton} onClick={btnAction}>
      <i className="fa-solid fa-plus"></i>
    </button>
  );
};

AddButton.propTypes = {
  modalHandler: PropTypes.func.isRequired,
};

export default AddButton;
