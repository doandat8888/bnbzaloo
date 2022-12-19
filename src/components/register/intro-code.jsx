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


export const FormInputCode = (props) => {
    // const {text, csscolor} = props
    // const _class = csscolor + ' chip'
    return (

<Row className="form-group item-input">
                  <Col width='60'>
                  <Input
                    type = "text"
                    placeholder ="Nhập mã giới thiệu"
                    clearButton
                    ></Input>
                  </Col>
                  <Col width='15'>
                    <p>Hoặc</p>
                     </Col>
                  <Col width='25'>
                  <Picker
                  displayValues
            defaultSelect={['Quét mã']}

            data={[
            {
                textAlign: 'center',
                values: ['Chụp ảnh','Chọn ảnh từ thư viện'],
                displayValues: [
                  'Chụp ảnh',
                  'Chọn ảnh từ thư viện'
                ]
            }
            ]}
            formatValue={(values, displayValues) => {
            return `${displayValues[0]}`;
            }}
            inputId='custom-picker-1'
            />
                  </Col>
                </Row>
    )
}

FormInputCode.displayName = 'bnb-input-phone-number'

export default FormInputCode
