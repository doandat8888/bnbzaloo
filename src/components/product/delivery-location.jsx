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

export const DeliveryLocation = (props) => {
  const { product } = props;

  const _update = useStore("updateTime");

  const datePickerData = [
    // districts
    {
      values: "1 2 3".split(" "),
      displayValues: ['Quan 1', 'Quan 2', 'Quan 3']
    }
  ];

  const handleChanged = (picker, values) => {

  };

  useEffect(() => {
    store.dispatch("setProduct", product);
  });

  return (
    <>
      {product == null ? (
        <Loading />
      ) : (
        <Card className="cover small-padding no-margin">
          <div className="cover-c">
            <Title size="small">Khu vực giao hàng</Title>
            <Row>
              <Col width={40}>
                <Text className="button">Quận / Huyện</Text>
              </Col>
              <Col width={60}>

                  <Box inline>
                    <Picker
                        placeholder="--Chọn--"
                      title="Chọn quận / huyện"
                      data={datePickerData}
                      inputId="select-district"
                      onChange={handleChanged}
                      formatValue={(values, displayValues) => {
                        return `${displayValues[0]}`;
                      }}
                    />
                  </Box>
              </Col>
            </Row>
          </div>
        </Card>
      )}
    </>
  );
};

DeliveryLocation.displayName = "bnb-product-delivery-location";

export default DeliveryLocation;
