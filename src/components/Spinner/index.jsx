import Image from 'next/image';

import styles from './styles.module.scss';

import sun1 from '@/assets/icons/sun1.svg';

const Spinner = () => {
  return (
    <>
      <div className={styles.container}>
        <Image src={sun1.src} width={200} height={200} alt="spinner" />
      </div>
    </>
  );
};

export default Spinner;
