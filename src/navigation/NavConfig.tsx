import {Icon} from 'react-native-elements';
import React from 'react'
import {translate} from '@musnews/localization/localizationManager';
const linking = {
    prefixes: ['https://musalaNews.com', 'musalanews://'],
    config: {
      screens:{
        Settings: 'settings',
        News: {
          path: 'news',
          screens:{
            NewsList: 'newslist',
            Details: 'details/:id'
          }
        }
      }
  }
}
const tabConfig = (theme)=>(
    ({route}) => {
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
      }
)
const newsScreenOptions = (theme)=>({
    title: translate('news'),
    headerTitleStyle: {
      color: theme.colors.defaultText,
    },
    headerStyle: {
      backgroundColor: theme.colors.headerBG,
    },
  })
  const newsDetailsScreenOptions = (theme)=>({
    title: translate('newsDetails'),
    headerTitleStyle: {
      color: theme.colors.defaultText,
    },
    headerStyle: {
      backgroundColor: theme.colors.headerBG,
    },
    headerBackTitle: translate('back'),
  })
export {linking, tabConfig, newsScreenOptions,newsDetailsScreenOptions }