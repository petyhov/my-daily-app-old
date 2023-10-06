import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Checkbox = ({ size = 20, checked = false }) => {
  return (
    <div
      style={{ width: size, height: size, fontSize: size }}
      className={styles.container}
    >
      {checked && <i className="fa-solid fa-check"></i>}
    </div>
  );
};

Checkbox.propTypes = {
  size: PropTypes.number,
  checked: PropTypes.bool,
};

export default Checkbox;
