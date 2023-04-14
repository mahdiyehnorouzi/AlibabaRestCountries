import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../context/theme-context';

export default function ThemeContextWrapper(props: any) {
    const [theme, setTheme] = useState('dark' as themes);

    function changeTheme() {
        setTheme(theme == 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}