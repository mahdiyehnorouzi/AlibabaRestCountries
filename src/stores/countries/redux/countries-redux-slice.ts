// * Import Constants
import { COUNTRIES_REDUX_INITIAL_STATE as initialState } from './countries-initial-state';

// * Import Tools
import { createSlice } from '@reduxjs/toolkit';

// * Import Reducer
import { countriesReduxReducers as reducers } from './countries-redux-reducers';

export const countriesReduxSlice = createSlice({
    name: 'countries',
    initialState,
    reducers,
});

export const countriesReduxActions = countriesReduxSlice.actions;
