import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const WalletValueControls = ({ value, increaseHandler, decreaseHandler }) => {
  return (
    <div className={styles.container}>
      {value.map((number, index) => (
        <div key={index} className={styles.itemContainer}>
          <button data-index-number={index} onClick={increaseHandler}>
            <i className="fa-solid fa-caret-up"></i>
          </button>
          <p className={styles.item}>{number}</p>
          <button data-index-number={index} onClick={decreaseHandler}>
            <i value={index} className="fa-solid fa-caret-down"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

WalletValueControls.propTypes = {
  value: PropTypes.array.isRequired,
  increaseHandler: PropTypes.func.isRequired,
  decreaseHandler: PropTypes.func.isRequired,
};

export default WalletValueControls;
