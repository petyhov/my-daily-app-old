import { createReducer } from '@reduxjs/toolkit';

const initalState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
};

const reducer = createReducer(initalState, {});

export default reducer;
