import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsListScreen from '@musnews/scenes/News/NewsListScreen';
import SettingsScreen from '@musnews/scenes/Settings/SettingsScreen';
import NewsDetailsScreen from '@musnews/scenes/NewsDetails/NewsDetailsScreen';
import {translate} from '@musnews/localization/localizationManager';
import withTheme from '@musnews/Theming/ThemeProvider/WithTheme';
import ScreenNames from './NavigationScreenNames';
import {
  linking,
  tabConfig,
  newsScreenOptions,
  newsDetailsScreenOptions,
} from './NavConfig';

function Navigation({theme}) {
  const NewStack = createNativeStackNavigator();

  function NewsStackScreen() {
    return (
      <NewStack.Navigator>
        <NewStack.Screen
          options={newsScreenOptions(theme)}
          name={ScreenNames.NEWSLIST}
          component={NewsListScreen}
        />
        <NewStack.Screen
          name={ScreenNames.DETAILS}
          options={newsDetailsScreenOptions(theme)}
          component={NewsDetailsScreen}
        />
      </NewStack.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Loading...</Text>}
      theme={theme}>
      <Tab.Navigator screenOptions={tabConfig(theme)}>
        <Tab.Screen
          name={ScreenNames.NEWSTAB}
          options={{
            title: translate('news'),
          }}
          component={NewsStackScreen}
        />
        <Tab.Screen
          name={ScreenNames.SETTINGSTAB}
          options={{
            title: translate('settings'),
            headerStyle: {
              backgroundColor: theme.colors.headerBG,
            },
          }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default withTheme(Navigation);
