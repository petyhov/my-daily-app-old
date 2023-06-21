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
            secretValue={userValue}
            secretValueHandler={userValueHandler}
            removeValueHandler={removeUserValueHandler}
            checkAnswer={checkAnswerHandler}
          />
        </>
      )}
    </div>
  );
};

export default GamePage;
