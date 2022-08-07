import React, {useState, useMemo, useEffect} from 'react';
import {  Row, useStore, Radio, Title, Card, Text, Col,  Box, Button, List, ListItem } from "zmp-framework/react";
import store from '../../store'
import { showMessageToast } from "../../services/bnb";
import Chip from './chip';
import Price from './price';
import Loading from '../home/loading';
import sizeIcon1 from "../../static/icons/size-1.png";
import sizeIcon2 from "../../static/icons/size-2.png";
import sizeIcon3 from "../../static/icons/size-3.png";

export const DeliveryDateTime = (props) => {
  const [showAddToCart, setShowAddToCart] = useState(false)
  const { product } = props;
  const { prices, extras } = product;


  const _product = useStore("product");
  const {priceOptions} = _product;
  const _update = useStore("updateTime");


  useEffect(() => {
    store.dispatch("setProduct", product);

  });

  return (
    <>
    {priceOptions == null  ?
        <Loading />
     :
        <Card className="cover small-padding no-margin">
            <div className='cover-c'>
              <Title size='small'>Thời gian giao hàng</Title>

            </div>
          </Card>
    }
          </>
  )
};

DeliveryDateTime.displayName = "bnb-product-delivery-datetime";

export default DeliveryDateTime;
