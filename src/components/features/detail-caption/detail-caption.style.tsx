import { Box, Card, styled, Typography } from "@mui/material"

const Container = styled(Box)`
    width: 100%;
    height: 100%;
    backgroundColor: '#fff';
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled(Typography)`
    width: 100%;
    display: flex;
    fontSize: 20;
    font-weight: bold;
    margin-bottom: 30px;
    align-items: center;
`;

const DetailContainer = styled(Box)`
    display: flex;
    margin-bottom: 60px;
    width: 100%;
    align-items: flex-start;
`;

const DetailSideContainer = styled(Box)`
    display: flex,
    flex-direction: column;
`;

const TitleContainer = styled(Box)`
    display: flex;
`;

const TitleDescription = styled(Typography)`
    display: flex;
    font-weight: bold;
    font-size: 13px;
`;

const Description = styled(Box)`
    display: flex;
    font-size: 13px;
    padding-left: 7px;
`;

const BorderContainer = styled(Box)`
    display: flex;
    width: 100%;
    align-items: center;
`;

const CountriesCard = styled(Card)`
    padding: 4px 14px;
    margin: 0 10px;
`;

export const DetailCaptionStyle = {
    Container,
    Title,
    DetailContainer,
    DetailSideContainer,
    TitleContainer,
    TitleDescription,
    Description,
    BorderContainer,
    CountriesCard
}