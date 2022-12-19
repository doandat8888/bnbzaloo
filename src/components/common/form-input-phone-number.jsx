import { object } from "prop-types";
import React, { useEffect } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
  Card,
  Link,
  Box,
  List,
  ListItem,
  Row,
  Col,
  Text,
  Picker,
  Input,
  Title,
  useStore,
  Icon,
  Button,
  ListInput,
} from "zmp-framework/react";
import store from "../../store";


export const FormInputPhonenNumber = (props) => {
    // const {text, csscolor} = props
    // const _class = csscolor + ' chip'
    return (

<Row className="form-group item-input">
                  <Col width='40'>
                  <Picker
            title="Chọn mã vùng quốc gia"
            label="Mã vùng"
            defaultSelect={['+84']}

            data={[
            {
                textAlign: 'center',
                values: ['+84', '+1', '+2'],
                displayValues: [
                '+84 Việt Nam',
                '+1 United',
                '+2 Lào'
                ]
            }
            ]}
            formatValue={(values, displayValues) => {
            return `${displayValues[0]}`;
            }}
            inputId='custom-picker-1'
            />

                  </Col>
                  <Col width='60'>
                  <Input
                    type="text"
                    placeholder="0989..."
                    clearButton
                    label="Số điện thoại"
                    info="Nhập số điện thoại"
                    name="phone_number"
                    required
                    errorMessage="Số điện thoại là bắt buộc nhập"
                    validate
                  >
                  </Input>
                  </Col>
                </Row>
    )
}

FormInputPhonenNumber.displayName = 'bnb-input-phone-number'

export default FormInputPhonenNumber
