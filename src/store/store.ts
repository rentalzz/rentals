import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

// Import your base API service
import {baseApi} from './services/baseApi';

// Import your slices here (when you create them)
// import authSlice from './slices/authSlice';

// Root reducer (combine all slices)
const rootReducer = {
  // Add your slices here
  // auth: authSlice,

  // RTK Query API
  [baseApi.reducerPath]: baseApi.reducer,
};

// Create the store
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  devTools: __DEV__,
});

// Setup listeners for RTK Query
setupListeners(store.dispatch);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
