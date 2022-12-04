import { configureStore } from '@reduxjs/toolkit';

import weightReducer from '../features/weight/weightSlice';

export default configureStore({
  reducer: { weight: weightReducer },
});
