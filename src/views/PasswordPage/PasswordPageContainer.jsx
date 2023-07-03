import { useDispatch, useSelector } from 'react-redux';

import { getUserPassword, appConfigAction, getUserData } from '@/redux';
import { postPassword } from '@/utils';

import PasswordPage from './PasswordPage';

const PasswordPageContainer = () => {
  const userPassword = useSelector(getUserPassword);
  const userData = useSelector(getUserData);

  const dispatch = useDispatch();

  const passwordHandler = (value) => {
    if (userPassword.length < 4) {
      dispatch(appConfigAction.setUserPassword(userPassword + value));
    }
  };

  const removePasswordHandler = () => {
    dispatch(appConfigAction.setUserPassword(userPassword.slice(0, -1)));
  };

  const checkPassword = () => {
    postPassword(userPassword, userData.name);
  };

  const hidePassword = () => {
    return userPassword
      .split('')
      .map((number) => {
        console.log('number', number);
        return '*';
      })
      .concat();
  };

  return (
    <PasswordPage
      userPassword={userPassword}
      passwordHandler={passwordHandler}
      removePasswordHandler={removePasswordHandler}
      hidePassword={hidePassword}
      checkPassword={checkPassword}
    />
  );
};

export default PasswordPageContainer;
