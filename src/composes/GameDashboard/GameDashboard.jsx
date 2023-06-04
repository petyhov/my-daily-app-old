import { useState, useEffect, useRef } from 'react';
import { Keyboard, SimpleTask, AnswersCount, TaskResult } from '@/components';
import { addTaskToMongo } from '@/utils/taskOperations';
import { gamesConfig } from '@/configs';

import { getRandom } from '@/utils';

const secretItemsArr = ['first', 'second', 'equal'];

const GameDashboard = ({ mathTasks }) => {
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
  const timerId = useRef(null);

  const { simpleTaskTime } = gamesConfig;

  useEffect(() => {
    if (tuskNumber) {
      timerId.current = setTimeout(checkAnswer, simpleTaskTime);
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
    clearTimeout(timerId.current);
    addTaskToMongo(task, +secretValue, rightAnswer, checkAnswer);
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
        <TaskResult
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
