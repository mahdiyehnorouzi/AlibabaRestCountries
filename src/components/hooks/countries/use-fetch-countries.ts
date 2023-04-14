import { countriesReduxActions } from './../../stores/countries/redux/countries-redux-slice';
import { useAppDispatch } from "../../lib/redux/configs/redux-hooks";
import { useQuery } from "react-query";

import { Countries } from '../../data/countries.data';
import { CountriesService } from '../../services/countries.service';

const countryApi = new Countries(new CountriesService());

export const useFetchFindAllCountries = () => {
    const dispatch = useAppDispatch();
    const { isLoading } = useQuery(
        ['find-all-countries'],
        () => countryApi.findAll(),
        {
            onSuccess: (data) => {
                dispatch(countriesReduxActions.updateItems(data));
            }
        }
    );
    return {
        isCountryAllListIsLoading: isLoading,
    };
}