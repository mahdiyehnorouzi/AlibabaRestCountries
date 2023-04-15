import { ICountryDTO } from "../dtos/country.dto";

export interface ICountries {
    findAll(): Promise<ICountryDTO[]>;
    findByName(name:string): Promise<ICountryDTO>;
};