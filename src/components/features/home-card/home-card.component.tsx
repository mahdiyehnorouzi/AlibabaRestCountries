import { FC } from 'react';
import { ICountryDTO } from '../../../dtos/country.dto';
import { CardDetailComponent } from './card-detail-caption/card-detail-caption.component';
import { CardImageComponent } from './card-image/card-image.component';
import {HomeCardStyle as S} from './home-card.style';

export const HomeCardComponent: FC = () => {
    return (
        <S.CardContainer>
                <CardImageComponent/>
                <CardDetailComponent/>    
        </S.CardContainer>
    )
}