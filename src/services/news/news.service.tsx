import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from '../../utils/Constants';

export default fetchNews = async () => {
  const lang = await AsyncStorage.getItem('lang');
  const newsLang = lang=='bg'?'bg':'us'
  const apiKey = Constants.APIKEY
    return fetch(
      `https://newsapi.org/v2/top-headlines?country=${newsLang}&apiKey=${apiKey}`
    ).then(response => response.json());
  };