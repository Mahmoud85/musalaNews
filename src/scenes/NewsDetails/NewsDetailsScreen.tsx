import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import NewsItemDetails from '@musnews/componetns/NewsDetails/NewsDetails.Component';
import Loader from '@musnews/componetns/Loader/Loader.Component';
import fetchNews from '@musnews/services/news/news.service';
import {translate} from '@musnews/localization/localizationManager';
import {addNewsId, findNewsById} from '@musnews/dataFactory/News.Factory';
import {useNavigation} from '@react-navigation/native';

function NewsDetails() {
  const navigation = useNavigation();
  const {routes} = navigation.getState();
  const {params} = routes[1] || routes[0];
  const newsItem = params?.newsItem;
  const [item, setItem] = React.useState(null);
  const [error, setError] = React.useState(false);

  const setNewsItem = () => {
    if (newsItem) {
      setItem(newsItem);
    } else {
      handleDeepLink();
    }
  };
  const handleDeepLink = async () => {
    try {
      const result = await fetchNews();
      const formatedNews = addNewsId(result.articles);
      const _id = params?.id;
      const selectedItem = findNewsById(formatedNews, _id);
      if (selectedItem) {
        setItem(selectedItem);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    setNewsItem();
  }, []);

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      {item ? (
        <NewsItemDetails newsItem={item} />
      ) : (
        <View style={{flex: 1}}>
          <Loader error={error} errorMsg={translate('noNewsItemError')} />
        </View>
      )}
    </ScrollView>
  );
}

export default React.memo(NewsDetails);
