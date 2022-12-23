import React, {useEffect, useState} from "react";
import { zmp } from 'zmp-framework/react'
import "../css/choose-gift.less"
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
import familyPeople6 from "../static/img/relative-people/family/relative-people-6-2.png"
import gift1 from "../static/img/gifts/gift1.png"
import combo from "../static/img/gifts/combo.png";
import GiftAllProducts from "../components/choose-gift/gift-all-products";
import GiftClassifyProduct from "../components/choose-gift/gift-classify-products";
const ChooseGift = () => {

  const [typeChoose, setTypeChoose] = useState(1);

  const [btns, setBtns] = useState([
      { 
          type: 1,
          name: 'Xem thêm tổng hợp',
          isSelected: true,
      },
      {
          type: 2,
          name: 'Xem theo ngành hàng',
          isSelected: false,
      },
  ])

  const [productGifts, setProductGifts] = useState([
      {
          name: 'Bó hoa hồng Loki Florist',
          price: 760000,
          img: gift1,
          id: 'D612583',
          type: 'Hoa tươi',
          shipFee: 'Freeship',
          priceOld: 820000
      },
      {
        name: 'Bó hoa hồng Loki Florist',
          price: 760000,
          img: gift1,
          id: 'D609872',
          type: 'Hoa tươi',
          shipFee: 'Freeship',
          priceOld: 820000
      },
      {
        name: 'Bó hoa hồng Loki Florist',
          price: 760000,
          img: gift1,
          id: 'D618873',
           type: 'Hoa tươi',
           shipFee: 'Freeship',
           priceOld: 820000
      },
      {
        name: 'Bó hoa hồng Loki Florist',
          price: 760000,
          img: gift1,
          id: 'D601207',
           type: 'Hoa tươi',
           shipFee: 'Freeship',
           priceOld: 820000
      },
  ])

    return (
        <div className='choose-gift-page'>
          <div className='choose-gift-page-title'>Bạn đang chọn quà <div className='choose-gift-page-subtitle'>sinh nhật</div> tặng cho</div>
          <div className="people">
              <div className='people-img-container'>
                  <img src={familyPeople6} className='people-img'/>
              </div>
              <div className='people-name'>William (anh trai)</div>
              <div className='people-province'>TP.Hồ Chí Minh</div>
          </div>
          <Row className='view-btn-list'>
              {btns.map((btn, index) => {
                    if(btn.isSelected === true) {
                      return <Col key={index} width='50'><button className='view-btn-item active' onClick={() => setTypeChoose(btn.type)}>{btn.name}</button></Col>
                    }else {
                      return <Col key={index} width='50'><button className='view-btn-item' onClick={() => setTypeChoose(btn.type)}>{btn.name}</button></Col>
                    }
              })}
          </Row>
          {typeChoose === 1 ? <GiftAllProducts productGifts={productGifts}/> : <GiftClassifyProduct productGifts={productGifts}/>}
          
          
        </div>
        
    )
}

export default ChooseGift;