import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TimerState = {
  time: number;
  status: string;
};

const initialState: TimerState = {
  time: 0,
  status: 'test'
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer(state, action: PayloadAction<number>) {
      state.time = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    }
  }
});

export default timerSlice.reducer;
export const timerActions = timerSlice.actions;
