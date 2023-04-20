import { memo } from 'react';
import MobileView from './MobileView';
import DesktopView from './DesktopView';

const Keyboard = ({
  pageWidth,
  secretValue,
  secretValueHandler,
  removeValueHandler,
  checkAnswer,
}) => {
  const clickHandler = (e) => {
    const value = e.target.value;
    if (value) {
      secretValueHandler(value);
    }
  };

  return (
    <>
      {pageWidth && pageWidth < 500 ? (
        <MobileView
          secretValue={secretValue}
          clickHandler={clickHandler}
          removeValueHandler={removeValueHandler}
          checkAnswer={checkAnswer}
        />
      ) : (
        <DesktopView
          secretValue={secretValue}
          clickHandler={clickHandler}
          removeValueHandler={removeValueHandler}
          checkAnswer={checkAnswer}
        />
      )}
    </>
  );
};

export default memo(Keyboard);
