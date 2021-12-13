import React, {useEffect, useState,useRef} from 'react';
import {View, FlatList} from 'react-native';
import fetchNews from '@musnews/services/news/news.service';
import NewsItem from '@musnews/componetns/NewsItem/NewsItem.Compoent';
import Loader from '@musnews/componetns/Loader/Loader.Component'
import { SearchBar } from 'react-native-elements';
import { translate } from '@musnews/localization/localizationManager';
import withTheme from '@musnews/Theming/ThemeProvider/WithTheme'
import {NewsItemModel} from '@musnews/models'
import {itemFilter} from '@musnews/dataFactory/News.Factory'


function NewsListScreen({navigation,theme}) {
  const [newsList, setNewsList] = useState([]);
  const [filteredNewsList, setFilterNewsList] = useState([]);
  const [refreshing, setreFreshing] = useState(true);
  const [error,setError] = useState(false);
  const [searchValue,setSearchValue] = useState('');
  const isMounted = useRef(true);
  let searchRef: (ref: FlatList<any> | null) => void = useRef(null)
  
  useEffect(() => {
     getNews();
  }, []);

  const getNews = React.useCallback(
    async () => {
      try {
        setError(false)
        setSearchValue('')
        const result = await fetchNews();
          if (isMounted) setNewsList(result.articles);
        setreFreshing(false);
      } catch (error) {
        setreFreshing(false);
        setError(true)
      }
    },
    [],
  );
 
  const updateSearch = (value)=> {
    setSearchValue(value)
      const filteredList = newsList.filter(item=>itemFilter(item,value))
    setFilterNewsList(filteredList||[])
  }

  const renderItem = ({item}: NewsItemModel) => <NewsItem navigation= {navigation} newsItem={item} />;
   
  return (
    <View style={{flex: 1}}>
         <SearchBar
        placeholder={translate('searchPlaceHoder')}
        ref={(search: FlatList<any> | null) => searchRef = search}
        onChangeText={updateSearch}
        value={searchValue}
        lightTheme={!theme.dark}
        round={true}
        style={{maxHeight:30}}
        onCancel={()=>updateSearch('')}
        onClear={()=>searchRef?.current?.cancel()}
      />
      {newsList?.length ? (
        <FlatList
          data={searchValue?filteredNewsList:newsList}
          renderItem={renderItem}
          keyExtractor={(_item,index) => index}
          refreshing={refreshing}
          onRefresh={getNews}
          showsVerticalScrollIndicator ={false}
          
        />
      ) : (
        <Loader error = {error}/>
      )}
    </View>
  );
}

export default withTheme(React.memo(NewsListScreen)) ;
