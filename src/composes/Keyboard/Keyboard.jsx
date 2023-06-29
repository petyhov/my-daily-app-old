import PropTypes from 'prop-types';

import { MobileKeyboard, DesktopKeyboard } from '@/components';

const Keyboard = ({
  isMobileKeyboard,
  value,
  clickHandler,
  removeValueHandler,
  nextHandler,
}) => {
  return (
    <>
      {isMobileKeyboard ? (
        <MobileKeyboard
          value={value}
          clickHandler={clickHandler}
          removeValueHandler={removeValueHandler}
          nextHandler={nextHandler}
        />
      ) : (
        <DesktopKeyboard
          value={value}
          clickHandler={clickHandler}
          removeValueHandler={removeValueHandler}
          nextHandler={nextHandler}
        />
      )}
    </>
  );
};

Keyboard.propTypes = {
  isMobileKeyboard: PropTypes.bool,
  value: PropTypes.string,
  clickHandler: PropTypes.func,
  removeValueHandler: PropTypes.func,
  nextHandler: PropTypes.func,
};

export default Keyboard;
