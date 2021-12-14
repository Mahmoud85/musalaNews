import React, {useEffect, useState} from 'react';
import Navigation from '@musnews/navigation/Navigation';
import {View} from 'react-native';
import styles from './styles';
import {initializeLang} from '@musnews/localization/localizationManager';
import modeListener from './Theming/modeListener';
import getThemeColors from '@musnews/Theming';
import {Appearance} from 'react-native-appearance';
import {ThemeProvider} from './Theming/ThemeProvider/ThemeProvider'


const App = () => {
  const [appReady, setReady] = useState(false);
  const [theme, setTheme] = useState(Appearance.getColorScheme() || 'light');
  useEffect(() => {
    modeListener(handleColorSchemeUpdate)
    appInit();
  }, []);

  const appInit = async () => {
    await initializeLang();
   
    setReady(true);
  };

  const handleColorSchemeUpdate = color => {
    setTheme(color);
  };

  const getColorSchema = () => {
    return getThemeColors(theme);
  };

  return (
    <View style={styles.rootContainer(theme)}>
      {appReady && (
        <ThemeProvider theme = {getColorSchema()}>
          <Navigation />
        </ThemeProvider>
      )}
    </View>
  );
};

export default React.memo(App) ;
