import { Box, Grid, Typography, styled } from "@mui/material"

const CardContainer = styled(Grid)`
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 0px #e4e0e0;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px
`;

const TitleContainer = styled(Box)`
    display: flex;
`;

const TitleDescription = styled(Typography)`
    display: flex;
    font-weight: 700;
    font-size: 18px;
`;

export const HomeCardStyle = {
    CardContainer,
    TitleContainer,
    TitleDescription
}