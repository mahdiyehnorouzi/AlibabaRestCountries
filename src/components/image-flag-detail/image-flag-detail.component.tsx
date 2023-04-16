import {FC} from 'react';
import { useCountries } from '../../hooks/countries';
import {ImageFlagDetailStyle as S} from './image-flag-detail.style';

export const ImageFlagDetailComponent: FC = () => {
  const { chosenCountry } = useCountries();

  if (!chosenCountry) return null;
  return (
    <S.Image 
       src={chosenCountry.flags.png}
    />
  )
}