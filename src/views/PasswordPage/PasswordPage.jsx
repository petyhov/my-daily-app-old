import { PasswordHolder } from '@/components';
import { Keyboard } from '@/composes';

const PasswordPage = ({
  userPassword,
  passwordHandler,
  removePasswordHandler,
  hidePassword,
  checkPassword,
}) => {
  return (
    <>
      <PasswordHolder password={hidePassword()} />
      <Keyboard
        value={userPassword}
        valueHandler={passwordHandler}
        removeValueHandler={removePasswordHandler}
        nextHandler={checkPassword}
      />
    </>
  );
};

export default PasswordPage;
