import { useDispatch, useSelector } from 'react-redux';

import { appConfigAction, isShowSidebar } from '@/redux';

import BurgerBtn from './BurgerBtn';

const BurgerBtnContainer = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => isShowSidebar(state));

  const burgerHandler = () => {
    dispatch(appConfigAction.setShowSidebar(!isShow));
  };

  return <BurgerBtn handler={burgerHandler} />;
};

export default BurgerBtnContainer;
