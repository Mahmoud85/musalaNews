import React,{useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements'
import {switchLang} from '@musnews/localization/localizationManager'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translate} from '@musnews/localization/localizationManager'
import withTheme from '@musnews/Theming/ThemeProvider/WithTheme'
import styles from './SettingsScreen.styles'
import Constants from '@musnews/utils/Constants'

function SettingsScreen({theme}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const languges = {0:Constants.BULGARIAN,1:Constants.ENGLISH}
  let lang;

  useEffect(()=>{
    initialize()
  },[])
  

  const initialize = async ()=>{
    lang = await AsyncStorage.getItem(Constants.LANGUAGEKEY)||Constants.BULGARIAN;
  const defaultIndex = lang ===Constants.BULGARIAN?0:1
  setSelectedIndex(defaultIndex)
  }
   
    return (
        <View style = {styles.container}>
        <Card containerStyle={styles.cardStyle(theme)}>
        <Card.Title style={styles.cardTitle}>{translate('langSettings')}</Card.Title>
        <Card.Divider color= {styles.borderStyle(theme)} />
        <View style={styles.buttonsContainer}>
        <ButtonGroup
        buttons={[Constants.BGLANGLABEL, Constants.ENGLANGLABEL]}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
            switchLang(languges[value])
        }}
        containerStyle={{ marginBottom: 20 }}
      />
        </View>
      </Card>
        </View>
    );
  }

  export default withTheme(React.memo(SettingsScreen)) ;