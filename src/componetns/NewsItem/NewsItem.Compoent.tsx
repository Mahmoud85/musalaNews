import * as React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './NewsItem.Component.styles';
import { Divider, Image } from 'react-native-elements';
import withTheme from '@musnews/Theming/ThemeProvider/WithTheme';

type Props = {
  title: string;
  urlToImage:string
};
let NewsItem: React.FC<Props> = ({newsItem,navigation,theme}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.push('Details',{newsItem})}>
    <View style={styles.container}>
     <View style = {styles.imageContainer}>
      <Image
       source={{ uri: newsItem.urlToImage }}
       style={styles.smallThumb}
      PlaceholderContent={<ActivityIndicator />}
/>
     </View>
      <View style = {styles.contentTextContiner}>
      <Text style = {styles.contentText(theme)}  numberOfLines= {4}>{newsItem.title}</Text>
      </View>
    </View>
    <Divider orientation={'horizontal'}  style={styles.divider} />
    </TouchableOpacity>
  );
};
export default withTheme (React.memo(NewsItem));
