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
const onClickOutlet = (e) => {
  store.dispatch("outlet");
}
export const FormInputProduct = (props) => {
    // const {text, csscolor} = props
    // const _class = csscolor + ' chip'
    return (

<Row className="search-input-text">
                  <Col width ="10">
                  <Button
                  onClick={() => onClickOutlet()}
                  >
                    <Icon className="back-icon" zmp = "zi-chevron-left" ></Icon>
                  </Button>
                  </Col>
                  <Col width = "90">
                   
                  <input 
                    className="search-input"
                    type="text"
                    placeholder="Tìm kiếm sản phẩm trong cửa hàng"
                    clearButton
                    name="search-input"
                    >
                  </input>
                    </Col>

                </Row>
                

    )
}


export default FormInputProduct
