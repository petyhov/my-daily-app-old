import { BurgerBtn } from '@/composes';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <p>{process.env.DEV_BUILD ? 'DevMyDailyApp' : 'MyDailyApp'}</p>
      <BurgerBtn />
    </header>
  );
};

export default Header;
