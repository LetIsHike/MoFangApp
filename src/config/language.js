import DeviceInfo from 'react-native-device-info';
import { languageKey } from '../constants/stroage';

export default class Language {
  // 获取语言
  getLanguage() {
    return storage.Load({ key: languageKey })
      .then(ret => ret)
      .catch(() => this.saveLanguage(DeviceInfo.getDeviceLocale()));
  }

  // 保存语言
  saveLanguage(languageFlag) {
    return storage.Save({
      key: languageKey,
      data: languageFlag,
    })
      .then(() => languageFlag);
  }
}
