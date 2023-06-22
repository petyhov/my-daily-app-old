import { createAction } from '@reduxjs/toolkit';

import answersCounterTypes from './answersCounterTypes';

const actions = {
  increaseCorrectAnswer: createAction(
    answersCounterTypes.increaseCorrectAnswer
  ),
  increaseWrongAnswer: createAction(answersCounterTypes.increaseWrongAnswer),
};

export default actions;
