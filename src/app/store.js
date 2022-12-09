import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/user.slice';
import weightReducer from '../features/weight/weight.slice';

export default configureStore({
  reducer: {
    user: userReducer,
    weight: weightReducer,
  },
});
