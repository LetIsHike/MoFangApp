import { languageKey } from '../constants/stroage';

export default class Language {
  // 获取语言
  getLanguage() {
    return storage.Load({ key: languageKey })
      .then(ret => JSON.parse(ret))
      .catch(() => this.saveLanguage('zh'));
  }

  // 保存语言
  saveLanguage(languageFlag) {
    return storage.Save({
      key: languageKey,
      data: languageFlag,
    })
    .then(() => languageFlag)
  }
}
