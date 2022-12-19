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
export const FormInputEmail = (props) => {
    // const {text, csscolor} = props
    // const _class = csscolor + ' chip'
    return (

<Row className="input-text pd">
                  
                  <Col width='330px'>
                    
                  <Input 
                    className="form-input"
                    type="email"
                    placeholder="Email của bạn"
                    clearButton
                    //label="Số điện thoại"
                    name="email"
                    required
                    errorMessage="Email chưa đúng định dạng"
                    validate
                    onValidate={(isValid) => setInputValid(isValid)}
                  >
                  </Input>
                  </Col>
                </Row>
                

    )
}

FormInputEmail.displayName = 'bnb-input-phone-number'

export default FormInputEmail
