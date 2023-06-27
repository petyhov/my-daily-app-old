import { usersData } from '@/data';

import LoginPage from './LoginPage';

const LoginPageContainer = () => {
  return <LoginPage usersData={usersData} />;
};

export default LoginPageContainer;
