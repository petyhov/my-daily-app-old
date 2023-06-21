import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const BurgerBtn = ({ handler, isShow }) => {
  return (
    <button
      className={`${styles.burger} ${isShow && styles.active}`}
      onClick={handler}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

BurgerBtn.propTypes = {
  handler: PropTypes.func,
  isShow: PropTypes.bool,
};

export default BurgerBtn;
