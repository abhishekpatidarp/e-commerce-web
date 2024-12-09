import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        isLoggedIn: false,
    },
    reducers: {
        signup: (state, action) => {
            state.user = action.payload;
            const convertedUser = JSON.stringify(state.user);
            localStorage.setItem("user", convertedUser);
        },

        login: (state, action) => {
            const covertedLoggedIn = JSON.stringify(state.isLoggedIn);
            localStorage.setItem("isLoggedIn",covertedLoggedIn )
            state.isLoggedIn = true;
        }
    }
})

export const {signup, login} = authSlice.actions;
export default authSlice.reducer;