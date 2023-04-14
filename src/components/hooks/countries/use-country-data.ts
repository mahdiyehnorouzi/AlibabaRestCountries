// * Import Tools
import { useContext } from 'react';

// * Import Stores
import { DataContext } from '../../stores/countries/context/config/country-data-context';

export const useCountryData = () => {
    const data = useContext(DataContext);
    return  data ;
}