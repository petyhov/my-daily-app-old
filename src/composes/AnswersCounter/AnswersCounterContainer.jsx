import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAnswersCounterData, answersCounterActions } from '@/redux';

import AnswersCount from './AnswersCounter';

const AnswersCountContainer = () => {
  const [showClearModal, setShowClearModal] = useState(false);
  const { correctAnswerCount, wrongAnswerCount } = useSelector(
    getAnswersCounterData
  );

  const dispatch = useDispatch();

  const modalHandler = () => {
    setShowClearModal(!showClearModal);
  };

  const confirmModalAction = () => {
    dispatch(answersCounterActions.clearAnswersCounter());
    modalHandler();
  };

  return (
    <AnswersCount
      correctAnswerCount={correctAnswerCount}
      wrongAnswerCount={wrongAnswerCount}
      showClearModal={showClearModal}
      modalHandler={modalHandler}
      confirmModalAction={confirmModalAction}
    />
  );
};

export default AnswersCountContainer;
