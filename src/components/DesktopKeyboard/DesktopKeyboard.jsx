import Image from 'next/image';
import PropTypes from 'prop-types';

import ArrowIcon from '@/assets/icons/arrow-right.svg';
import ClearIcon from '@/assets/icons/clear.svg';

import styles from './styles.module.scss';

const DesktopView = ({
  value,
  clickHandler,
  removeValueHandler,
  nextHandler,
}) => {
  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.row}>
        <button value={1}>1</button>
        <button value={2}>2</button>
        <button value={3}>3</button>
        <button value={4}>4</button>
        <button value={5}>5</button>
      </div>
      <div className={styles.row}>
        <button value={6}>6</button>
        <button value={7}>7</button>
        <button value={8}>8</button>
        <button value={9}>9</button>
        <button value={0}>0</button>
      </div>
      <div className={styles.row}>
        <button className={styles.clearBtn} onClick={removeValueHandler}>
          <Image width={32} height={32} src={ClearIcon.src} alt="Clear Icon" />
        </button>
        <button
          className={styles.nextBtn}
          onClick={nextHandler}
          disabled={value.length > 0 ? false : true}
        >
          <Image
            width={ArrowIcon.width}
            height={ArrowIcon.height}
            src={ArrowIcon.src}
            alt="next"
          />
        </button>
      </div>
    </div>
  );
};

DesktopView.propTypes = {
  value: PropTypes.string,
  clickHandler: PropTypes.func,
  removeValueHandler: PropTypes.func,
  nextHandler: PropTypes.func,
};

export default DesktopView;
