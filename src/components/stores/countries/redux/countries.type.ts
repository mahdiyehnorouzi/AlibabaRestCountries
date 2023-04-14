import { ICountryDTO } from "../../../dtos/country.dto";

export type Region = '' | 'Europe' | 'Americas' | 'Africa' | 'Oceania' | 'Asia';

export interface ICountriesRedux {
    items: ICountryDTO[];
    chosenItem:ICountryDTO | null;
    query:string;
    filter :Region;
}