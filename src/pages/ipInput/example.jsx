import React, { Component } from 'react';
import {
  Form, Input, Button, Select, TreeSelect
} from 'antd';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import IPut from './ipInput';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    span: 9
  },
  wrapperCol: {
    span: 15
  }
};
@observer
class modalComponent extends Component {
  constructor(props) {
    super(props);
    this.handleOk = this.handleOk.bind(this);
    this.cancelClickHandler = this.cancelClickHandler.bind(this);
  }


  handleOk() {
    this.props.form.validateFields((errors, values) => {
      console.log(values);
      if (errors) {
        return;
      }
      const data = {
        ...values,
      };
      this.props.onTrigger('okBtn', data);
    });
  }

  cancelClickHandler() {
    this.props.onTrigger('cancelBtn');
  }

  changeFn(values) {
    //console.log(values);
  }

  render() {
    const { form, param } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className="swConfig" style={{ position: 'relative' }}>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
 
          <FormItem label="IP地址：" hasFeedback {...formItemLayout} style={{ display: 'inline-block', width: '48%' }}>
            {getFieldDecorator('ipaddr', {
              // initialValue: '15',
              rules: [
                {
                  required: true,
                  message: '请填写IP地址'
                }
              ]
            })(<IPut initialValue={this.props.param.ipaddr} onChange={this.changeFn} />)}
          </FormItem>

          <FormItem
            wrapperCol={{ span: 24 }}
            className="footer"
            style={{ textAlign: 'center' }}
          >
            <Button type="primary" htmlType="submit" onClick={this.handleOk}>
              确定
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.cancelClickHandler}>
              取消
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

modalComponent.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({
  mapPropsToFields(props) {
    const { param } = props;
    const id = param.id ? param.id : '';
    return {
      id: Form.createFormField({ value: id })
    };
  }
})(modalComponent);
