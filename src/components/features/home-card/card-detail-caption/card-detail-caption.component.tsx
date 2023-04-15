import { FC } from 'react';
import { useCountryData } from '../../../../hooks/countries';
import { CardDetailCaptionStyle as S } from './card-detail-caption.style';

export const CardDetailComponent: FC = () => {
  const { name, population, region, capital } = useCountryData();
  return (
    <S.Container>
      <S.HeaderTitle>{name.official}</S.HeaderTitle>
      
      <S.DescriptionBox>
        <S.Title>Population:</S.Title>
        <S.Description>{population}</S.Description>
      </S.DescriptionBox>
      
      <S.DescriptionBox>
        <S.Title>Region:</S.Title>
        <S.Description>{region}</S.Description>
      </S.DescriptionBox>
      
      <S.DescriptionBox>
        <S.Title>Capital:</S.Title>
        <S.Description>{capital}</S.Description>
      </S.DescriptionBox>
    </S.Container>
  )
}