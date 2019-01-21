import { observable } from 'mobx';
import Ajax from 'util/ajax';

export default class Rfidlabelstore {
  @observable data = {};

  fetchAlarmStat(param) {
    const params = {
      successFn(data) {
        if (param.fetchSuccess) {
          param.fetchSuccess(data.data);
        }
      },
      ...param
    };
    // console.log(params);
    Ajax.fetch(params);
  }

  fetchDevStatStat(param) {
    const params = {
      successFn(data) {
        if (param.fetchSuccess) {
          param.fetchSuccess(data.data);
        }
      },
      ...param
    };
    // console.log(params);
    Ajax.fetch(params);
  }

  fetchAlarmProcess(param) {
    const params = {
      successFn(data) {
        if (param.fetchSuccess) {
          param.fetchSuccess(data.data);
        }
      },
      ...param
    };
    // console.log(params);
    Ajax.fetch(params);
  }
}
