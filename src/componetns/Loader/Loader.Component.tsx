import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styles from './Loader.Component.styles'
import withTheme from '@musnews/Theming/ThemeProvider/WithTheme'
import {translate} from '@musnews/localization/localizationManager';

type Props = {
  error: boolean;
};



let Loader: React.FC<Props> = ({error=false}) => {
  return (
    <View style={styles.loadingView}>
      {!error?(
     <>
      <ActivityIndicator size="large" color="gray" />
      <Text style={styles.loadingText}>{translate('loading')}</Text></>
      )
      :(<Text>{translate('loadingError')}</Text>)
      }
      
    </View>
  );

}

export default withTheme(React.memo(Loader)) ;
