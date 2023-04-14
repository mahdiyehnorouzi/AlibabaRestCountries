// * Import Types
import { RootState } from '../../../lib/redux/configs/redux-store';


// * Import Tools
import { createSelector } from '@reduxjs/toolkit';

const selectState = (state: RootState) => {
    return state.countries;
};

const selectChosenItem = createSelector(
    selectState,
    (state) => state.chosenItem
);

const selectItems = createSelector(
    selectState,
    (state) => state.items
);

const selectQuery = createSelector(
    selectState,
    (state) => state.query
);


const selectFilter = createSelector(
    selectState,
    (state) => state.filter
);



export const countriesReduxSelectors = {
   selectChosenItem,
   selectItems,
   selectQuery,
   selectFilter
};