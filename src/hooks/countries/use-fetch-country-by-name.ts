import { countriesReduxActions } from '../../stores/countries/redux/countries-redux-slice';
import { useAppDispatch } from "../../lib/redux/configs/redux-hooks";
import { useQuery } from "react-query";
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../data/countries.data';
const countryApi = new Countries(new CountriesService());

const {  updateChosenItem} = countriesReduxActions;


export const useFetchCountryByName = (name:string) => {
    const dispatch = useAppDispatch();
    const { isLoading } = useQuery(
        ['find-country-by-name',name],
        () => countryApi.findByName(name),
        { 
            onSuccess: ( data ) => {
                dispatch(updateChosenItem(data));
            }
        }
    );
    return {
        isLoading
    };
}