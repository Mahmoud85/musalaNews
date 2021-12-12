import * as React from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import styles from './NewsDetails.Component.styles';
import {Card} from 'react-native-elements';
import withTheme from '@musnews/Theming/ThemeProvider/WithTheme'
import {NewsItemModel,ThemeModel} from '../../models'

type Props = {
newsItem: NewsItemModel,
theme: ThemeModel,
};

let NewsItemDetails: React.FC<Props> = ({newsItem,theme}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.flexOne} containerStyle={styles.cardStyle(theme)}>
        <Card.Title style ={styles.title(theme)}>{newsItem.title}</Card.Title>
        <Card.Divider color= {styles.borderStyle(theme)} />
        <Card.Image
          style={styles.image}
          source={{uri: newsItem.urlToImage}}
        />
        <View style={styles.subHeaderContainer}>
          <Text style={styles.authorText}>{newsItem.author}</Text>
          <Text style={styles.publishTimeText}>
            {new Date(newsItem.publishedAt).toLocaleString()}
          </Text>
        </View>
        <Card.Divider color= {styles.borderStyle(theme)}  />
        <View>
          <Text style = {styles.contentText}>{newsItem.content}</Text>
        </View>
      </Card>
    </View>
  );
};
export default withTheme(React.memo(NewsItemDetails)) ;
