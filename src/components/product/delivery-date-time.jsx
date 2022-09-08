import React, { useState, useMemo, useEffect } from "react";
import {
  Row,
  useStore,
  Radio,
  ListInput,
  Title,
  Card,
  Picker,
  Text,
  Col,
  Box,
  Button,
  DatePicker,
  Link,
  List,
  ListItem,
} from "zmp-framework/react";
import store from "../../store";
import { showMessageToast } from "../../services/bnb";
import Chip from "./chip";
import Price from "./price";
import Loading from "../home/loading";
import sizeIcon1 from "../../static/icons/size-1.png";
import sizeIcon2 from "../../static/icons/size-2.png";
import sizeIcon3 from "../../static/icons/size-3.png";

export const DeliveryDateTime = (props) => {
  const { product } = props;

  var cartItem = useStore("cartItem");
  const _update = useStore("updateTime");

  // init values
  var selectedDate = cartItem.date;
  var dateArr = cartItem.dateArr;

  if(!selectedDate){
    var date = new Date();
    const d = date.getDay();
    const mon = date.getMonth();

    dateArr = [0, mon + 1, d + 1];
  }


  const datePickerData = [
    {
      // Năm
      values: (function createValues() {
        const arr = [];
        const startY = new Date().getFullYear();
        const endY = startY + 1;
        for (let i = startY; i <= endY; i += 1) {
          arr.push(i);
        }
        return arr;
      })(),
    },
    // Tháng
    {
      values: "0 1 2 3 4 5 6 7 8 9 10 11".split(" "),
      displayValues:
        "January February March April May June July August September October November December".split(
          " "
        ),
    },
    // Ngày
    {
      values: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
  ];

  const setDeliveryTime = (value) => {
    cartItem.time_range = value;
    store.dispatch("setCartItem", cartItem);
    store.dispatch("setUpdate", Math.random());
  }

  const handleChangeDate = (date) => {
    // const values = picker.value;
    // const daysInMonth = new Date(
    //   picker.value[0],
    //   picker.value[1] * 1 + 1,
    //   0
    // ).getDate();

    // if (values[2] > daysInMonth) {
    //   picker.cols[2].setValue(daysInMonth);
    // }

    // const d = values[2].padStart(2,'0');
    // const m =(values[1]*1 + 1).toString();
    // const mm = m.padStart(2,'0');




    cartItem.date = date.toString();

    cartItem.dateObj = date;

    store.dispatch("setCartItem", cartItem);
    store.dispatch("setUpdate", Math.random());

    picker.opened = false;
  };

  // useEffect(() => {
  //   store.dispatch("setProduct", product);
  // }, [selectedDate]);

  return (
    <>
      {product == null ? (
        <Loading />
      ) : (
        <Card className="cover small-padding no-margin">
          <div className="cover-c">
            <Title size="small">Thời gian giao hàng</Title>
            <Row>
              <Col width={40}>
                <Text className="button">Ngày giao</Text>
              </Col>
              <Col width={60}>

                <Box className="pdt15 pdbt20">
                    <DatePicker locale="vi" listInput clearButton  onClick={handleChangeDate} />
                </Box>


              </Col>
            </Row>

            <Row>
              <Col width={40}>
                <Text className="button">Giờ giao</Text>
              </Col>
              <Col width={60}>

                  <Box inline className="chips">
                  <Link onClick={() => setDeliveryTime('8-12')} href="#"><Chip  text="8-12" csscolor={ cartItem.time_range == '8-12' ? "active" : '' } /></Link>
                  <Link onClick={() => setDeliveryTime('12-16') }><Chip  text="12-16" csscolor={ cartItem.time_range == '12-16' ? "active" : '' } /></Link>
                    <Link onClick={() => setDeliveryTime('16-20') } ><Chip text="16-20" csscolor={ cartItem.time_range == '16-20' ? "active" : '' } /></Link>
                  </Box>

                  <Row>
                    <Link href="#" className="btn mt10 btn-link">Bạn cần giao gấp hôm nay?</Link>
                  </Row>
              </Col>
            </Row>
          </div>
        </Card>
      )}
    </>
  );
};

DeliveryDateTime.displayName = "bnb-product-delivery-datetime";

export default DeliveryDateTime;
