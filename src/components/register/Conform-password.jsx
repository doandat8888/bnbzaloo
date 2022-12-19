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
export const FormConformPassword = (props) => {
    // const {text, csscolor} = props
    // const _class = csscolor + ' chip'
    return (

<Row className="input-text pd">
                  
                  <Col width='330px'>
                    
                  <Input 
                    className="form-input"
                    type="password"
                    placeholder="Nhập lại mật khẩu của bạn"
                    clearButton
                    name="password"
                    required
                    errorMessage="Mật khẩu không đúng định dạng"
                    pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$'
                    validate
                  >
                  </Input>
                  </Col>
                </Row>
                

    )
}

FormConformPassword.displayName = 'bnb-input-phone-number'

export default FormConformPassword
