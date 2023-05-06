// import Image from 'next/image';

import styles from './styles.module.scss';

// import MenuIcon from '@/assets/icons/menu.svg';

const Header = () => (
  <header className={styles.container}>
    <p>MyDailyApp</p>
    {/* <button>
      <Image src={MenuIcon} alt="menu" />
    </button> */}
  </header>
);

export default Header;
