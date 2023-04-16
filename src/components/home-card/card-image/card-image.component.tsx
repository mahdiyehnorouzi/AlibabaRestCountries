import {FC} from 'react';
import { useCountryData } from '../../../hooks/countries';
import {CardImageStyle as S} from './card-image.style';

export const CardImageComponent: FC = () => {
  const {flags} = useCountryData();
  return (
    <S.Container>
      <S.Image src={flags.png} />
    </S.Container>
  )
}