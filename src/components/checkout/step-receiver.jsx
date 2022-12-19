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
  Input,
  Text,
  Title,
  useStore,
  Icon,
  Picker,
  Button,
  DatePicker,
  ListInput,
} from "zmp-framework/react";
import store from "../../store";
import Chip from '../common/chip';
import AddNewRelationshipSheet from "../relationship/add-new";
import ReceiverLocation from "./receiver-location";
const StepCustomer = (props) =>  {

  const _update = useStore("updateTime");

  useEffect(() => {

  });

  return (
    <>

        <Box className="checkout input-receiver">
            <div className="step-title">
              <div className="progress" style={{ width: 40, height: 40 }}>
                <CircularProgressbar strokeWidth={12} value={50} text={"2/4"} />
              </div>
              <Text className="n">Thông tin giao hàng</Text>
            </div>


              <div className="cover">
                <Title>Thời gian giao hàng</Title>
                <Card key className="form">

                  <Row className="form-group">
                    <Col width='40' className="col-lbl">
                      <label className="form-label">Ngày giao</label>
                    </Col>
                    <Col width='60'>
                      <DatePicker
                        title="Chọn ngày giao"
                        clearButton
                        startYear={2000}
                        endYear={2030}
                        input
                      />
                    </Col>
                  </Row>

                  <Row className="form-group">
                    <Col width='40' className="col-lbl">
                      <label className="form-label">Giờ giao</label>
                    </Col>
                    <Col width='60'>

                        <Picker

                          title="Chọn thời gian giao hàng"
                          defaultSelect={['8-12']}

                          data={[
                            {
                              textAlign: 'center',
                              values: ['8-12', '12-16', '16-20'],
                              displayValues: [
                                '08:00-12:00',
                                '12:00-16:00',
                                '16:00-20:00'
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


                  </Card>
              </div>
              <div className="cover">
                <Title>Thông tin người nhận</Title>
                <div className="pdl10 pdr10">
                  <Chip text="Đã lưu" />
                  <Chip text="Tôi là người nhận" />
                  <Chip text="Người nhận mới" />
                </div>


                <AddNewRelationshipSheet />

                <ReceiverLocation />
              </div>


              <Card className="step-action">
                <Button large responsive className="btn btn-primary">Tiếp theo</Button>
              </Card>
        </Box>

    </>
  );
};

StepCustomer.displayName = "bnb-checkout-step-customer";

export default StepCustomer;
