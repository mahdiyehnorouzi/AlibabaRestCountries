// * Import Types
import { ICountryDTO} from '../../../../dtos/country.dto';
import { ReactNode } from 'react';

export interface ICountryDataContextProvider {
    data: ICountryDTO;
    children: ReactNode;
};
