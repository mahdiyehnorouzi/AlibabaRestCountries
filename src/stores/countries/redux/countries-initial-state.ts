// * Import Types
import { ICountriesRedux } from "./countries.type";


export const COUNTRIES_REDUX_INITIAL_STATE: ICountriesRedux = {
    chosenItem:null,
    items:[],
    query:'',
    filter:''
};
