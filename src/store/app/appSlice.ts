import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Password } from "../../app/models/password";



export interface AppState {
    loading: boolean,
    baseApiUrl: string,
    passwords: Password[]
    error: string | null
}

const intialAppState: AppState = {
    loading: false,
    baseApiUrl: 'https://0451da749114.ngrok-free.app',
    passwords: [],
    error: null
}

export const appSlice = createSlice({
    name: "app",
    initialState: intialAppState,
    reducers: {
        switchLoading: (state) => {
            state.loading = !state.loading
        },
        setPasswords: (state, action: PayloadAction<Password[]>) => {
            state.passwords = action.payload;
            state.loading = false;
        }
    },
})

export const { switchLoading, setPasswords } = appSlice.actions;

export default appSlice.reducer;