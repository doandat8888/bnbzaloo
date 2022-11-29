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
import Chip from "../common/chip";
import Price from "./price";
import Loading from "../home/loading";
import sizeIcon1 from "../../static/icons/size-1.png";
import sizeIcon2 from "../../static/icons/size-2.png";
import sizeIcon3 from "../../static/icons/size-3.png";

export const NumberOrder = (props) => {
  const { product } = props;

  const _update = useStore("updateTime");
  const cartItem = useStore("cartItem");

  const changeNumber = (mode)  => {
    if(mode > 0 ){
      cartItem.num ++;
    } else {
      cartItem.num --;
    }

    store.dispatch("setCartItem", cartItem);
    store.dispatch("setUpdate", Math.random());
  }


  useEffect(() => {

  });

  return (
    <>
      {product == null ? (
        <Loading />
      ) : (
        <Card className='cover  small-padding no-margin zmp-card '>
      <div className='cover-c'>
      <Row >
            <Col className='text-right'>
              <Text className='button' bold>Số lượng: </Text>
            </Col>
            <Col>
            <Row className='text-center list-inline'>
            <Button onClick={() => changeNumber(-1)}>
              <span style={{fontSize: "36px", width: "36px", height: "36px"}} className="material-icons">
remove_circle
</span>
              </Button>
<Text className='button' size='xlarge'>{cartItem.num}</Text>
<Button onClick={() => changeNumber(+1)}>
              <span style={{fontSize: "36px", width: "36px", height: "36px"}} className="material-icons">
              add_circle
              </span>
              </Button>


            </Row>
            </Col>
          </Row>
</div>
      </Card>

      )}
    </>
  );
};

NumberOrder.displayName = "bnb-product-number-order";

export default NumberOrder;
