import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { gamesConfig } from '@/configs';
import { fetchAllMathTasks, getRandom, addTaskToMongo } from '@/utils';
import { WithLoader } from '@/hocs';
import { answersCounterActions } from '@/redux';

import GamePage from './GamePage';

const secretItemsArr = ['first', 'second', 'equal'];

const GamePageContainer = () => {
  const [allMathTasks, setAllMathTasks] = useState([]);
  const [currentTuskNumber, setCurrentTuskNumber] = useState();
  const [secretItem, setSecretItem] = useState(secretItemsArr[getRandom(0, 2)]);
  const [userValue, setUserValue] = useState('');

  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [isCorectAnswer, setIsCorectAnswer] = useState(false);

  const timerId = useRef(null);
  const dispatch = useDispatch();

  const { simpleTaskTime } = gamesConfig;

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (!!allMathTasks.length) {
      return setCurrentTuskNumber(getRandom(0, allMathTasks.length - 1));
    }
  }, [allMathTasks]);

  useEffect(() => {
    if (currentTuskNumber) {
      timerId.current = setTimeout(checkAnswerHandler, simpleTaskTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTuskNumber, simpleTaskTime]);

  const fetchHandler = async () => {
    const data = await fetchAllMathTasks();
    setAllMathTasks(data);
  };

  const userValueHandler = (value) => {
    if (userValue.length < 2) {
      setUserValue(userValue + value);
    }
  };

  const removeUserValueHandler = () => {
    setUserValue(userValue.slice(0, -1));
  };

  const checkAnswerHandler = () => {
    const task = allMathTasks[currentTuskNumber];
    const rightAnswer = task[secretItem];
    const checkAnswer = rightAnswer === +userValue;
    clearTimeout(timerId.current);
    setShowAnswerModal(true);
    addTaskToMongo(task, secretItem, +userValue, checkAnswer);
    if (checkAnswer) {
      dispatch(answersCounterActions.increaseCorrectAnswer());
      return setIsCorectAnswer(true);
    }
    dispatch(answersCounterActions.increaseWrongAnswer());
    setIsCorectAnswer(false);
  };

  const closeHandler = () => {
    setCurrentTuskNumber(getRandom(0, allMathTasks.length - 1));
    setSecretItem(secretItemsArr[getRandom(0, 2)]);
    setUserValue('');
    setShowAnswerModal(false);
  };

  return (
    <WithLoader isLoading={!allMathTasks.length}>
      <GamePage
        showAnswerModal={showAnswerModal}
        isCorectAnswer={isCorectAnswer}
        closeHandler={closeHandler}
        allMathTasks={allMathTasks}
        currentTuskNumber={currentTuskNumber}
        secretItem={secretItem}
        userValue={userValue}
        userValueHandler={userValueHandler}
        removeUserValueHandler={removeUserValueHandler}
        checkAnswerHandler={checkAnswerHandler}
      />
    </WithLoader>
  );
};

export default GamePageContainer;
