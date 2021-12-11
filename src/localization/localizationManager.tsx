import i18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

const bgTranslations = require('./bg.json');
const enTranslations = require('./en.json');
const lang = {en: enTranslations, bg: bgTranslations};

const initializeLang = async () => {
  const prefLang = (await AsyncStorage.getItem('lang')) || 'bg';
  setLang(prefLang);
};

const switchLang = selectedLang => {
  AsyncStorage.setItem('lang', selectedLang);
  const currentLang = i18n.currentLocale()  
  if (currentLang !==selectedLang){
    setLang(selectedLang);
    RNRestart.Restart();
  }
};

const setLang = selectedLang => {
  i18n.translations = {[selectedLang]: lang[selectedLang]};
  i18n.locale = selectedLang;
};

const translate = (key, params?) => {
  return i18n.translate(key, params);
};

export {initializeLang, translate, switchLang};
