import { FC, useMemo, useState } from 'react';
import { HomeCardStyle as S } from './home-card.style';
import { CssBaseline, IconButton, ThemeProvider, createTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const HeaderComponents: FC = () => {

    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }), [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: { mode, },
            }),
        [mode],
    );


    return (
        <S.CardContainer>
            <S.TitleContainer>
                <S.TitleDescription>Where in the world</S.TitleDescription>
            </S.TitleContainer>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </ThemeProvider>
        </S.CardContainer>
    )
}