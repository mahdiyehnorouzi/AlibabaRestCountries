import { Box, Grid, styled } from "@mui/material"

const Container = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HomeContainer = styled(Box)`
    padding: 40px;
`;

const HeaderContainer = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const SearchInput = styled('input')`
    height: 38px;
    width: 350px;
    border: none;
    box-shadow: 0px 0px 6px 0px #e4e0e0;
    border-radius: 5px;

    ::placeholder {
        color: #b9b9b9;
        font-size: 12px;
        padding: 30px;
    }
`;

const CardContainer = styled(Grid)`
    width: 100%;
    display: flex;
    flex-wrap:nowrap;
`;

const HomeCardGrid = styled(Grid)`
    max-width: 350px;
`

export const HomeStyle = {
    Container,
    HeaderContainer,
    CardContainer,
    HomeCardGrid,
    HomeContainer,
    SearchInput,
}