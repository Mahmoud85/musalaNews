import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styles from './Loader.Component.styles'
import withTheme from '@musnews/Theming/ThemeProvider/WithTheme'

type Props = {
  error: boolean;
};



let Loader: React.FC<Props> = ({error=false}) => {
  return (
    <View style={styles.loadingView}>
      {!error?(
     <>
      <ActivityIndicator size="large" color="gray" />
      <Text style={styles.loadingText}>Loading News . . .</Text></>
      )
      :(<Text>Oops News Could not be loaded</Text>)
      }
      
    </View>
  );

}

export default withTheme(React.memo(Loader)) ;
