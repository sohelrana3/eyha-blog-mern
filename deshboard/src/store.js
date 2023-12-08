import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./Slice/user/userSlice";

export const store = configureStore({
    reducer: {
        logUser: userSlice,
    },
});
