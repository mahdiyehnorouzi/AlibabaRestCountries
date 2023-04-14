// * Import Types
import { FC } from 'react';
import { DataContext } from '../config/country-data-context';
import { ICountryDataContextProvider } from './country-data-context-provider.type';;

export const CountryDataContextProviderComponent: FC<ICountryDataContextProvider> = ({
    data,
    children,
}) => {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};
