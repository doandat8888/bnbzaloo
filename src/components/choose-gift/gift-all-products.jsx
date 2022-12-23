import React, {useEffect, useState} from "react";
import { zmp } from 'zmp-framework/react'
import {
  Icon,
  Box,
  Button,
  Row,
  Col,
  Card,
  GridItem,
  Text,
  Grid,
  Title,
  List,
  useStore,
} from "zmp-framework/react";
import combo from "../../static/img/gifts/combo.png"

const GiftAllProducts = (props) => {

  let {productGifts} = props;

  return (
    <Row className='gift-product-list'>
        {productGifts.map((productGift, index) => {
            return (
              <Col className='gift-product-item' width='45'>
                  <div className='gift-product-item-container'>
                      <img src={combo} className='gift-product-item-combo'/>
                      <div className='gift-product-item-img-container'>
                        <img className='gift-product-item-img' src={productGift.img}/>
                      </div>
                      <div className='gift-product-info'>
                        <div className='gift-product-info-top'>
                            <div className='gift-product-info-top-item id'>{productGift.id}</div>
                            <div className='gift-product-info-top-item type'>{productGift.type}</div>
                            <div className='gift-product-info-top-item ship'>{productGift.shipFee}</div>
                        </div>
                        <div className='gift-product-info-name'>{productGift.name}</div>
                        <div className='gift-product-info-price'>{productGift.price}đ</div>
                        <strike><div className='gift-product-info-price-old'>{productGift.priceOld}đ</div></strike>
                      </div>
                  </div>
                  
              </Col>
            )
        })}
      
    </Row>
  )
  
}

export default GiftAllProducts