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
export const FormInput = (props) => {
  // const {text, csscolor} = props
  // const _class = csscolor + ' chip'
  return (

    <Row className="input-text pd">

      <Col width='330px'>

        <Input
          className="form-input"
          type="text"
          placeholder="Email / Số điện thoại"
          clearButton
          name="full-name"
          required
          errorMessage="bắt buộc nhập"
          validate
        >
        </Input>
      </Col>
    </Row>


  )
}

FormInput.displayName = 'bnb-input'

export default FormInput
