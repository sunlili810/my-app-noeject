import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Input, Col, Row, Form
} from 'antd';
import './ipInput.less';
class pageComponent extends Component {
  constructor(props) {
    super(props);
    this.tempInitvalue = this.props.initialValue.split('.');
  }

  handleChange=(index, { target: { value } }) => {
    this.tempInitvalue[index] = value;
    const { onChange } = this.props;
    if (onChange) {
      onChange(this.tempInitvalue);
    }
  }

  render() {
    const { initialValue } = this.props;
    const tempInitvalue = initialValue.split('.');
    return (
      <div className="ipInputWrap">
        <Row>

          {

                tempInitvalue.map((item, index) => (
                  <Col span={6} className="col" key={index} style={{ display: 'inline-block' }}>

                    <Input defaultValue={item} onChange={this.handleChange.bind(this, index)} />
                    {index !== 3 ? (<i className="dot">.</i>) : ''}
                  </Col>
                ))

              }

        </Row>
      </div>
    );
  }
}

pageComponent.propTypes = {

};
export default Form.create({
  mapPropsToFields(props) {
    // const { param } = props;
    // const id = param.id ? param.id : '';
    // return {
    //  id: Form.createFormField({ value: id })
    // };
  }
})(pageComponent);
