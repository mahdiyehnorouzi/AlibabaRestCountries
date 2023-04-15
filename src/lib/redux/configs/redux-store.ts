// * Import Tools
import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";

// * Import Redux Slices
import { countriesReduxSlice } from "../../../stores/countries/redux/countries-redux-slice";

export const reduxStore = configureStore({
    reducer: {
        countries: countriesReduxSlice.reducer
    },
    middleware: [reduxLogger],
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
