import { useSelector } from 'react-redux';

import Keyboard from './Keyboard';
import { memo } from 'react';

const KeyboardContainer = (props) => {
  const deviceWidth = useSelector((state) => state.appConfig.deviceWidth);
  const { secretValueHandler } = props;
  const clickHandler = (e) => {
    const value = e.target.value;
    if (value) {
      secretValueHandler(value);
    }
  };
  return (
    <Keyboard
      {...props}
      deviceWidth={deviceWidth}
      clickHandler={clickHandler}
    />
  );
};

export default memo(KeyboardContainer);
