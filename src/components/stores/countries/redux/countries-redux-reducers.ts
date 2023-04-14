// * Import Types
import { PayloadAction } from '@reduxjs/toolkit';
import { ICountriesRedux, Region } from "./countries.type";
import { ICountryDTO } from '../../../dtos/country.dto';


const updateItems = (state: ICountriesRedux,
    { payload }: PayloadAction<ICountryDTO[]>,) => {
        state.items = payload;
}

const updateChosenItem = (state: ICountriesRedux, { payload }: PayloadAction<ICountryDTO | null>) => {
    state.chosenItem = payload;
}

const updateQuery =  (state: ICountriesRedux, { payload }: PayloadAction<string>) => {
    state.query = payload;
}
const updateRegion =  (state: ICountriesRedux, { payload }: PayloadAction<Region>) => {
    state.filter = payload;
}

export const countriesReduxReducers = {
    updateItems,
    updateChosenItem,
    updateQuery,
    updateRegion
};
