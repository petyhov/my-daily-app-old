import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { usersData } from '@/data';
import { userDataAction, appConfigAction } from '@/redux';
import { routes } from '@/configs';

import LoginPage from './LoginPage';

const LoginPageContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const userHandler = (e) => {
    const userData = usersData.find((user) => user.name === e.target.value);
    dispatch(userDataAction.setUserData(userData));

    if (userData.protected) {
      return router.push(routes.password);
    }
    dispatch(appConfigAction.setLoggedIn(true));
    router.push(routes.game);
  };

  return <LoginPage usersData={usersData} userHandler={userHandler} />;
};

export default LoginPageContainer;
