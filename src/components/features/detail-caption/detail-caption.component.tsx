import { FC } from 'react';
import { Box, Card } from '@mui/material';
import { useCountries } from '../../hooks/countries';
import { DetailCaptionStyle as S } from './detail-caption.style';
import { useNavigate } from 'react-router-dom';

export const DetailCaptionComponent: FC = () => {
  const { chosenCountry } = useCountries();
  const navigate = useNavigate();

  if (!chosenCountry) return null;

  return (
    <S.Container>
      <S.Title>{chosenCountry?.name?.official}</S.Title>

      <S.DetailContainer>
        <S.DetailSideContainer>
          <S.TitleContainer>
            <S.TitleDescription>Native Name:</S.TitleDescription>
            <S.Description>{chosenCountry?.name?.nativeName[0]?.official}</S.Description>
          </S.TitleContainer>

          <S.TitleContainer>
            <S.TitleDescription>Population:</S.TitleDescription>
            <S.Description>{chosenCountry?.population}</S.Description>
          </S.TitleContainer>

          <S.TitleContainer>
            <S.TitleDescription>Region:</S.TitleDescription>
            <S.Description>{chosenCountry?.region}</S.Description>
          </S.TitleContainer>

          <S.TitleContainer>
            <S.TitleDescription>Sub Region:</S.TitleDescription>
            <S.Description>{chosenCountry?.subregion}</S.Description>
          </S.TitleContainer>

          <S.TitleContainer>
            <S.TitleDescription>Capital:</S.TitleDescription>
            <S.Description>{chosenCountry?.capital}</S.Description>
          </S.TitleContainer>

        </S.DetailSideContainer>

        <S.DetailSideContainer>
          <S.TitleContainer>
            <S.TitleDescription>Top Level Domain:</S.TitleDescription>
            <S.Description>{chosenCountry?.tld}</S.Description>
          </S.TitleContainer>

          <S.TitleContainer>
            <S.TitleDescription>Curencies:</S.TitleDescription>
            <S.Description>{chosenCountry?.continents[0]}</S.Description>
          </S.TitleContainer>

          <S.TitleContainer>
            <S.TitleDescription>Languages:</S.TitleDescription>
            {/* <S.Description>{chosenCountry?.languages['ali']}</S.Description> */}
          </S.TitleContainer>

        </S.DetailSideContainer>
      </S.DetailContainer>

      <S.BorderContainer>
        <S.TitleDescription>Border Countries:</S.TitleDescription>

        <S.TitleContainer>
          {chosenCountry?.continents.map(country => (
            <S.CountriesCard onClick={() => navigate(`/detail-page/${country}`)}>{country}</S.CountriesCard>
          ))}
        </S.TitleContainer>
      </S.BorderContainer>
    </S.Container>
  )
}