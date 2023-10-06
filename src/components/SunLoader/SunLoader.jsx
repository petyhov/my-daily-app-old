import Image from 'next/image';
import PropTypes from 'prop-types';

import sun1 from '@/assets/icons/sun1.svg';

import styles from './styles.module.scss';

const SunLoader = ({ width = 200, height = 200 }) => {
  return (
    <div className={styles.container}>
      <Image src={sun1.src} width={width} height={height} alt="spinner" />
    </div>
  );
};

SunLoader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default SunLoader;
