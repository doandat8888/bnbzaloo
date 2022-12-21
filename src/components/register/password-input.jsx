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
export const FormInputPassword = (props) => {
  // const {text, csscolor} = props
  // const _class = csscolor + ' chip'
  return (

    <Row className="input-text pd">

      <Col width='330px'>

        <Input
          className="form-input"
          type="password"
          placeholder='Mật khẩu của bạn'
          info="Mật khẩu từ 6-30 kí tự"
          clearButton
          name="password"
          required
          errorMessage="Mật khẩu là bắt buộc"
          pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$'
          validate
        >
        </Input>
      </Col>
    </Row>


  )
}

FormInputPassword.displayName = 'bnb-input-phone-number'

export default FormInputPassword
