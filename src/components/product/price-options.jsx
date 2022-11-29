import React, {useState, useMemo, useEffect} from 'react';
import {  Row, useStore, Radio, Title, Card, Text, Col,  Box, Button, List, ListItem } from "zmp-framework/react";
import store from '../../store'
import { showMessageToast } from "../../services/bnb";
import Chip from '../common/chip';
import Price from './price';
import Loading from '../home/loading';
import sizeIcon1 from "../../static/icons/size-1.png";
import sizeIcon2 from "../../static/icons/size-2.png";
import sizeIcon3 from "../../static/icons/size-3.png";
import { zmp } from 'zmp-framework/react'

export const PriceOptions = (props) => {
  const [showAddToCart, setShowAddToCart] = useState(false)
  const { product } = props;
  const { prices, extras } = product;


  const _product = useStore("product");
  const {priceOptions} = _product;

  var cartItem = useStore("cartItem");
  const _update = useStore("updateTime");

  const selectPrice = (price, row) => {

    cartItem.size = price.id;
    store.dispatch("setCartItem", cartItem);
    store.dispatch("setUpdate", Math.random());

    var priceRadio = row.currentTarget.querySelector('#' + price.id + " input");
    priceRadio.checked = true;
  };

  useEffect(() => {
    prices.regular = prices.deluxe = prices.premium = 1000000;
    prices.regular_discount = prices.deluxe_discount = prices.premium_discount = 800000;

    var options = [
        {
            id: "regular",
            image: sizeIcon1,
            name: "Size 1",
            price: prices.regular,
            price_discount: prices.regular_discount,
            size: extras['sm_size'],
            intro: extras['sm_intro']
        }
    ];

    if(prices.deluxe > 0){
        options.push({
            id: "deluxe",
            image: sizeIcon1,
            name: "Size 2",
            price: prices.deluxe,
            price_discount: prices.deluxe_discount,
            size: extras['md_size'],
            intro: extras['md_intro']
        });
    }

    if(prices.premium > 0){
        options.push({
            id: "premium",
            image: sizeIcon3,
            name: "Size 3",
            price: prices.premium,
            price_discount: prices.premium_discount,
            size: extras['lg_size'],
            intro: extras['lg_intro']
        });
    }

    product.priceOptions = options;
    store.dispatch("setProduct", product);

  });

  return (
    <>
    {priceOptions == null  ?
        <Loading />
     :
        <Card className="cover small-padding no-margin">
            <div className='cover-c'>
              <Title size='small'>Kích thước</Title>
              <List className='product'>
                {priceOptions.map((price, index) => (

                <Row className='row-center-center mbt5' key={index} onClick={(_v) => selectPrice(price, _v)}>
                    <Col width={15} className="cc-col">
                        <Radio id={price.id} name='size' checked={cartItem.size == price.id} value={price.id}  />
                    </Col>
                    <Col width={15} className="cc-col"><img src={price.image} className="mr10" /></Col>
                    <Col width={70}>
                        <Title className='inblock mr5' size='small' style={{marginBottom: 0}}>{price.name}</Title>
                        <Price inline price={price} />
                        {price.intro || price.intro ?
                        <Text className='mt5'>{price.intro} ({price.size})</Text>
                        : <></>
                        }

                    </Col>
                </Row>
                ))}
              </List>
            </div>
          </Card>
    }
          </>
  )
};

PriceOptions.displayName = "bnb-product-price-options";

export default PriceOptions;
