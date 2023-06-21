import PropTypes from 'prop-types';

import { MobileKeyboard, DesktopKeyboard } from '@/components';

const Keyboard = ({
  isMobileKeyboard,
  secretValue,
  clickHandler,
  removeValueHandler,
  checkAnswer,
}) => {
  return (
    <>
      {isMobileKeyboard ? (
        <MobileKeyboard
          secretValue={secretValue}
          clickHandler={clickHandler}
          removeValueHandler={removeValueHandler}
          checkAnswer={checkAnswer}
        />
      ) : (
        <DesktopKeyboard
          secretValue={secretValue}
          clickHandler={clickHandler}
          removeValueHandler={removeValueHandler}
          checkAnswer={checkAnswer}
        />
      )}
    </>
  );
};

Keyboard.propTypes = {
  isMobileKeyboard: PropTypes.bool,
  secretValue: PropTypes.string,
  clickHandler: PropTypes.func,
  removeValueHandler: PropTypes.func,
  checkAnswer: PropTypes.func,
};

export default Keyboard;
