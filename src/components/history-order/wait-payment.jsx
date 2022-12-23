import React, { useState, useMemo, useEffect } from "react";
import {
  Page,
  Title,
  List,
  ListItem,
  Box,
  Button,
  Text,
  View,
  useStore,
  TabView,
  Tabbar,
  Link,
  Icon,
  Sheet,
  Input,
  Checkbox,
  DatePicker,
  Row,
  Col
} from "zmp-framework/react";
import "../../css/history-order/wait-payment.less";

const WaitPayment = () => {
  const [savedOrder, setSavedOrder] = useState(true);
  const [waitOrders, setwaitOrders] = useState([
    {
      id: 1,
      shopName: 'SAN Flower',
      name: 'Bó hoa hồng Loki Florist',
      size: 1,
      price: 900000,
      amount: 830000,
      status: 'Chờ thanh toán',
      img: '',
    },
    {
      id: 2,
      shopName: 'Flower Corner HCM',
      name: 'Bền lâu',
      size: 1,
      price: 570000,
      amount: 1570000,
      status: 'Chờ xử lý',
      img: '',
    },

  ])

  return (
    <div className="wait-payment-page">
      {savedOrder === false ?
        <div className="wait-payment-page-unsave">
          <Text className="wait-payment-page-txt title-txt">Bạn chưa có đơn hàng nào</Text>
        </div>
        :
        <div className="wait-payment-page-saved">
          {waitOrders.map((waitOrder, index) => {
            return (
              <>
                <div className='orders-list'>
                  <Row className='orders-item-top'>
                    <Col width='30'>
                    <p className='orders-item-shopname'>{waitOrder.shopName}</p>
                    </Col>
                    <Col width='70'>
                      <p className='orders-item-status'>{waitOrder.status}</p>
                    </Col>
                  </Row>
                  <Row className='orders-item-bottom'>
                    <Col className='orders-item-left' width='35'>
                      <img src={waitOrder.img} className='orders-item-left-img'/>
                    </Col>
                    <Col className='orders-item-right' width='65'>
                      <div className='orders-item-right-info-content'>
                        <p className='orders-item-right-name'>{waitOrder.name}</p>
                        <p className='orders-item-right-size'>Size {waitOrder.size}</p>
                      </div>
                    </Col>
                  </Row>
                  <Row className='orders-item-footer'>
                    <p>Thành tiền:</p>
                  <p className='orders-item-footer-amount'>{waitOrder.amount}</p>
                  </Row>
                  

                </div>
              </>
            )
          })}
        </div>
      }
    </div>
  )
}

export default WaitPayment;