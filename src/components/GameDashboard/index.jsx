import { useState, useEffect } from 'react';
import { Keyboard, SimpleTask, AnswersCount, AnswerModal } from '@/components';
// import { addTaskToMongo } from '@/utils/taskOperations';

import { getRandom } from '@/utils';

const secretItemsArr = ['first', 'second', 'equal'];

const GameDashboard = ({ pageWidth, mathTasks }) => {
  const [tuskNumber, setTuskNumber] = useState(
    getRandom(0, mathTasks.length - 1)
  );
  const [secretItem, setSecretItem] = useState(secretItemsArr[getRandom(0, 2)]);
  const [secretValue, setSecretValue] = useState('');
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [isCorectAnswer, setIsCorectAnswer] = useState(false);
  const [rightAnswer, setRightAnswer] = useState();
  const [corectAnswerCount, setCorectAnswerCount] = useState(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);

  const [timerId, setTimerId] = useState();

  useEffect(() => {
    if (tuskNumber) {
      const timer = setTimeout(checkAnswer, 20000);
      setTimerId(timer);
    }
  }, [tuskNumber]);

  const secretValueHandler = (value) => {
    if (secretValue.length < 2) {
      setSecretValue(secretValue + value);
    }
  };

  const removeValueHandler = () => {
    setSecretValue(secretValue.slice(0, -1));
  };

  const checkAnswer = () => {
    const task = mathTasks[tuskNumber];
    const rightAnswer = task[secretItem];
    const checkAnswer = rightAnswer === +secretValue;
    setRightAnswer(task);
    setShowAnswerModal(true);
    clearTimeout(timerId);
    // addTaskToMongo(task, rightAnswer, checkAnswer);
    if (checkAnswer) {
      setIsCorectAnswer(true);
      return setCorectAnswerCount(corectAnswerCount + 1);
    }

    setIsCorectAnswer(false);
    setWrongAnswerCount(wrongAnswerCount + 1);
  };

  const closeHandler = () => {
    setTuskNumber(getRandom(0, mathTasks.length - 1));
    setSecretItem(secretItemsArr[getRandom(0, 2)]);
    setSecretValue('');
    setShowAnswerModal(false);
  };

  return (
    <>
      {showAnswerModal && rightAnswer ? (
        <AnswerModal
          isCorectAnswer={isCorectAnswer}
          task={rightAnswer}
          closeHandler={closeHandler}
        />
      ) : (
        <>
          <AnswersCount
            corectAnswerCount={corectAnswerCount}
            wrongAnswerCount={wrongAnswerCount}
          />
          <SimpleTask
            task={mathTasks[tuskNumber]}
            secretItem={secretItem}
            secretValue={secretValue}
          />
          <Keyboard
            pageWidth={pageWidth}
            secretValue={secretValue}
            secretValueHandler={secretValueHandler}
            removeValueHandler={removeValueHandler}
            checkAnswer={checkAnswer}
          />
        </>
      )}
    </>
  );
};

export default GameDashboard;
