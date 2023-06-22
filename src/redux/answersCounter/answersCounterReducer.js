import { createReducer } from '@reduxjs/toolkit';

import answersCounterAction from './answersCounterAction';

const initState = {
  correctAnswerCount: 0,
  wrongAnswerCount: 0,
};

const reducer = createReducer(initState, {
  [answersCounterAction.increaseCorrectAnswer]: (state) => {
    return { ...state, correctAnswerCount: state.correctAnswerCount + 1 };
  },
  [answersCounterAction.increaseWrongAnswer]: (state) => {
    return { ...state, wrongAnswerCount: state.wrongAnswerCount + 1 };
  },
});

export default reducer;
