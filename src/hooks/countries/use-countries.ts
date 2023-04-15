import { countriesReduxSelectors } from '../../stores/countries/redux/countries-redux-selector';
import { useAppDispatch, useAppSelector } from "../../lib/redux/configs/redux-hooks";
import { countriesReduxActions } from '../../stores/countries/redux/countries-redux-slice';
import { Region } from '../../stores/countries/redux/countries.type';
const { selectChosenItem, selectItems , selectQuery , selectFilter } = countriesReduxSelectors;



export const useCountries= () => {
    const countryItems = useAppSelector(selectItems);
    const query = useAppSelector(selectQuery);
    const region = useAppSelector(selectFilter);
    const chosenCountry= useAppSelector(selectChosenItem);
    const dispatch = useAppDispatch();
    return {
        countryItems,
        chosenCountry,
        query,
        region,
        updateQuery: (query:string)=> dispatch(countriesReduxActions.updateQuery(query)),
        updateRegion: (region:Region)=> dispatch(countriesReduxActions.updateRegion(region)),
    };

};