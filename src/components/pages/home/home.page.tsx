import React, { FC } from 'react';
import { HomeCardComponent } from '../../features/home-card/home-card.component';
import { useNavigate } from 'react-router-dom';
import { HomeStyle as S } from './home.style';
import { useCountries, useFetchFindAllCountries } from '../../hooks/countries';
import { CountryDataContextProviderComponent } from '../../stores/countries/context/provider/country-data-context-provider.component';
import _ from 'lodash';
import { Grid, Paper } from '@mui/material';
import { FilterComponent } from '../../features/filter/filter.component';


export const HomePage: FC = () => {
    const navigate = useNavigate();
    const { isCountryAllListIsLoading } = useFetchFindAllCountries();
    const { countryItems, updateQuery, query, region } = useCountries();


    if (isCountryAllListIsLoading) return (<>Loading ...</>)
    return (
        <S.Container>
            <S.HomeContainer>
                <S.HeaderContainer>
                    <S.SearchInput
                        placeholder='Search for a country'
                        value={query}
                        onChange={e => updateQuery(e.target.value)}
                    />
                    <FilterComponent />
                </S.HeaderContainer>
                <S.CardContainer container flexWrap={'wrap'}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={5}>
                            {countryItems.filter(country => country.name.official.toLowerCase().includes(query)).filter(country => region ? country.region === region : true).map((country) => (
                                <S.HomeCardGrid rowSpacing={4} item columnSpacing={{ xs: 5, sm: 2, md: 3 }} onClick={() => navigate(`/detail-page/${country.name.official}`)}>
                                    <CountryDataContextProviderComponent data={country} key={+country.idd} >
                                        <HomeCardComponent/>
                                    </CountryDataContextProviderComponent>
                                </S.HomeCardGrid>
                            ))}
                        </Grid>
                    </Grid>
                </S.CardContainer>
            </S.HomeContainer>
        </S.Container>
    )
}