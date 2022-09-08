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
import { getDistricts, getProvinces } from "../../services/bnb";
import Chip from "./chip";
import Price from "./price";
import Loading from "../home/loading";
import sizeIcon1 from "../../static/icons/size-1.png";
import sizeIcon2 from "../../static/icons/size-2.png";
import sizeIcon3 from "../../static/icons/size-3.png";



export const DeliveryLocation = (props) => {
  const { product } = props;
  const [loading, setLoading] = useState(true);
  // const loading =  useStore("loading");
  const _update = useStore("updateTime");
  const location = useStore("location");
  const cartItem = useStore("cartItem");


  const datePickerData = [];

  const handleOnChanged = (picker, values) => {
    cartItem.district_id = picker.value[0];
    store.dispatch("setCartItem", cartItem);
    store.dispatch("setUpdate", Math.random());
  };

  useEffect(() => {
    if(true){
      // store.dispatch("setProduct", product);
      datePickerData.push(
        {
          values: [],
          displayValues: []
        }
      );

      getDistricts(location.province).then((ret) => {
        ret.districts.forEach((d, index) => {
          datePickerData[0]['values'].push(d._id);
          datePickerData[0]['displayValues'].push(d.name);
        });
        store.dispatch("setUpdate", Math.random());
        setLoading(false);
      });
    }

  }, [loading]);

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
                      values = {[cartItem.district_id]}
                      data={datePickerData}
                      inputId="select-district"
                      onChange={handleOnChanged}
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
