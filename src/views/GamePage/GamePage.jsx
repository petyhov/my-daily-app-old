import PropTypes from 'prop-types';

import { SimpleTask, TaskResult } from '@/components';
import { AnswersCounter, Keyboard } from '@/composes';

import styles from './styles.module.scss';

const GamePage = ({
  showAnswerModal,
  isCorectAnswer,
  closeHandler,
  allMathTasks,
  currentTuskNumber,
  secretItem,
  userValue,
  userValueHandler,
  removeUserValueHandler,
  checkAnswerHandler,
}) => {
  const rightAnswer = allMathTasks[currentTuskNumber];

  return (
    <div className={styles.container}>
      {showAnswerModal && rightAnswer ? (
        <TaskResult
          isCorectAnswer={isCorectAnswer}
          task={rightAnswer}
          closeHandler={closeHandler}
        />
      ) : (
        <>
          <AnswersCounter />
          <SimpleTask
            task={rightAnswer}
            secretItem={secretItem}
            secretValue={userValue}
          />
          <Keyboard
            value={userValue}
            valueHandler={userValueHandler}
            removeValueHandler={removeUserValueHandler}
            nextHandler={checkAnswerHandler}
          />
        </>
      )}
    </div>
  );
};

GamePage.propTypes = {
  showAnswerModal: PropTypes.bool.isRequired,
  isCorectAnswer: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  allMathTasks: PropTypes.array.isRequired,
  currentTuskNumber: PropTypes.number,
  secretItem: PropTypes.string.isRequired,
  userValue: PropTypes.string.isRequired,
  userValueHandler: PropTypes.func.isRequired,
  removeUserValueHandler: PropTypes.func.isRequired,
  checkAnswerHandler: PropTypes.func.isRequired,
};

export default GamePage;
