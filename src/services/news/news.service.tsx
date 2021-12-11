import AsyncStorage from '@react-native-async-storage/async-storage';

export default fetchNews = async () => {
  const lang = await AsyncStorage.getItem('lang');
  const newsLang = lang=='bg'?'BG':'US'
    return fetch(
      `https://newsapi.org/v2/top-headlines?country=${newsLang}&apiKey=495ff7a4c6de4b84b26ab5cd752d479e`
    ).then(response => response.json());
  };