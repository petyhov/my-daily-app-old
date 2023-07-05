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
  passwordHandler: PropTypes.string.isRequired,
  removePasswordHandler: PropTypes.string.isRequired,
  hidePassword: PropTypes.string.isRequired,
  checkPassword: PropTypes.string.isRequired,
};

export default PasswordPage;
