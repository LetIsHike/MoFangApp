import I18n, { getLanguages } from 'react-native-i18n';
// import DeviceInfo from 'react-native-device-info';
// import Language from '../../config/language';
import en from './en';
import zh from './zh';

// 默认语言
I18n.defaultLocale = 'zh';
I18n.fallbacks = true;

I18n.translations = {
  en,
  zh,
};

export default { I18n, getLanguages };
