import { FC } from 'react';
import { DetailCaptionComponent } from '../../features/detail-caption/detail-caption.component';
import { Box, useTheme } from '@mui/material';
import { ImageFlagDetailComponent } from '../../features/image-flag-detail/image-flag-detail.component';
import { useNavigate, useParams } from 'react-router-dom';
import {DetailStyle as S} from './detail.style';
import { useFetchCountryByName } from '../../../hooks/countries/use-fetch-country-by-name';

export const DetailPage: FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { isLoading } = useFetchCountryByName(name|| '');
  const theme = useTheme();
  if (isLoading) return <h6>Loading ...</h6>;
  return (
    <>
      <S.BackButton 
        style={{background : theme.palette.background.paper}}
         variant="text"
         onClick={() => navigate(`/`)}
      >Back</S.BackButton>
      <S.Container>
        <S.ImageContainer>
          <ImageFlagDetailComponent />
        </S.ImageContainer>

        <S.DetailContainer>
          <DetailCaptionComponent />
        </S.DetailContainer>
      </S.Container>
    </>
  )
};