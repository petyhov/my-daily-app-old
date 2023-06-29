import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Keyboard from './Keyboard';
import { memo } from 'react';

const KeyboardContainer = ({
  value,
  valueHandler,
  removeValueHandler,
  nextHandler,
}) => {
  const deviceWidth = useSelector((state) => state.appConfig.deviceWidth);

  const clickHandler = (e) => {
    const value = e.target.value;
    if (value) {
      valueHandler(value);
    }
  };

  return (
    <Keyboard
      isMobileKeyboard={deviceWidth < 500}
      value={value}
      clickHandler={clickHandler}
      removeValueHandler={removeValueHandler}
      nextHandler={nextHandler}
    />
  );
};

KeyboardContainer.propTypes = {
  value: PropTypes.string,
  valueHandler: PropTypes.func,
  removeValueHandler: PropTypes.func,
  nextHandler: PropTypes.func,
};

export default memo(KeyboardContainer);
