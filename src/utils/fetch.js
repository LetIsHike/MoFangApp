import { isEmpty } from 'ramda';
import { Toast } from 'antd-mobile-rn';
import qs from 'qs';
import Config from '../config';

function apiUrl(url) {
  if (typeof url !== 'string') {
    console.log('url只能为字符串类型');
  } else if (url.charAt(0) === '/') {
    return `${Config.Api.baseApi}/${url}`;
  }
  return Config.Api.baseApi + url;
}

const errCode = (json) => {
  switch (json.code) {
    case 703:
      return console.log('登陆过期', json);
    case -1:
      Toast.fail(`${json.code} ${json.message || json.data}`);
      return Promise.reject(new Error(`${json.code} ${json.message || json.data}`));
    default:
      console.log('json.code:', json.code);
  }
  return json;
};

const Fetch = {
  /**
 * param {Number} url 地址
 * param {Object} parmas 数据
 * param {String} method 请求类型
 * param {String} type 上传格式，比如：表单formData，json
 * param {Boolean} mock 是否携带token
 * param {Object} headerParams 请求头设置
 */
  fetch(url, params = {}, method = 'get', type = '', dataJson = true, headerParams = {}) {
    const headers = {};
    if (method === 'post' && type === 'json') {
      headers.Accept = 'application/json';
      headers['Content-Type'] = 'application/json';
    }
    if (!isEmpty(headerParams)) {
      for (const key in headerParams) {
        headers[key] = headerParams[key];
      }
    }
    const options = {
      method,
      headers,
      credentials: 'include',
    };

    if (type === 'json') {
      options.body = JSON.stringify(params);
    } else if (type === 'file') {
      options.body = params;
    }

    return fetch(url, options)
      .then(res => res)
      .then(res => res.text())
      .then((text) => {
        if (!dataJson) {
          return text;
        } if (text) {
          return JSON.parse(text);
        }
        return {};
      })
      .then(errCode)
      .catch(err => new Error(err));
  },
  get(url, params = {}, dataJson = true, headerParams = {}) {
    let _url = url;
    if (!isEmpty(params)) {
      _url = url + (/\?/.test(url) ? '&' : '?') + qs.stringify(params);
    }
    return this.fetch(apiUrl(_url), {}, 'get', '', dataJson, headerParams);
  },
  post(url, params, dataJson = true, type = 'json', headerParams) {
    console.log(83, params);
    return this.fetch(apiUrl(url), params, 'post', type, dataJson, headerParams);
  },
  put(url, params, dataJson = true, type = '') { return this.fetch(apiUrl(url), params, 'put', type, dataJson); },
  delete(url, params, dataJson = true) {
    let _url = url;
    if (!isEmpty(params)) {
      _url = url + (/\?/.test(url) ? '&' : '?') + qs.stringify(params);
    }
    return this.fetch(apiUrl(_url), params, 'delete', dataJson);
  },
};

export default Fetch;
