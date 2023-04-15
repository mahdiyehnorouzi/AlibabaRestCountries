import { createContext } from "react";

export type themes = 'light' | 'dark';

export const ThemeContext = createContext({
    theme: 'dark' as themes,
    changeTheme: () => { },
});