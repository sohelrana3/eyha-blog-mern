import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/lib/userSlice";

const store = configureStore({
    reducer: {
        logUser: userReducer,
    },
});

export default store;
