import PropTypes from 'prop-types';

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

PasswordPage.propTypes = {
  userPassword: PropTypes.string.isRequired,
  passwordHandler: PropTypes.func.isRequired,
  removePasswordHandler: PropTypes.func.isRequired,
  hidePassword: PropTypes.func.isRequired,
  checkPassword: PropTypes.func.isRequired,
};

export default PasswordPage;
