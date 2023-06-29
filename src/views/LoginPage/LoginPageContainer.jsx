import { usersData } from '@/data';

import LoginPage from './LoginPage';
import { useState } from 'react';

const LoginPageContainer = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  console.log(setShowKeyboard);
  return <LoginPage usersData={usersData} showKeyboard={showKeyboard} />;
};

export default LoginPageContainer;
