import React, {useState} from "react";
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
  Row,
  Col,
  Icon
} from "zmp-framework/react";
import { zmp } from 'zmp-framework/react';
import addIcon from '../static/img/relative-people/add-icon.png'
import arrowBack from '../static/img/relative-people-info/arrow-back.png'
import "../css/relative/relative-people-info.less"
import familyPeople2 from "../static/img/relative-people/family/relative-people-2.png"
import cakeIcon from "../static/icons/events/cake-icon.png";

const RelativePeopleInfo = (props) => {

  const [specialDayArr, setSpecialDayArr] = useState([
    {
        name: 'Lễ thăng chức',
        date: '29-09-2022',
        description: 'Vào ngày thăng chức muốn được gia đình tặng quà'
    },
    {
        name: 'Ngày phụ nữ Việt Nam',
        date: '20-10-2022',
        description: 'Vào ngày phụ nữ Việt Nam mẹ muốn gia đình tặng quà và gửi những lời chúc tốt đẹp'
    },  
    {
        name: 'Sinh nhật',
        date: '27-10-2022',
        description: 'Vào ngày sinh nhật muốn được quây quần bên con cháu'
    },
    {
        name: 'Kỉ niệm ngày cưới',
        date: '28-12-2022',
        description: 'Vào ngày kỷ niệm ngày cưới muốn được chồng tặng quà'
    },
      
    
])

    return (
        <div className='relative-people-info'>
            <div className='relative-people-info-header'>
                <img src={arrowBack} className='info-header-icon-back'/>
                <img src={addIcon} className='info-header-icon-add'/>
            </div>
            <div className='people-info'>
                <img className='people-img' src={familyPeople2}/>
                <div className='people-name-relationship'>Anh Đào (mẹ)</div>
                <div className='people-province'>TP.Hồ Chí Minh</div>
            </div>
            <div className='special-dates'>
                <div className='special-dates-title'>Đã lưu <span style={{fontWeight: 600, fontSize: 17}}>{specialDayArr.length} ngày</span> đặc biệt</div>
                <div className='special-dates-list'>
                  {specialDayArr.map((specialDay, index) => {
                      return (
                        <Row className='special-dates-item'>
                            <Col className='special-dates-item-left' width='30'>
                                <img src={cakeIcon} className='special-date-item-img'/>
                                <div className='special-date-item-date'>{specialDay.date}</div>
                                <div className='special-date-item-date-left'>(còn 58 ngày)</div>
                                <button className='special-date-item-btn'>Chọn quà</button>
                            </Col>
                            <Col className='special-dates-item-right' width='70'>
                                <div className='special-dates-item-right-top'>
                                  <div className='special-dates-name'>{specialDay.name}</div>
                                </div>
                                <div className='special-dates-item-right-bottom'>
                                    <div className='special-dates-description'>{specialDay.description}</div>
                                </div>
                            </Col>
                        </Row>
                      )
                  })}
                  
                  
                </div>
            </div>
        </div>
    )
}

export default RelativePeopleInfo;