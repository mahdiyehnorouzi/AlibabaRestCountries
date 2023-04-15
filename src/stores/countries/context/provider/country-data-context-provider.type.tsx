import { ReactNode } from 'react';
import { ICountryDTO } from '../../../../dtos/country.dto';

export interface ICountryDataContextProvider {
    data: ICountryDTO;
    children: ReactNode;
};
