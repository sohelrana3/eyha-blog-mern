"use client";

import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState: {
        loginUser: localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : null,
    },
    reducers: {
        logUser: (state, actions) => {
            console.log("ami slice");
            state.loginUser = actions.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { logUser } = userSlice.actions;

export default userSlice.reducer;
