import { Box, Button, styled } from "@mui/material";

const BackButton = styled(Button)`
    margin: 40px 0 40px 50px;
    display: flex;
    box-shadow: 1;
    color: #000;
`;

const Container = styled(Box)`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
`;

const ImageContainer = styled(Box)`
    width: 30%;
`;

const DetailContainer = styled(Box)`
    width: 50%;
    margin-left: 58px;
`;

export const DetailStyle = {
    BackButton,
    Container,
    ImageContainer,
    DetailContainer
}