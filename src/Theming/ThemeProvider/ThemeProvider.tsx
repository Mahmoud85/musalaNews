import React from 'react';
import getThemeColors from '@musnews/Theming';

const defaultTheme = getThemeColors('light');
const ThemeContext = React.createContext(defaultTheme);

const ThemeProvider = ({theme, children}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export  {  ThemeContext,  ThemeProvider  };