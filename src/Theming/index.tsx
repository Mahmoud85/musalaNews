import LightColors from './light/colors';
import DarkColors from './dark/colors';

function createTheme(themeName, isDarkMode = false, colors = {}) {
  return {
    dark: isDarkMode,
    colors,
    name: themeName,
  };
}

const LightThemeColors = createTheme('light', false, LightColors);
const DarkThemeColors = createTheme('dark', true, DarkColors);

export default function getThemeColors(themeName) {
  switch (themeName) {
    case 'dark':
      return DarkThemeColors;
    case 'light':
    default:
      return LightThemeColors;
  }
}
