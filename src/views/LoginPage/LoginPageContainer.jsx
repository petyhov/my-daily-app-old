import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { usersData } from '@/data';
import { userDataAction } from '@/redux';

import LoginPage from './LoginPage';

const LoginPageContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const userHandler = (e) => {
    const userData = usersData.find((user) => user.name === e.target.value);
    dispatch(userDataAction.setUserData(userData));
    if (userData.protected) {
      return router.push('/password');
    }
    router.push('/game');
  };

  return <LoginPage usersData={usersData} userHandler={userHandler} />;
};

export default LoginPageContainer;
