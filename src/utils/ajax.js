import $ from 'jquery';
import modal from 'components/modal/modal';
import 'util/mockdata';
import ErrorCode from './errorcode';

// const expire = 15 * 60 * 1000;
let dialogId = 0;
export default class AJAX {
  static localData = require('util/localdata');

  static getEnvPrefix() {
    if (window.isDebug) {
      return '';
    }
    return window.apiUrl;
  }

  static fetch(fetchObj) {
    const {
      loadingFlag,
      method,
      successFn,
      errorFn
    } = fetchObj;
    let {
      url,
      data = {}
    } = fetchObj;
    if (loadingFlag) {
      dialogId = modal.showModel({
        type: 'loading'
      });
    }

    // if (url.split('/')[1] !== 'login') {
    //   const time = localStorage.getItem('time');
    //   if ((new Date().getTime() - time) > expire) {
    //     // console.log('登录信息已过期！');
    //     window.location.href = '/';
    //   }
    // }
    if (window.isDebug) {
      setTimeout(() => {
        if (loadingFlag) {
          modal.closeModel(dialogId);
        }
        const localData = AJAX.localData[url];
        if (localData.result === 0) {
          successFn(localData);
        } else if (localData.result === 1001) {
          // console.log('登录信息已过期！');
          window.location.href = '/';
        } else {
          const errorMsg = ErrorCode(localData.code) || '服务器异常,请联系运维人员!';
          if (errorFn) {
            errorFn(errorMsg);
          } else {
            AJAX.modalError(errorMsg); // ajax错误统一处理
          }
        }
      }, 500);
      return;
    }

    url = AJAX.getEnvPrefix() + url;

    if (method.toLowerCase() === 'get') {
      data = null;
    } else {
      data = JSON.stringify(data);
    }

    $.ajax({
      method,
      url,
      data: {
        req: AJAX.isExisty(data) ? data : ''
      },
      headers: {
        Accept: 'application/json'
        // 'Content-Type': 'application/json'
      },
      dataType: 'json',
      traditional: true,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      success(result) {
        if (loadingFlag) {
          modal.closeModel(dialogId);
        }
        if (result.result === 0) {
          successFn(result);
        } else if (result.result === 1001) {
          // console.log('登录信息已过期！');
          window.location.href = '/';
        } else if (result.result === 1010) {
          // console.log(result.detail);
        } else {
          const errorMsg = ErrorCode(result.result) || '服务器异常,请联系运维人员!';
          if (errorFn) {
            errorFn(errorMsg);
          } else {
            AJAX.modalError(errorMsg);
          }
        }
      },
      error(...args) {
        if (errorFn) {
          errorFn(args);
        } else {
          AJAX.modalError(args);
        }
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

  static upload(fetchObj) {
    const {
      loadingFlag,
      method,
      successFn,
      errorFn,
      data
    } = fetchObj;
    let {
      url
    } = fetchObj;
    if (loadingFlag) {
      modal.showModel({
        type: 'loading'
      });
    }
    if (window.isDebug) {
      setTimeout(() => {
        if (loadingFlag) {
          modal.closeModel(dialogId);
        }
        const localData = AJAX.localData[url];
        if (localData.result === 0) {
          successFn(localData);
        } else if (localData.result === 1001) {
          // console.log('登录信息已过期！');
          window.location.href = '/';
        } else {
          const errorMsg = ErrorCode(localData.code) || '服务器异常,请联系运维人员!';
          if (errorFn) {
            errorFn(errorMsg);
          } else {
            AJAX.modalError(errorMsg); // ajax错误统一处理
          }
        }
      }, 500);
      return;
    }

    url = AJAX.getEnvPrefix() + url;

    $.ajax({
      method,
      url,
      data,
      async: true,
      cache: false,
      contentType: false,
      processData: false,
      traditional: true,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      success(result) {
        if (loadingFlag) {
          modal.closeModel(dialogId);
        }
        if (result.result === 0) {
          successFn(result);
        } else if (result.result === 1001) {
          // console.log('登录信息已过期！');
          window.location.href = '/';
        } else {
          const errorMsg = ErrorCode(result.result) || '服务器异常,请联系运维人员!';
          if (errorFn) {
            errorFn(errorMsg);
          } else {
            AJAX.modalError(errorMsg);
          }
        }
      },
      error(...args) {
        if (errorFn) {
          errorFn(args);
        } else {
          AJAX.modalError(args);
        }
      }
    });
  }
}
