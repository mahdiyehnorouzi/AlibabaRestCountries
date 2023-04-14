import { Box, styled, Typography } from "@mui/material"

const Container = styled(Box)`
    width: 100%;
    display: flex;
    padding: 20px 20px 30px 20px;
    flex-direction: column;
`;

const HeaderTitle = styled(Typography)`
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 10px;
`;

const DescriptionBox = styled(Box)`
    display: flex;
`;

const Title = styled(Typography)`
    font-weight: 500;
    font-size: 14px;
`;

const Description = styled(Typography)`
    font-weight: 400;
    font-size: 14px;
    color: #676767;
`;

export const CardDetailCaptionStyle = {
    Container,
    Title,
    Description,
    DescriptionBox,
    HeaderTitle,
}