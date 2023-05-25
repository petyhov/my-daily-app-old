import BurgerBtn from '@/components/BurgerBtn';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <p>MyDailyApp</p>
      <BurgerBtn />
    </header>
  );
};

export default Header;
