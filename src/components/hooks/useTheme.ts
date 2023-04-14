import { useContext } from "react";
import { Theme } from "../constants/theme";
import { ThemeContext } from "../context/theme-context";
import Colors from "../constants/Colors";

export default function useTheme(): Theme {
    const { theme } = useContext(ThemeContext);
    
    return Colors[theme];
}