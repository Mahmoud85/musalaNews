import React, {useEffect, useState} from 'react';
import Navigation from '@musnews/navigation/Navigation';
import {View} from 'react-native';
import styles from './styles';
import {initializeLang} from '@musnews/localization/localizationManager';
import {colorSchemeInstance} from '@musnews/Theming/ColorScheme';
import getThemeColors from '@musnews/Theming';
import {Appearance} from 'react-native-appearance';
import {ThemeProvider} from './Theming/ThemeProvider/ThemeProvider'


const App = () => {
  const [appReady, setReady] = useState(false);
  const [theme, setTheme] = useState(Appearance.getColorScheme() || 'light');
  useEffect(() => {
    appInit();
  }, []);

  const appInit = async () => {
    await initializeLang();
    setReady(true);
    colorSchemeInstance.subscribe(handleColorSchemeUpdate);
  };

  const handleColorSchemeUpdate = callback => {
    setTheme(callback?.colorScheme);
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
