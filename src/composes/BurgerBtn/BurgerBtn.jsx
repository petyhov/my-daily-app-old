import { useSelector } from 'react-redux';

import { isShowSidebar } from '@/redux';

import styles from './styles.module.scss';

const BurgerBtn = ({ handler }) => {
  const isShow = useSelector((state) => isShowSidebar(state));
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

export default BurgerBtn;
