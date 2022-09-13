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
  Title,
  useStore,
  Icon,
  Button,
  ListInput,
} from "zmp-framework/react";
import store from "../../store";

const StepCustomer = (props) =>  {

  const _update = useStore("updateTime");

  useEffect(() => {

  });

  return (
    <>

        <Box className="checkout input-customer cover">
            <div className="step-title">
              <div className="progress" style={{ width: 40, height: 40 }}>
                <CircularProgressbar strokeWidth={12} value={25} text={"1/4"} />
              </div>
              <Text className="n">Thông tin người đặt hàng</Text>
            </div>


              <Card key className="form">

                <List form noHairlines>

                  <ListInput
                    label='Họ tên của bạn'
                    type="text"
                    placeholder="Nhập vào tên của bạn"
                    clearButton

                    info="Tên của bạn OK"
                    name="fullName"
                    required
                    errorMessage="Invalid"
                    validate
                  >
                  </ListInput>



                  <ListInput
                    label='Mã quốc gia'

                    type="text"
                    placeholder="+84"
                    clearButton
                    info="Mã vùng điện thoại quốc gia"
                    name="phone_code"
                    required
                    errorMessage="Invalid"
                    validate
                  >
                  </ListInput>
                  <ListInput
                    label='Số điện thoại của bạn'
                    type="text"
                    placeholder="Nhập vào số điện thoại"
                    clearButton
                    info="Số di động của bạn để liên hệ về đơn hàng"
                    name="phone"
                    required
                    errorMessage="Invalid"
                    validate
                  >
                  </ListInput>



                  <ListInput
                    label='Email của bạn'
                    type="email"
                    placeholder="Nhập vào email"
                    clearButton
                    info="Email sẽ nhận thông báo về đơn hàng"
                    name="email"
                    required
                    errorMessage="Invalid"
                    validate
                  >
                  </ListInput>

                </List>
              </Card>

              <Card className="step-action">
                <Button large responsive className="btn btn-primary">Tiếp theo</Button>
              </Card>
        </Box>

    </>
  );
};

StepCustomer.displayName = "bnb-checkout-step-customer";

export default StepCustomer;
