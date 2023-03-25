import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModeState {
    darkMode: string;
}

const initialState: ModeState = {
    darkMode: 'light',
}

export const modeStateSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggle: (state, action: PayloadAction<string>) => {
            state.darkMode = action.payload;
        },
    },
});

export const { toggle } = modeStateSlice.actions;

export default modeStateSlice.reducer;