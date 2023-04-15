import { FC } from 'react';
import {FilterStyle as S} from './filter.style';
import { useTheme } from '@mui/material';
import { Region } from '../../../stores/countries/redux/countries.type';
import { useCountries } from '../../../hooks/countries';


export const FilterComponent: FC = () => {
  const {region , updateRegion} = useCountries();
  const theme = useTheme();

  return (
    <S.FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <S.Select
        style={{background : theme.palette.background.paper}}
        value={region}
        displayEmpty
        renderValue={(selected: any) => {
          if (selected.length === 0) {
            return <S.PlaceHolder>Filter by Region</S.PlaceHolder>;
          }

          return selected;
        }}
        onChange={(e) => updateRegion(e.target.value as Region)}
      >
        <S.MenuItem value={'Africa'}>Africa</S.MenuItem>
        <S.MenuItem value={'Americas'}>America</S.MenuItem>
        <S.MenuItem value={'Asia'}>Asia</S.MenuItem>
        <S.MenuItem value={'Europe'}>Europe</S.MenuItem>
        <S.MenuItem value={'Oceania'}>Oceania</S.MenuItem>
      </S.Select>
    </S.FormControl>
  )
};