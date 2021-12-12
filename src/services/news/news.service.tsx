import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from '../../utils/Constants';

  export default async function fetchNews() {
    const lang = await AsyncStorage.getItem('lang');
    const newsLang = lang=='bg'?'bg':'us'
    const apiKey = Constants.APIKEY
    const response = await fetch( `https://newsapi.org/v2/top-headlines?country=${newsLang}&apiKey=${apiKey}`);
    const news = await response.json();
    return news;
  }