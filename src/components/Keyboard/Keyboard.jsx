import MobileView from './MobileView';
import DesktopView from './DesktopView';

const Keyboard = ({
  deviceWidth,
  secretValue,
  clickHandler,
  removeValueHandler,
  checkAnswer,
}) => {
  return (
    <>
      {deviceWidth < 500 ? (
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

export default Keyboard;
