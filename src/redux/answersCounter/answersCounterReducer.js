import { createReducer } from '@reduxjs/toolkit';

const initState = {
  corectAnswerCount: 0,
  wrongAnswerCount: 0,
};

const counter = createReducer(initState, {});

export default counter;
