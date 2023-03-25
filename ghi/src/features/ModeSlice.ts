import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaletteMode } from "@mui/material";

export interface ModeState {
    darkMode: PaletteMode;
}

const initialState: ModeState = {
    darkMode: 'light',
}

export const modeStateSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggle: (state, action: PayloadAction<PaletteMode>) => {
            state.darkMode = action.payload;
        },
    },
});

export const { toggle } = modeStateSlice.actions;

export default modeStateSlice.reducer;