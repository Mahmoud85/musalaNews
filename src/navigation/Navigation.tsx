import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsListScreen from '@musnews/scenes/News/NewsListScreen';
import SettingsScreen from '@musnews/scenes/Settings/SettingsScreen';
import NewsDetailsScreen from '@musnews/scenes/NewsDetails/NewsDetailsScreen';
import {Icon} from 'react-native-elements';
import {translate} from '@musnews/localization/localizationManager';
import withTheme from '@musnews/Theming/ThemeProvider/WithTheme';
import ScreenNames from './NavigationScreenNames';
import {linking} from './NavConfig'

function Navigation({theme}) {
  const NewStack = createNativeStackNavigator();
    
  function NewsStackScreen() {
    return (
      <NewStack.Navigator>
        <NewStack.Screen
          options={{
            title: translate('news'),
            headerTitleStyle: {
              color: theme.colors.defaultText,
            },
            headerStyle: {
              backgroundColor: theme.colors.headerBG,
            },
          }}
          name={ScreenNames.NEWSLIST}
          component={NewsListScreen}
        />
        <NewStack.Screen
          name={ScreenNames.DETAILS}
          options={{
            title: translate('newsDetails'),
            headerTitleStyle: {
              color: theme.colors.defaultText,
            },
            headerStyle: {
              backgroundColor: theme.colors.headerBG,
            },
            headerBackTitle: translate('back'),
          }}
          component={NewsDetailsScreen}
        />
      </NewStack.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();

  

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>} theme={theme}>
      <Tab.Navigator
        screenOptions={({route}) => {
          return {
            tabBarIcon: ({focused, color, size}) => {
              let iconName: string;
              if (route.name === 'News') {
                iconName = focused ? 'newspaper' : 'newspaper-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
                iconName = focused ? 'settings' : 'settings-outline';
              }
              return (
                <Icon type="ionicon" name={iconName} size={25} color={color} />
              );
            },
            tabBarActiveTintColor: '#1E8EBF',
            tabBarActiveBackgroundColor: theme.colors.headerBG,
            tabBarInactiveBackgroundColor: theme.colors.headerBG,
            tabBarInactiveTintColor: 'gray',
            headerShown: route.name === 'News' ? false : true,
            headerTitleStyle: {
              color: theme.colors.defaultText,
            },
            headerStyle: {
              backgroundColor: theme.colors.headerBG,
            },
          };
        }}>
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
