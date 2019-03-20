import React, { Component } from 'react';
import Layout from 'components/layout/layout';

const list = [{
  key: '',
  value: '',
  title: '全部场所',
  children: [{
    key: '201903060937001',
    value: '201903060937001',
    title: '批量导入1',
    children: [{
      key: '201903060937002',
      value: '201903060937002',
      title: '批量导入2',
      children: [{
        key: '201903060937003',
        value: '201903060937003',
        title: '批量导入3',
        children: []
      }, {
        key: '201903060937008',
        value: '201903060937008',
        title: '批量导入8',
        children: []
      }, {
        key: '201903060937009',
        value: '201903060937009',
        title: '批量导入9',
        children: []
      }]
    }]
  }, {
    key: '201903060937004',
    value: '201903060937004',
    title: '批量导入4',
    children: [{
      key: '201903060937005',
      value: '201903060937005',
      title: '批量导入5',
      children: [{
        key: '201903060937010',
        value: '201903060937010',
        title: '批量导入10',
        children: []
      }, {
        key: '201903060937011',
        value: '201903060937011',
        title: '批量导入11',
        children: [{
          key: '201903060937013',
          value: '201903060937013',
          title: '批量导入13',
          children: []
        }, {
          key: '201903060937015',
          value: '201903060937015',
          title: '批量导入15',
          children: []
        }, {
          key: '201903060937016',
          value: '201903060937016',
          title: '批量导入16',
          children: []
        }, {
          key: '201903060937017',
          value: '201903060937017',
          title: '批量导入17',
          children: []
        }, {
          key: '201903060937018',
          value: '201903060937018',
          title: '批量导入18',
          children: []
        }, {
          key: '201903060937019',
          value: '201903060937019',
          title: '批量导入19',
          children: []
        }]
      }, {
        key: '201903060937012',
        value: '201903060937012',
        title: '批量导入12',
        children: []
      }, {
        key: '201903060937014',
        value: '201903060937014',
        title: '批量导入14',
        children: []
      }]
    }, {
      key: '201903060937006',
      value: '201903060937006',
      title: '批量导入6',
      children: []
    }]
  }, {
    key: '201903060937007',
    value: '201903060937007',
    title: '批量导入7',
    children: []
  }, {
    key: 'PL1552978407787398',
    value: 'PL1552978407787398',
    title: '场所1',
    children: [{
      key: 'PL1552978433146222',
      value: 'PL1552978433146222',
      title: '子场所11',
      children: []
    }]
  }, {
    key: 'PL1552978451164155',
    value: 'PL1552978451164155',
    title: '场所2',
    children: [{
      key: 'PL1552978481564309',
      value: 'PL1552978481564309',
      title: '子场所21',
      children: []
    }]
  }]
}];


class PageComponent extends Component {
  newPlacelist = (arr) => {
    arr.forEach((v) => {
      Object.assign(v, { pId: v.key });
      if (v.children) {
        this.newPlacelist(v.children);
      }
    });
  };

  render() {
    this.newPlacelist(list);
    console.log(list);
    return (
      <Layout name="item2">
        <div className="item2">


        ----800000000000
        </div>
      </Layout>
    );
  }
}
export default PageComponent;
