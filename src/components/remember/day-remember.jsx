import React, {useState, useMemo, useEffect} from "react";
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
import { zmp } from 'zmp-framework/react'
import "../../css/remember/day-remember.less";
import familyPeople1 from "../../static/img/relative-people/family/relative-people-1.png"
import familyPeople2 from "../../static/img/relative-people/family/relative-people-2.png"
import familyPeople3 from "../../static/img/relative-people/family/relative-people-3.png"
import familyPeople4 from "../../static/img/relative-people/family/relative-people-4.png"
import familyPeople5 from "../../static/img/relative-people/family/relative-people-5.png"
import familyPeople6 from "../../static/img/relative-people/family/relative-people-6.png"
import familyPeople7 from "../../static/img/relative-people/family/relative-people-7.png"
import familyPeople8 from "../../static/img/relative-people/family/relative-people-8.png"
import socialPeople1 from "../../static/img/relative-people/social/social-people-1.png";
import socialPeople2 from "../../static/img/relative-people/social/social-people-2.png";
import socialPeople3 from "../../static/img/relative-people/social/social-people-3.png";
import nonePeople from "../../static/img/relative-people/none/none-people.png";
import cakeIcon from "../../static/icons/events/cake-icon.png";
import heartIcon from "../../static/icons/events/heart-icon.png";
import bachelorHat from "../../static/icons/events/bachelor-hat.png";
import wedding from "../../static/icons/events/wedding.png";
import calendarIcon from "../../static/icons/calendar.png";
import btnAdd from "../../static/icons/add-btn.png";
import { each } from "zmp-dom";
import store from "../../store";
import ModalChoosePeople from "./modal-choose-people";
import ModalCreateDay from "./modal-create-day";
import ModalChooseEvent from "./modal-choose-event";
import { Modal } from "zmp-ui";



const DayRemember = () => {

    const [showModalChoosePeople, setModalChoosePeople] = useState(false);
    const [showModalCreateDay, setShowModalCreateDay] = useState(false);
    const [showModalChooseEvent, setShowModalChooseEvent] = useState(false);
    const [eventChoose, setEventChoose] = useState({});
    const [peopleChoose, setPeopleChoose] = useState({});
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [savedPeople, setSavedPeople] = useState(false);

    const openModalChoosePeople = () => {
        setModalChoosePeople(true);
    }

    

    const [relativePeoples, setRelativePeoples] = useState([
      {
          type: 'Gia đình',
          peoples: [
            {
                name: 'Emily',
                relationship: 'Em gái',
                img: familyPeople1,
                event: {
                    name: '',
                },
            },
            {
                name: 'Anh Đào',
                relationship: 'Mẹ',
                img: familyPeople2,
                event: {
                  name: ''
                },
            },
            {
                name: 'Ben',
                relationship: 'Cha',
                img: familyPeople3,
                event: {
                  name: ''
                },
            },
            {
                name: 'Mẫn Nghi',
                relationship: 'Cháu gái',
                img: familyPeople4,
                event: {
                  name: ''
                },
            },
            {
                name: 'Ayden',
                relationship: 'Cháu trai',
                img: familyPeople5,
                event: {
                  name: ''
                },
            },
          ],
      },
      {
          type: 'Xã hội',
          peoples: [
            {
                name: 'David',
                relationship: 'Sếp',
                img: socialPeople1,
                event: {
                  name: ''
                },
            },
            {
                name: 'Kathy',
                relationship: 'Bạn bè',
                img: socialPeople2,
                event: {
                  name: ''
                },
            },
            
          ],
      },
      {
        type: 'Chưa phân loại',
        peoples: [
          {
              name: 'Một ai đó',
              event: {
                name: ''
              },
          },
          
        ],
    },
      
    ])

    const [chooseEventArr, setEventArr] = useState([
        {
            type: 'Cá nhân',
            events: [
                {
                    name: 'Sinh nhật',
                },
                {
                    name: 'Một dịp quan trọng',
                },
            ]
        },
        {
            type: 'Ngày lễ trong năm',
            events: [
                {
                    name: 'Trung thu',
                },
                {
                    name: 'Quốc khánh',
                },
                {
                    name: 'Tết',
                },
                {
                    name: 'Giáng sinh',
                },
                {
                    name: 'Giỗ tổ Hùng Vương',
                },
            ]
        },
        {
          type: 'Một sự kiện khác',
          events: [
              {
                  name: 'Chia buồn',
              },
              {
                  name: 'Một dịp khác',
              },
          ]
      },
    ])

    const [rememberDates, setRememberDates] = useState([
        {
            month: 7,
            events: [
                {
                    date: '20-07-2022',
                    name: 'Sinh nhật',
                    people: {
                        name: 'Wiliam',
                        relationship: 'Anh trai',
                        img: familyPeople6
                    },
                    icon: cakeIcon
                },
                {
                    date: '22-07-2022',
                    name: 'Ngày yêu nhau',
                    people: {
                        name: 'Minh Minh',
                        relationship: 'Bạn trai',
                        img: familyPeople7
                    },
                    icon: heartIcon
                },
                {
                    date: '28-07-2022',
                    name: 'Lễ tốt nghiệp',
                    people: {
                        name: 'Wiliam',
                        relationship: 'Anh trai',
                        img: familyPeople6
                    },
                    icon: bachelorHat
                },
            ]
        },
        {
            month: 8,
            events: [
              {
                  date: '18-08-2022',
                  name: 'Sinh nhật',
                  people: {
                      name: 'Nguyên Nguyễn',
                      relationship: 'Bạn thân',
                      img: socialPeople3
                  },
                  icon: cakeIcon
              },
              {
                  date: '24-08-2022',
                  name: 'Đám cưới',
                  people: {
                      name: 'Philips',
                      relationship: 'Anh họ',
                      img: familyPeople8
                  },
                  icon: wedding
              },
              
            ]
        },
    ]) 

    const onClickPeople = (people) => {
        setModalChoosePeople(false);
        setShowModalCreateDay(true);
        setPeopleChoose(people);
    }

    const onClickChooseEvent = () => {
        setShowModalCreateDay(false);
        setShowModalChooseEvent(true);
    }

    const onCloseModalEvent = () => {
        setShowModalChooseEvent(false);
        setShowModalCreateDay(true);
    }

    const onChooseEvent = (event, peopleChoose) => {
        setEventChoose(event);
        setShowModalChooseEvent(false);
        setShowModalCreateDay(true);
        for(let i = 0; i < relativePeoples.length; i++) {
            for(let j = i + 1; j < relativePeoples[i].peoples.length; j++) {
                if(relativePeoples[i].peoples[j].name === peopleChoose.name) {
                    let newPeopleChoose = {
                        ...peopleChoose,
                        event: {
                            name: event.name
                        }
                    }
                    setPeopleChoose(newPeopleChoose);
                }
            }
        }
    }

    const onCloseModalCreateDay = () => {
        setShowModalCreateDay(false);
        setEventChoose({});
    }

    const onShowDatePicker = () => {
        setShowDatePicker(true);
    }

    const onSavePeople = () => {
        setShowModalCreateDay(false);
        setSavedPeople(true);
    }

    const showChooseGiftPage = (e) => {
      store.dispatch("chooseGift");
    }

    const onClickSignup = (e) => {
      store.dispatch("signup");
    }

    const onSheetClosed = () => {
        setModalChoosePeople(false);
    }

    const countPeople = (rememberDate) => {
        let numberOfPeoples = 0;
        let rememberDateCopy = rememberDate;
        for(let i = 0; i < rememberDateCopy.events.length; i++) {
            if(rememberDateCopy.events[i].people.name !== 'Marked') {
              for(let j = i + 1; j < rememberDateCopy.events.length; j++) {
                if(rememberDateCopy.events[i].people.name == rememberDateCopy.events[j].people.name) {
                  rememberDateCopy.events[j].people.name = 'Marked';
                }
              }
            }
        }
        for(let i = 0; i < rememberDateCopy.events.length; i++) {
          if(rememberDateCopy.events[i].people.name !== 'Marked') {
              numberOfPeoples++;
          }
        }
        return numberOfPeoples;
    }

    return (
        <div className="day-remember-page">
            {savedPeople === false ? 
              <div className="day-remember-page-unsave">
                  <Text className="day-remember-page-txt title-txt">Bạn chưa có danh sách những ngày cần nhớ</Text>
                  <Text className="day-remember-page-txt add-day-txt">Thêm ngày cần nhớ tại đây</Text>
                  <Button className="add-day-btn" onClick={openModalChoosePeople}>
                      <Icon className="add-day-icon" zmp="zi-plus"></Icon>
                  </Button>
                  <div>
                    <ModalChoosePeople relativePeoples={relativePeoples} onClickPeople={onClickPeople} showModalChoosePeople={showModalChoosePeople} onSheetClosed={onSheetClosed}/>
                    <ModalCreateDay peopleChoose={peopleChoose} showModalCreateDay={showModalCreateDay} onSheetClosed={() => setShowModalCreateDay(false)} onClickChooseEvent={onClickChooseEvent} eventChoose={eventChoose} onShowDatePicker={() => setShowDatePicker(true)} onSavePeople={onSavePeople}/>
                    <ModalChooseEvent showModalChooseEvent={showModalChooseEvent} onCloseModalEvent={onCloseModalEvent} chooseEventArr={chooseEventArr} onChooseEvent={onChooseEvent} peopleChoose={peopleChoose}/>
                  </div>
                  
              </div>
              : 
              <div className="day-remember-page-saved">
                  <div className='saved-title'>Bạn có 2 ngày cần nhớ trong 10 ngày tới</div>
                    <div className='remember-events-list'>
                      {rememberDates.map((rememberDate, index) => {
                          return (
                              <div className='remember-events-item' key={index}>
                                  <div className='remember-events-item-top'>
                                    <p className='remember-events-item-title'>Tháng {rememberDate.month}</p>
                                    <div className='remember-events-item-top-icons'>
                                        <div className='remember-events-item-top-icon' onClick={() => alert('Clicked')}>
                                          <img src={calendarIcon} className='remember-events-item-top-icon-img' />
                                        </div>
                                        <div className='remember-events-item-top-icon' onClick={() => alert('Clicked')}>
                                          <img src={btnAdd} className='remember-events-item-top-icon-img' />
                                        </div>
                                        
                                    </div>
                                  </div>
                                  
                                  <p className='remember-events-item-txt-remind'>Bạn có <b>{countPeople(rememberDate)} người </b> và <b>{rememberDate.events.length} ngày</b> đặc biệt</p>
                                  <Row className='events-list'>
                                    {rememberDate.events.map((eventItem, index) => {
                                        return (
                                          
                                            <Row className='events-item'>
                                              <Col className='events-item-left' width='35'>
                                                <img src={eventItem.icon} className='event-item-left-icon'/>
                                                  <p className='event-item-date'>{eventItem.date}</p>
                                                  <button className='events-item-left-btn' onClick={() => showChooseGiftPage()}>Chọn quà</button>
                                              </Col>
                                              <Col className='events-item-right' width='65'>
                                                <p className='events-item-right-title'>{eventItem.name}</p>
                                                <Row className='events-item-right-people'>
                                                    <Col width='30' className='events-item-right-img-container'>
                                                        <img src={eventItem.people.img} className='events-item-right-img'></img>
                                                    </Col>
                                                    <Col width='70' className='events-item-right-info'>
                                                        <div className='events-item-right-info-content'>
                                                          <p className='events-item-right-name'>{eventItem.people.name}</p>
                                                          <p className='events-item-right-relationship'>{eventItem.people.relationship}</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                              </Col>
                                            </Row>
                                        )
                                    })}
                                  </Row>
                              </div>
                          )
                      })}
                  </div>
                  
              </div>
            }
        </div>
        
    )
};

export default DayRemember;