import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const SideBar = ({ isShow }) => {
  return (
    <div className={`${styles.container} ${isShow && styles.active}`}>
      <Link href="/game" className={styles.link}>
        Гра
      </Link>
      <Link href="/statistics" className={styles.link}>
        Статистика
      </Link>
    </div>
  );
};

SideBar.propTypes = {
  isShow: PropTypes.bool,
};

export default SideBar;
