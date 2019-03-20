import axios from 'axios';
import modal from 'components/modal/modal';

const baseUrl = window.apiUrl;
export default class AJAX {
  static fetch(options) {
    const {
      method = 'get',
      successFn,
      errorFn
    } = options;
    let { data, url } = options;
    url = baseUrl + url;
    if (method.toLowerCase() === 'get') {
      data = null;
    }
    // else {
    // data = JSON.stringify(data);
    // }
    const tempData = AJAX.isExisty(data) ? data : {};
    const tempData2 = Object.assign({}, tempData, { projectid: window.projectid });
    axios({
      method,
      url,
      // headers: { 'Content-Type': 'application/json;charset=UTF-8'},
      // headers: { 'content-type': 'application/x-www-form-urlencoded' },
      withCredentials: true,
      data: tempData2,
      transformRequest: [function (dataOld) {
        let ret = '';
        for (const it in dataOld) {
          let tempValue = null;
          if (Array.isArray(dataOld[it])) {
            tempValue = JSON.stringify(dataOld[it]);
          } else if (typeof dataOld[it] === 'object') {
            tempValue = JSON.stringify(dataOld[it]);
          } else {
            tempValue = dataOld[it];
          }
          // ret += `${encodeURIComponent(it)}=${encodeURIComponent(dataOld[it])}&`;
          ret += `${encodeURIComponent(it)}=${encodeURIComponent(tempValue)}&`;
        }
        return ret;
      }]
    })
      .then((response) => {
        if (successFn) {
          successFn(response.data);
        }
      }).catch((error) => {
        if (errorFn) {
          errorFn(error);
        } else {
          AJAX.modalError(error);
        }
      });
  }

  static fetchUpload(options) {
    const {
      method = 'get',
      successFn,
      errorFn,
      data
    } = options;
    data.append('projectid', window.projectid);
    let { url } = options;
    url = baseUrl + url;
    axios({
      method,
      url,
      withCredentials: true,
      data
    })
      .then((response) => {
        if (successFn) {
          successFn(response.data);
        }
      }).catch((error) => {
        if (errorFn) {
          errorFn(error);
        } else {
          AJAX.modalError(error);
        }
      });
  }


  static isExisty(obj) {
    return obj !== null;
  }

  static modalError(message) {
    return modal.showModel({
      type: 'error',
      message
    });
  }

  static modalSuccess() {
    return modal.showModel({
      type: 'success',
      message: '指令发送成功'
    });
  }

  static modalHandleSuccess(message) {
    return modal.showModel({
      type: 'success',
      message
    });
  }
}
