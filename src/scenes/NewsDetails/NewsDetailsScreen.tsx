import React, {useEffect} from 'react';
import {ScrollView } from 'react-native';
import NewsItemDetails from '@musnews/componetns/NewsDetails/NewsDetails.Component'

function NewsDetails({navigation}) {
  const {routes}= navigation.getState()
  const {params} = routes[1]
  const {newsItem} = params;  
        
  useEffect(() => {
  }, [])

  return (
    <ScrollView>
      <NewsItemDetails newsItem = {newsItem}/>

    </ScrollView>
  );
}

export default React.memo(NewsDetails);
