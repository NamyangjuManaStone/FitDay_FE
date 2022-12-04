import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weightList: [],
};

export const weightSlice = createSlice({
  name: 'weight',
  initialState,
  reducers: {
    오호수몸무게추가: (state, action) => {
      state.weightList.push(action.payload);
    },
  },
});

export const { 오호수몸무게추가 } = weightSlice.actions;

export default weightSlice.reducer;
