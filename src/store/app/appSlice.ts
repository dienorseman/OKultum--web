import { createSlice } from "@reduxjs/toolkit";



export interface AppState {
    loading: boolean,
    baseApiUrl: string,
}

const intialAppState: AppState = {
    loading: false,
    baseApiUrl: 'https://0451da749114.ngrok-free.app'
}

export const appSlice = createSlice({
    name: "app",
    initialState: intialAppState,
    reducers: {
        switchLoading: (state) => {
                state.loading = !state.loading
            }
        }   
})

export const {switchLoading} = appSlice.actions;

export default appSlice.reducer;