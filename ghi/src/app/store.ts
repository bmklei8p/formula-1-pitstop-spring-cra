import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { standingsApi } from '../features/standings/StandingsAPI';
import modeStateReducer from '../features/ModeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [standingsApi.reducerPath]: standingsApi.reducer,
    mode: modeStateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(standingsApi.middleware),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
