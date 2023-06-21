import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const SideBar = ({ isShow, route }) => {
  return (
    <div className={`${styles.container} ${isShow && styles.active}`}>
      <Link
        href="/game"
        className={`${styles.link} ${route === '/game' ? styles.active : ''}`}
      >
        Гра
      </Link>
      <Link
        href="/statistics"
        className={`${styles.link} ${
          route === '/statistics' ? styles.active : ''
        }`}
      >
        Статистика
      </Link>
    </div>
  );
};

SideBar.propTypes = {
  isShow: PropTypes.bool,
  route: PropTypes.string,
};

export default SideBar;
