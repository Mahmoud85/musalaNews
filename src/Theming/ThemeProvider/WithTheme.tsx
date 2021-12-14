import React from 'react';
import {ThemeContext} from './ThemeProvider';

const withTheme = WrappedComponent => {
  return function themedCmponent(props) {
    const theme = React.useContext(ThemeContext);
    return <WrappedComponent {...props} theme={theme} />;
  };
};

export default withTheme;
